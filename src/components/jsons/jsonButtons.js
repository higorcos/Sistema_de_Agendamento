import {link, tokenLink} from '../../services/variables'

const jsonButtons = [
 
 {name: `Inicio`, link: `/`, img: `Inicio`}
,{name: `Coronavírus (Covid-19)`, link: `${link}/portaltm/covid19/index.xhtml?token=${tokenLink}`, img: `Coronavírus (Covid-19)`}
,{name: `Notícias`, link: `/noticias`, img: `Notícias`}
,{name: `e-SIC`, link: `${link}/esic/index.xhtml?token=${tokenLink}`, img: `e-SIC`}
,{name: `Perguntas e Respostas`, link: `${link}/esic/perguntaresposta.xhtml?token=${tokenLink}&tipo=Perguntas%20e%20Respostas%20e-Sic`, img: `Perguntas_e_Respostas`}
] 

export default jsonButtons;

// (e-SIC) ,{name: `Certidões`, link: ``, img: `Certidões`}
// ,{name: `Diário Oficial`, link: `${link}/portal/diario/ultimasPublicacoes.xhtml?token=${tokenLink}`, img: `Diário Oficial`}