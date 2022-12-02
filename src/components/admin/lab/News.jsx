import "../../../styles/admin/news.css";
import Loading from "../../public/others/LoadingFull";

import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function AdminNews() {
  
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [predio, setPredio] = useState("");
  const [andar, setAndar] = useState("");
  const [sala, setSala] = useState("");
  const [capacidadeMax, setCapacidadeMax] = useState("");
  const [nReservas, setReservas] = useState("");

  
  const [removeLoading, setRemoveLoading] = useState(true); //loading


  //submit formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRemoveLoading(false);

    await api
      .post("/lab/new",{
        nome:name, 
        predio, 
        andar, 
        sala,
        capacidade: capacidadeMax,
        numero_reserva_por_horario:nReservas})
      .then((res) => {
        if (res.data.err) {
          alert("Ocorreu um erro, tente novamente!!!");
          setRemoveLoading(true);
        } else {
          //alert("");
          setRemoveLoading(true);
          navigate("/admin/lab/painel");
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
          <h3>Criar Laboratório</h3>

          <div className="img-icones-form">
          <img src="/imagens/Lab.svg" alt="" srcset=""  />
          </div>
          <div className="box-input">

          <label className="form-news">
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={name}
              placeholder="Nome para o laboratório"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="form-news">
            
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={predio}
              placeholder={'Predio'}
              onChange={(e) => setPredio(e.target.value)}
            />
          </label>

          <label className="form-news">
            
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={andar}
              placeholder={'Andar'}
              onChange={(e) => setAndar(e.target.value)}
            />
          </label>

          <label className="form-news">

            <input
              type="text"
              name="title"
              className="form-input-news"
              value={sala}
              placeholder={'Sala'}
              onChange={(e) => setSala(e.target.value)}
            />
          </label>

          <label className="form-news">
         
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={capacidadeMax}
              placeholder={'Capacidade Máxima'}
              onChange={(e) => setCapacidadeMax(e.target.value)}
            />
          </label>

          <label className="form-news">
           
            <input
              type="text"
              name="title"
              className="form-input-news"
              value={nReservas}
              placeholder={'Número de reservas por horario'}
              onChange={(e) => setReservas(e.target.value)}
            />
          </label>
          
          <input type="submit" value="Criar" className="button-submit" />
          </div>
        </form>
      </div>
    </>
  );
}
