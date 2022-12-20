import { Button, Table } from "react-bootstrap";
import "../../../styles/lists.css";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import Loading from "../../public/others/LoadingFull";

 
export default function ListTimes() {
  const [Time, setTime] = useState([]);

  const [removeLoading, setRemoveLoading] = useState(false) //loading
    const [resultDelete, setResultDelete] = useState([])

  useEffect(() => {
    setRemoveLoading(false)

    api.get("/time/list/").then((res) => {
      setTime(res.data.dados);  
      setRemoveLoading(true)
    });
  }, []);
  useEffect(() => {
    setRemoveLoading(false)

    setTime(Time.filter((Time) => Time.id !== resultDelete));  
    
    setRemoveLoading(true)
    // eslint-disable-next-line
  }, [resultDelete]);

  const clickLoading = ()=>{
    setRemoveLoading(false)
  }

  const deleteTime = (idTime) => {
    const alertConf = window.confirm("Quer deletar ?");
    if (alertConf) {
      setRemoveLoading(false)
      api
        .delete(`/time/delete/${idTime}`)
        .then((res) => {
          const result = res.data;
          if (result.err) {
            alert("Erro ao tentar apagar a noticia");
          } else {
              ///const result = Time.filter((Time) => Time.ID !== idTime);
              setResultDelete(idTime)
          }
        })
        .catch((err) => {
          alert("Erro, banco de dados");
          setRemoveLoading(true)

        });
    }
  };


  return (
    <>
     {!removeLoading && <Loading/> }
    <div className="container list-ste">
      <div className="Title-list-news-admin">
        <h3>Horários</h3>
      </div>
     
    <div className="btn-list-add">
    <Button
        className="btn-success"
        variant="primary"
        href={"/admin/time/new"}
        onClick={() => clickLoading()}

      >
        Novo
      </Button>
    </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Turno</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Visibilidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Time != undefined ? (<>
          {Time.map((Time, index) => (
            <tr key={index}>
              <td title={Time.name}
              className="title-td">{Time.name.substr(0, 30)}{Time.name.substr(30).length !== 0 && "..."}</td>

              <td className="views-t">{Time.turno}</td>
              <td className="views-t">{Time.horario_inicial}</td>
              <td className="views-t">{Time.horario_final}</td>
              <td className="views-t">{Time.visibilidade ===1 ? "Disponível" : "Indisponível"}</td>
              <td>
                <Button
                  className="btn-Danger"
                  variant="warning"
                  href={"/admin/time/edit/" + Time.id}
                  onClick={() => clickLoading()}
                >
                  Editar
                </Button>
                <Button
                  className="btn-Danger"
                  variant="danger"
                  onClick={() => deleteTime(Time.id)}
                >
                  Apagar
                </Button>
              </td>
            </tr>
          ))}</>) : <></>}
        </tbody>
      </Table>
      {Time != undefined ? (<>
        {(Time.length === 0) && 
        <p className="resultTxt">Nenhum resultado</p>}</>):
         (<><p className="resultTxt">Nenhum resultado</p></>)}
    </div>
      </>
  );
}

