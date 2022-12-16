import { Button, Table } from "react-bootstrap";
import "../../../styles/lists.css";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import Loading from "../../public/others/LoadingFull";

 
export default function List() {
  const [labs, setLabs] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false) //loading
  const [boxShowEdit, setBoxShowEdit]= useState(false)

  useEffect(() => {
    api.get("/lab/list").then((res) => {
      setLabs(res.data.dados);
      setRemoveLoading(true)      
    });
  }, []);

  const clickLoading = ()=>{
    setRemoveLoading(false)
  }
  const deleteLab = (id)=>{
    //setRemoveLoading(false)
    api.delete(`/lab/delete/${id}`).then((res) => {
    setLabs(labs.filter((lab) => lab.id !== id)); 
    setRemoveLoading(true)      
    });

  }
 
  return (
    <>
     {!removeLoading && <Loading/> }
    <div className="container list-ste">
      <div className="Title-list-news-admin">
        <h3>Laboratório</h3>
      </div>
      <Button
        className="btn-success"
        variant="primary"
        href={"/admin/lab"}
      >
        Criar novo Lab
      </Button>
    <div className="btn-list-add">
    </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Prédio</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {labs.map((labs, index) => (
            <tr key={index}>
              <td className="title-td">{labs.nome}</td>

              <td>{labs.predio}</td>
              <td>
                <Button
                  className="btn-Danger"
                  variant="primary"
                  href={"/admin/lab/booking/list/" + labs.id}
                  onClick={() => clickLoading()}
                >
                  Gerenciar
                </Button>
                <Button
                  className="btn-Danger"
                  variant="warning"
                  href={"/admin/lab/edit/" + labs.id}
                  onClick={() => clickLoading()}
                >
                  Editar
                </Button>
                <Button
                  className="btn-Danger"
                  variant="danger"
                  
                  onClick={() => deleteLab(labs.id)}
                >
                  Apagar
                </Button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {labs.length === 0 && <p className="resultTxt">Nenhum resultado</p>}
    </div>


    {boxShowEdit && (
      <div></div>
    )}
      </>
  );
}


