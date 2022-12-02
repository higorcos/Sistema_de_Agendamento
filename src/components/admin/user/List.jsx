import { Button, Table, Form } from "react-bootstrap";
import "../../../styles/lists.css";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import Loading from "../../public/others/LoadingFull";

 
export default function List() {
  const [users, setUsers] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false) //loading

  const [switchStatus, setSwitchStatus] = useState(false)


  useEffect(() => {
    api.get("/user/list").then((res) => {
      setUsers(res.data.dados);
      setRemoveLoading(true)
      
    });
  }, []);

  useEffect(() => {
    console.log('mudou')
    // api.get("/user/list").then((res) => {
    //   setRemoveLoading(true)
    // });
  }, [switchStatus]);
  const clickLoading = ()=>{
    setRemoveLoading(false)
  }

  


  
  return (
    <>
     {!removeLoading && <Loading/> }
    <div className="container list-ste">
      <div className="Title-list-news-admin">
        <h3>Usuários</h3>
      </div>
      <h5>Selecione uma visualização</h5>
      
      <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label={!switchStatus ? 'Pedidos de acesso':"Usuários autorizados"}
        // onChange={(e) =>  setSwitch(e.target.value)}
        onChange ={(e) => setSwitchStatus(!switchStatus)}
      />
      </Form>
    <div className="btn-list-add">
    </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td className="title-td">{users.name}</td>

              <td>{users.email}</td>
              <td>
                <Button
                  className="btn-Danger"
                  variant="primary"
                  href={"/user/authorize/monitor/" + users.matricula}
                  onClick={() => clickLoading()}
                >
                  Ver
                </Button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {users.length === 0 && <p className="resultTxt">Nenhum resultado</p>}
    </div>
      </>
  );
}


