import "../../../styles/admin/news.css";
import Loading from "../../public/others/LoadingFull";

import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth";
import { useContext } from "react";

export default function AdminNews() {
  
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
 

  
  const [removeLoading, setRemoveLoading] = useState(true); //loading


  //submit formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRemoveLoading(false);
    login(email,matricula)
    

         
  };

  return (
    <>
      {!removeLoading && <Loading />}

      <div className="content-admin-news">
        <form onSubmit={handleSubmit} className="form-admin-news">
          
        <h3 className='title-login'>Faça seu login</h3>

          <div className="img-icones-form">
          <img src="/imagens/user.svg" alt="" srcset=""  />
          </div>
          <div className="box-input">

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

       
          
          <input type="submit" value="Entrar" className="button-submit" />
          <div className="link-form-log">
          <a href='/admin/login/created' className='link-user-login'>Ainda não tenho uma conta</a>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}
