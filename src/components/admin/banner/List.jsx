import { Button, Table } from "react-bootstrap";
import "../../../styles/lists.css";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import Loading from "../../public/others/LoadingFull";

 
export default function ListBanners() {
  const [Banner, setBanner] = useState([]);
  const [BannerOthers, setBannerOthers] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false) //loading
    const [resultDelete, setResultDelete] = useState([])

  useEffect(() => {
    setRemoveLoading(false)

    api.get("/banner/show/all").then((res) => {
      setBanner(res.data.res); // vai pegar apenas os banners desse portal 
      setBannerOthers(res.data.res)
      setRemoveLoading(true)
      
    });
  }, []);
  useEffect(() => {
    setRemoveLoading(false)

    setBanner(Banner.filter((Banner) => Banner.ID !== resultDelete));  
    setBannerOthers(BannerOthers.filter((Banner) => Banner.ID !== resultDelete));  
    setRemoveLoading(true)
    // eslint-disable-next-line
  }, [resultDelete]);

  const clickLoading = ()=>{
    setRemoveLoading(false)
  }

  const deleteBanner = (idBanner) => {
    const alertConf = window.confirm("Quer deletar ?");
    if (alertConf) {
      setRemoveLoading(false)
      api
        .delete(`/banner/delete/${idBanner}`)
        .then((res) => {
          const result = res.data;
          if (result.err) {
            alert("Erro ao tentar apagar a noticia");
          } else {
              ///const result = Banner.filter((Banner) => Banner.ID !== idBanner);
              setResultDelete(idBanner)
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
      <div className="Title-list-news-admin">
        <h3>Painel dos Banners</h3>
      </div>
     
    <div className="btn-list-add">
    <Button
        className="btn-success"
        variant="primary"
        href={"/admin/banner/new"}
        onClick={() => clickLoading()}

      >
        Adicionar Banner
      </Button>
    </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Link</th>
            <th>Visibilidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Banner != undefined ? (<>
          {Banner.map((Banner, index) => (
            <tr key={index}>
              <td title={Banner.LINK}
              className="title-td">{Banner.LINK.substr(0, 30)}{Banner.LINK.substr(30).length !== 0 && "..."}</td>

              <td className="views-t">{Banner.LINK.substr(0, 30)}{Banner.LINK.substr(30).length !== 0 && "..."}</td>
              <td className="views-t">{Banner.DISPONIVEL ===1 ? "Visível" : "Invisível"}</td>
              <td>
                <Button
                  className="btn-Danger"
                  variant="warning"
                  href={"/admin/banner/editar/" + Banner.ID}
                  onClick={() => clickLoading()}
                >
                  Editar
                </Button>
                <Button
                  className="btn-Danger"
                  variant="danger"
                  onClick={() => deleteBanner(Banner.ID)}
                >
                  Apagar
                </Button>
              </td>
            </tr>
          ))}</>) : <></>}
        </tbody>
      </Table>
      {Banner != undefined ? (<>
        {(Banner.length === 0 && BannerOthers.length ===0) && 
        <p className="resultTxt">Nenhum resultado</p>}</>):
         (<><p className="resultTxt">Nenhum resultado</p></>)}
    </div>
      </>
  );
}

