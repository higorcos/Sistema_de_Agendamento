//import "./.css";
import Loading from "../../public/others/LoadingFull";
import {imagemURL} from "../../../services/variables"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function EditBanner(props) {
  const idBanner = props.id

  const navigate = useNavigate();  
  const [img, setImg] = useState("");
  const [imgDB, setImgDB] = useState("");
  const [link, setLink] = useState("");
  const [visible, setVisible] = useState(true);
  const [removeLoading, setRemoveLoading] = useState(true); //loading

  const [existImg, setExistImg] = useState(true)
  const [changeImg, setChanceImg] = useState(false)


  useEffect(() => {
    setRemoveLoading(false)

    api.get(`/banner/show/edit/${idBanner}`).then((response)=>{
      const result = response.data
      if(result.err){
      }else{
      // setImg()
      // console.log(idBanner)
      console.log(result.res[0].LINK)
      setImgDB(result.res[0].IMG)
      setChanceImg(imgDB)
      setLink(result.res[0].LINK)
      setVisible(result.res[0].DISPONIVEL)
      setRemoveLoading(true)
      setExistImg(true)
      }
      }).catch((err)=>{console.log(err)})
   }, [idBanner]);

  useEffect(() => {
   // console.log(img);

    const img2 = img || " "; // se imag for undefined, a img2 será uma string vazia

    if (img2 !== " ") {
      const resultType = img2.type.split("/");
      if (resultType[0] === "image") {
        //aceita apenas no formato de imagem
        //se for imagem tá tudo ok
     
        // How to use in an async function
        
        let imgRender = new Image()
        
        imgRender.src = window.URL.createObjectURL(img);
        imgRender.onload = () => {
            const width = imgRender.width
            const height = imgRender.height
            if(width<1400 && height< 400){
                alert('A imagem selecionada não é tem o tamanho ideal');
                setImg("");
            }else{
              
              setChanceImg(true)
            }
        }


      } else {
        alert("Selecione uma imagem");
        setImg("");
      }
    } else if (img2 !== undefined) {
      //setImg({'name': 'LOGO.png', 'lastModified': 1652564602649, 'lastModifiedDate': 'Sat May 14 2022 18:43:22 GMT-0300 (Horário Padrão de Brasília)','webkitRelativePath': '', 'size': 47355,})
    }
  }, [img]);

  const removeImgMain = () =>{
    setRemoveLoading(false)
     setExistImg(false)
      if(imgDB === 'logo.jpg'){
        console.log("logo")
      }else{
        // updateImgMain(imgDB)
        }
        setRemoveLoading(true)
  }
 

  const handleOnChange = () => {
    setVisible(!visible);
  }
  //submit formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
  
   setRemoveLoading(false);

     const dataJson = new FormData();
     
    if(changeImg){ //vai enviar apenas se a imagem for trocada
      dataJson.append("oldImgBanner", imgDB);
      dataJson.append("newImgBanner", img);
    }
    
     if(visible === true){
      dataJson.append("available", 1);

    }else{
      dataJson.append("available", 0);
    }
    dataJson.append("link", link);

     const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      }, 
    }; 
 
     await api
      .post(`/banner/update/${idBanner}`, dataJson, headers)
      .then((res) => {
        if (res.data.err) {
          alert("Ocorreu um erro, tente novamente!!!");
          setRemoveLoading(true);
        } else {
          alert("Atualizado com Sucesso");
          setRemoveLoading(true);
          navigate("/admin/banner/painel");
        }
      })
      .catch((err) => {
        setRemoveLoading(true);
        setRemoveLoading(true);
        alert("Ocorreu um erro, tente novamente!!!");
      });
  };

  return (
    <>
      {!removeLoading && <Loading />}

      <div className="content-admin-news">
        <form onSubmit={handleSubmit} className="form-admin-news">
          <h3>Editar Banner</h3>

          
         
                {!existImg ?(
                  <label className="form-news form-file">
            Imagem do Banner: <br/> (O banner deve possuir comprimento maior que 1400px e altura maior que 400px) 
            <input
              type="file"
              name="imgTop"
              accept="image/*"
              className="form-input-news"
              onChange={(e) => setImg(e.target.files[0])}
            />
            <div className="form-file-new-box">
              <p>
                {img !== "" && img !== undefined ? (
                  <>
                    <a
                      href={URL.createObjectURL(img) }
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visualizar imagem"
                    >
                      <img
                        src={URL.createObjectURL(img) }
                        alt="imagem selecionada"
                        className="img-show-select select-top"
                      />
                      Visualizar Imagem
                    </a>
                  </>
                ) : (
                  "Selecionar imagem"
                )}
              </p>
              <p>Buscar</p>
            </div>
          </label>
        ) : (
           <label 
           className="form-news form-file"> 
          Imagem: 
           {imgDB == null ? '': (<>
            <div className="card-img-viwies-multiple">
           <a target="_blank" 
           rel="noopener noreferrer" 
           className="link-img-show-select link-select-multiple"
           href={imgDB === 'logo.jpg' ? '/imagens/logo.jpg' : imagemURL+imgDB }>  
           <img
           src={imgDB === 'logo.jpg' ? '/imagens/logo.jpg' : imagemURL+imgDB }
           alt="imagem selecionada"
           className="img-show-select select-multiple"
         /></a>
          <div onClick={()=> removeImgMain() } className="icon-close-img-news">
                <img src='/icons/closeB.svg' alt="icone remover" title="Remover" className='icon-close-svg'/>
                </div>
           </div>   
         </>)}
        </label >
       )}
             

          <label className="form-news">
            Link do banner
            <input
              type="text"
              name="link-botão"
              className="form-input-news"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <label className="form-news">Selecione a visibilidade do Banner:</label>
          <label className="form-ews" htmlFor="html">
          
          <div className="checked-form-button">

          <input type="checkbox" id="html" name="select-visible"
          value="Paneer"
          checked={visible}
          onChange={handleOnChange}/>
          {visible ? 'Banner estará visível': "Banner não estará visível"}
          </div>
          </label><br/>
        
          <input type="submit" value="Enviar" className="button-submit" />
        </form>
      </div>
    </>
  );
}
