import "../../../styles/teste.css";
import "../../../styles/navbar.css";

import jsonMenu from "../../jsons/jsonNavbar";
 
  
export default function Map() {

 

  const arrayMap = jsonMenu.map((itens,indexArrayMap//vai percorrer o array e vai retornar os elementos da lista
    ) => sumList(itens, indexArrayMap)
  );
  function sumList(array, index) {
    //vai aplicar o jsx

    if (array.sub_link !== undefined) {
      /*vai verificar se existe uma lista dentro de outra lista
    <ul>
    <li></li>
    <li></li>
    <li><ul></ul></li>
    </ul>
      */

      return (
        <>
          <li className={"itens-navar iten"} key={index}>
            {checkLink(array)}
            <ul className="list-navbr lista-secundaria-navba">
              {array.sub_link.map((itens, index) => sumList(itens, index))}
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="itens-navbar iten" key={array.name}>
            <a href={array.link} className="drop-navba">
              {array.name}
            </a>
          </li>
        </>
      );
    }
  }
  //vai verificar se existe um link (o elemento pai de uma lista oculta não deve possuir link)
  function checkLink(array) {
    if (array.link !== undefined) {
      return (
        <a href={array.link} className="drop-navba" key={array.name}>
          <p>{array.name}</p>
        </a>
      );
    } else {
      return <p className="icon-drop drop-navba">{array.name}</p>;
    }
  }

  
  const list_sub_link = (array) => {
    return (
      <div className="sub-div-sidebar-ne">
        {array.map((b, index) => (
          <li key={index} className="des">
            {b.link !== undefined ? (
              <a href={b.link} className="desq link-sideba">
                {b.name}
              </a>
            ) : (
              <h6 className="des">{b.name}</h6>
            )}
            <ul>{b.sub_link !== undefined ? list_sub_link(b.sub_link) : ""}</ul>
          </li>
        ))}
      </div>
    );
  };
 

  


  return (
    <>
      <section className="map-site">
      <div className="section-title rotes_pages">
       <h6> Início / Mapa Do Site</h6>
      </div>
      <div className="section-title">
          <h5>
            <img
              className="icon-title"
              alt="notícias"
              src="/icons/seta-direita.svg"
            />
           Mapa do Site
          </h5>
          <div className="border"></div>
          <ul className="map-site">{arrayMap}
          </ul>
        </div>
      </section>


    </>
  );
}
