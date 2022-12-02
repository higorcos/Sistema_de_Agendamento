import "../../../styles/admin/login.css";
import Loading from "../../public/others/LoadingFull";

import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function AdminNews() {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [name, setNome] = useState("");
  const [data_de_nascimento, setDataNas] = useState("");
  const [curso, setCurso] = useState("");
 

  
  const [removeLoading, setRemoveLoading] = useState(true); //loading


  //submit formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRemoveLoading(false);

    await api
      .post("/user/new",{
        matricula,
        name,
        email,
        curso,
        data_de_nascimento, 
        })
      .then((res) => {
        if (res.data.err) {
          alert("Ocorreu um erro, tente novamente!!!");
          setRemoveLoading(true);
        } else {
          //alert("");
          setRemoveLoading(true);
          navigate("/");
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
          
        <h3 className='title-login'>Crie uma conta</h3>

          <div className="img-icones-form">
          <img src="/imagens/user.svg" alt="" srcset=""  />
          </div>
          <div className="box-input">

          <label className="form-news">
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={name}
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>

         

          <label className="form-news">
            
            <input
              type="date"
              name="title"
              className="form-input-news"
              value={data_de_nascimento}
              placeholder={'Data de Nascimento'}
              onChange={(e) => setDataNas(e.target.value)}
            />
          </label>

          <label className="form-news">
            
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={matricula}
              placeholder={'Matrícula'}
              onChange={(e) => setMatricula(e.target.value)}
            />
          </label>

          <label className="form-news">
            
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={curso}
              placeholder={'Curso'}
              onChange={(e) => setCurso(e.target.value)}
            />
          </label>

         

          <label className="form-news">
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

       
          
          <input type="submit" value="Criar" className="button-submit" />
          <div className="link-form-log">
          <a href='/admin/login' className='link-user-login'>Fazer login</a>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}
