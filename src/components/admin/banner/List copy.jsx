import { Button, Table } from "react-bootstrap";
import "../../../styles/lists.css";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import Loading from "../../public/others/LoadingFull";

 
function List() {
  const [Banner, setBanner] = useState([]);
  const [BannerOthers, setBannerOthers] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false) //loading
    const [resultDelete, setResultDelete] = useState([])

  useEffect(() => {
    api.get("/banner/show").then((res) => {
      setBanner(res.data.Gabinete);
      setBannerOthers(res.data.Outros)
      setRemoveLoading(true)
      
    });
  }, []);
  useEffect(() => {
    setBanner(Banner.filter((Banner) => Banner.ID !== resultDelete));  
    setBannerOthers(BannerOthers.filter((Banner) => Banner.ID !== resultDelete));  
    setRemoveLoading(true)
    // eslint-disable-next-line
  }, [resultDelete]);

  const clickLoading = ()=>{
    setRemoveLoading(false)
  }

  const deleteBanner = (idBanner,nameImg) => {
    const alertConf = window.confirm("Quer deletar ?");
    if (alertConf) {
      setRemoveLoading(false)
      api
        .delete(`/banner/delete/${idBanner}`)//${nameImg}
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
        <h3>Painel das Banners</h3>
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
            <th>Cargo</th>
            <th>Area</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Banner.map((Banner, index) => (
            <tr key={index}>
              <td className="title-t">{Banner.NOME}</td>

              <td className="views-t">{Banner.CATEGORIA}</td>
              <td className="views-t">{Banner.TIPOAREA}</td>
              <td>
                {/* <Button
                  className="btn-Danger"
                  variant="warning"
                  href={"/admin/competencias/editar/" + Banner.ID}
                  onClick={() => clickLoading()}

                >
                  Editar
                </Button> */}
                <Button
                  className="btn-Danger"
                  variant="danger"
                  onClick={() => deleteBanner(Banner.ID,Banner.IMG)}
                >
                  Apagar
                </Button>
              </td>
            </tr>
          ))}
           {BannerOthers.map((Banner, index) => (
            <tr key={index}>
              <td className="title-t">{Banner.NOME}</td>

              <td className="views-t">{Banner.CATEGORIA}</td>
              <td className="views-t">{Banner.TIPOAREA}</td>
              <td>
                {/* <Button
                  className="btn-Danger"
                  variant="warning"
                  href={"/admin/competencias/editar/" + Banner.ID}
                  onClick={() => clickLoading()}

                >
                  Editar
                </Button> */}
                <Button
                  className="btn-Danger"
                  variant="danger"
                  onClick={() => deleteBanner(Banner.ID,Banner.IMG)}
                >
                  Apagar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {(Banner.length === 0 && BannerOthers.length ===0) && <p className="resultTxt">Nenhum resultado</p>}
    </div>
      </>
  );
}

export default List;
