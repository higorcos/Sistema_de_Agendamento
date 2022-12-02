import { Button, Table, Form } from "react-bootstrap";
import "../../../styles/lists.css";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import Loading from "../../public/others/LoadingFull";

 
export default function List() {
  const [users, setUsers] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false) //loading

  useEffect(() => {
    api.get("/lab/list").then((res) => {
      setUsers(res.data.dados);
      setRemoveLoading(true)      
    });
  }, []);

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
          {users.map((users, index) => (
            <tr key={index}>
              <td className="title-td">{users.nome}</td>

              <td>{users.predio}</td>
              <td>
                <Button
                  className="btn-Danger"
                  variant="primary"
                  href={"/" + users.id}
                  onClick={() => clickLoading()}
                >
                  Ver
                </Button>
                <Button
                  className="btn-Danger"
                  variant="warning"
                  href={"/" + users.id}
                  onClick={() => clickLoading()}
                >
                  Editar
                </Button>
                <Button
                  className="btn-Danger"
                  variant="danger"
                  href={"/" + users.id}
                  onClick={() => clickLoading()}
                >
                  Apagar
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


