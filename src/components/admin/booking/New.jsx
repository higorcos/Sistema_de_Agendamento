import "../../../styles/admin/news.css";
import Loading from "../../public/others/LoadingFull";
import { Form } from "react-bootstrap";


import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function AdminTime() {
  
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [turno, setTurno] = useState("");
  const [horario_inicial, set_horario_inicial] = useState("");
  const [horario_final, set_horario_final] = useState("");
  const [visibilidade, setVisibilidade] = useState(1);
  const [switchStatus,setSwitchStatus] = useState(true);
 

  
  const [removeLoading, setRemoveLoading] = useState(true); //loading
  useEffect(() => {
    
    
    if(switchStatus){
      setVisibilidade(1)
    }else{
      setVisibilidade(0)
    }
    console.log(visibilidade,switchStatus)
    
  }, [switchStatus]);

  //submit formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRemoveLoading(false);

    await api
      .post("/time/new",{
        name, 
        turno, 
        horario_inicial, 
        horario_final,
        visibilidade,
        })
      .then((res) => {
        if (res.data.err) {
          alert("Ocorreu um erro, tente novamente!!!");
          setRemoveLoading(true);
        } else {
          //alert("");
          setRemoveLoading(true);
          navigate("/admin/time/painel");
        }
      })
      .catch((err) => {
        setRemoveLoading(true);
        alert("Ocorreu um erro, tente novamente!!!");
      });
  };

  return (
    <>
      {!removeLoading && <Loading />}

      <div className="content-admin-news">
        <form onSubmit={handleSubmit} className="form-admin-news">
          <h3>Criar Horário</h3>

          <div className="img-icones-form">
          <img src="/icons/clock.svg" alt="" srcSet=""  />
          </div>
          <div className="box-input">

          <label className="form-news">
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={name}
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="form-news">
            
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={turno}
              placeholder={'Turno'}
              onChange={(e) => setTurno(e.target.value)}
            />
          </label>

          <div className="input-horario">
          <label className="form-news">
            Início
            <input
              type="time"
              name="horario_inicial"
              className="form-input-news"
              value={horario_inicial}
              placeholder={'Horário de início'}
              onChange={(e) => set_horario_inicial(e.target.value)}
            />
          </label>

          <label className="form-news">
          Término
            <input
              type="time"
              name="horario_final"
              className="form-input-news"
              value={horario_final}
              placeholder={'Horário de término'}
              onChange={(e) => set_horario_final(e.target.value)}
            />
          </label>

         
          <label className="form-news">
         
            Disponibilidade
      <Form.Check 
        type="switch"
        id="id-switch-visibilidade-time"
        className="switch-visibilidade-time"
        // label={!switchStatus ? 'Pedidos de acesso':"Usuários autorizados"}
        value={true}
        onChange ={(e) => console.log(e.target.checked)}
      />
          </label>
      
        </div>

         
          <br/>
          <input type="submit" value="Criar" className="button-submit" />
          </div>
        </form>
      </div>
    </>
  );
}
