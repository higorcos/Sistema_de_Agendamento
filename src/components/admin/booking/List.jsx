import { Button, Table } from "react-bootstrap";
import "../../../styles/lists.css";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import Loading from "../../public/others/LoadingFull";

 
export default function ListBooking(props) {
  const idLab = props.id


  const [Booking, setBooking] = useState([]);

  const [removeLoading, setRemoveLoading] = useState(false) //loading
    const [resultDelete, setResultDelete] = useState([])

  useEffect(() => {
    setRemoveLoading(false)

    api.get(`/booking/list/${idLab}`).then((res) => {
      setBooking(res.data.dados);  
      
      setRemoveLoading(true)
      
    });
  }, []);
  useEffect(() => {
    setRemoveLoading(false)

    setBooking(Booking.filter((Booking) => Booking.id !== resultDelete));  
    
    setRemoveLoading(true)
    // eslint-disable-next-line
  }, [resultDelete]);

  const clickLoading = ()=>{
    setRemoveLoading(false)
  }

  const deleteBooking = (idBooking) => {
    const alertConf = window.confirm("Quer deletar ?");
    if (alertConf) {
      setRemoveLoading(false)
      api
        .delete(`/time/delete/${idBooking}`)
        .then((res) => {
          const result = res.data;
          if (result.err) {
            alert("Erro ao tentar apagar ");
          } else {
              ///const result = Booking.filter((Booking) => Booking.ID !== idBooking);
              setResultDelete(idBooking)
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
      <div className="Title-list-news-admin booking">
        <h3>Reservas</h3>


        {Booking != undefined ? (<>
          <p>{Booking[0].laboratório.nome}</p></>):<></>} 

      </div>
     

      <Table responsive>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Nome Lab</th>
            <th>Status</th>
            <th>Ações</th>
            
          </tr>
        </thead>
        <tbody>
          {Booking != undefined ? (<>
          {Booking.map((Booking, index) => (
            <tr key={index}>
              <td className="title-td">{Booking.dia}</td>
              <td className="title-td">{Booking.laboratório.nome}</td>
              <td className="title-td">{Booking.status_pedido}</td>

    
              <td>
                <Button
                  className="btn-Danger"
                  variant="warning"
                  href={"/admin/time/edit/" + Booking.id}
                  onClick={() => clickLoading()}
                >
                  Editar
                </Button>
                <Button
                  className="btn-Danger"
                  variant="danger"
                  onClick={() => deleteBooking(Booking.id)}
                >
                  Apagar
                </Button>
              </td>
            </tr>
          ))}</>) : <></>}
        </tbody>
      </Table>
      {Booking != undefined ? (<>
        {(Booking.length === 0) && 
        <p className="resultTxt">Nenhum resultado</p>}</>):
         (<><p className="resultTxt">Nenhum resultado</p></>)}
    </div>
      </>
  );
}

