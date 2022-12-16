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
    setRemoveLoading(false)

    api.get("/user/list").then((res) => {
      setUsers(res.data.dados);
      setRemoveLoading(true)
    });
  }, []);

  useEffect(() => {
    setRemoveLoading(false)

    if(switchStatus){
      api.get("/user/list/ADMIN").then((res) => {
        setUsers(res.data.dados);    
        setRemoveLoading(true)
      });
    }else{
      api.get("/user/list/NORMAL").then((res) => {
        setUsers(res.data.dados);   
        setRemoveLoading(true)
      });
    }
  }, [switchStatus]);
  
  const authorize = (matricula)=>{

    setRemoveLoading(false)
    if(switchStatus){
    api.put("/user/disallow/monitor",{matricula}).then((res) => {
      setUsers(users.filter((user) => user.matricula !== matricula)); 
      console.log('disa')
      setRemoveLoading(true)
    });
  }else{
    api.put("/user/authorize/monitor",{matricula}).then((res) => {
      setUsers(users.filter((user) => user.matricula !== matricula)); 
      console.log('auth')
      setRemoveLoading(true)
    });
  }

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
        label={!switchStatus ? "Usuários comuns":"Usuários autorizados"}
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
                  //href={`/user/${switchStatus ? "authorize" : "disallow"}`}
                  
                  onClick={() =>  authorize(users.matricula)}
                >
                  {switchStatus ? "Revocar admin":'Tornar admin'}
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


