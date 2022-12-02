import {link, tokenLink, dnsPortal} from '../../services/variables'



//alguns link possuem token diferente do padrão 
const linksNavbar =
  [
    {
      name:`Município`,
      top_list: true,
      img: 'Municipio',
      sub_link: [ 
        {
          name:`A Cidade`,
          link:`/municipio/cidade`
        },
        {
          name:`Distâncias`,
          link:`/municipio/distancias`
        },
        {
          name:`História`,
          link:`/municipio/historia`
        },
        {
          name:`População`,
          link:`/municipio/numeros`
        },
        {
          name:`Mapa`,
          link:`/municipio/mapa`
        },
        // {
        //   name:`Símbolos`,
        //   link:`/municipio/simbolos`
        // },
        {
          name:`Endereços Úteis`,
          link:`/municipio/endereços-uteis`
        },
        // {
        //   name:`Distritos`,
        //   link:`/municipio/distritos`
        // },
        // {
        //   name:`Eventos`,
        //   link:`/municipio/eventos`
        // },
        {
          name:`Obras`,
          link:`${link}/portaltm/licitacao/obrapublica.xhtml?token=${tokenLink}`
        },
        // {
        //   name:`Veículos`,
        //   link:`/municipio/veiculos`
        // },
      ]
    },
    {
      name:`Informações Institucionais`,
      top_list: true,
      img: 'Institucional',
      sub_link: [
        {
          name:`Registro das Competências`,
          link: `/informacoes-institucionais/registro-das-competencias`,
        },
        {
          name:`Estrutura Organizacional`,
          link:`${link}/portal/organograma/organograma.xhtml?token=${tokenLink}`
        },
        {
          name:`Leis Municipais / Estaduais`,
          sub_link:[
            {
              name:`Lei Orgânica`,
              link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=Lei+Org%C3%A2nica`
            },
            {
              name:`Código Tributário`,
              link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=C%C3%B3digo+Tribut%C3%A1rio`
            },
            {
              name:`Leis Municipais`,
              link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=Lei`
            },
            {
              name:`Leis Estaduais`,
              link:`${link}/portal/transparencia/transparencia.xhtml?token=${tokenLink}`
            },
            {
              name:`Projeto de Leis`,
              link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=Projeto`
            },
            {
              name:`Decretos `,
              link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=Decreto`
            },
            {
              name:`Portarias`,
              sub_link:[
                {
                  name:`Nomeação`,
                  link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=Portaria+Exonera%C3%A7%C3%A3o+e+Nomea%C3%A7%C3%A3o`
                },
                {
                  name:`Exoneração`,
                  link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=Portaria+Exonera%C3%A7%C3%A3o`
                },
                {
                  name:`Outras`,
                  link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=Portaria`
                },
              ]
            },
            {
              name:`Outros Atos Administrativos `,
              link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Outros%20Atos%20Administrativos`
            },
          ]
        },
        {
          name:`Perguntas e Respostas`,
          link:`${link}/esic/perguntaresposta.xhtml?token=${tokenLink}&tipo=Perguntas%20e%20Respostas%20e-Sic`
        },
        {
          name:`Fale Conosco`,
          link:`informacoes-institucionais/contato-2`
        },
      ]
    },
    {
      name:`Diário Oficial`,
      top_list: true,
      img: 'Diario_OFI',
      sub_link:[
        {
          name:`Diário Oficial Eletrônico`,
          link:`${link}/diario/diariov2.xhtml?token=${tokenLink}`
          // link:`/diario-oficial/diario-oficial-eletronico`
        },
        {
          name:`Lei de criação do Diário`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Lei%20de%20Cria%C3%A7%C3%A3o%20do%20Di%C3%A1rio%20Oficial%20Elet%C3%B4nico%20do%20Municipio`
        },
        {
          name:`Ato de nomeação do responsável`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Ato%20de%20Nomea%C3%A7%C3%A3o%20de%20Pessoa%20Respons%C3%A1vel%20pelas%20Publica%C3%A7%C3%B5es%20do%20Di%C3%A1rio%20Oficial%20do%20Mun%C3%ADcipio`
        },
      ]
    },
    {
      name:`Pessoal`,
      top_list: true,
      img: 'Pessoal',
      sub_link:[
        {
          name:`Contracheque`,
          link:`http://contracheque.maclocacao.com:9906/sipweb/trabalhador/login/login.xhtml`
        },
        {
          name:`Estatuto do Servidor`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Estatuto%20dos%20Servidores`
        },
        {
          name:`Folha de pagamento`,
          sub_link:[
            {
              name:`Gestão Atual`,
              link:`http://www.inforfolha.com.br/inforfolha/contracheque/remuneracao.xhtml?token=6b475e3c-c541-4473-8c5f-081e0a49be2c` //link diferente 
            },
            {
              name:`Gestão Anterior`,
              link:`${link}/portaltm/contracheque/remuneracao.xhtml?token=${tokenLink}`
            },
          ]
        },
        {
          name:`Servidores inativos`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Rela%C3%A7%C3%A3o%20de%20servidores%20inativos`
        },
        {
          name:`Servidores ocupante de cargo em comissão`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Rela%C3%A7%C3%A3o%20de%20servidores%20ocupantes%20de%20cargo%20em%20comiss%C3%A3o`
        },
        {
          name:`Servidores cedidos para outros Órgãos Públicos`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Rela%C3%A7%C3%A3o%20de%20servidores%20cedidos%20para%20outros%20%C3%93rg%C3%A3os%20P%C3%BAblicos`
        },
        {
          name:`Relação nominal dos estagiários`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Rela%C3%A7%C3%A3o%20nominal%20dos%20estagi%C3%A1rios`
        },
        {
          name:`Relação de contratados temporariamente e contratos de terceirização`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Rela%C3%A7%C3%A3o%20nominal%20dos%20agentes%20p%C3%BAblicos%20contratados%20temporariamente%20e%20contratados%20de%20terceiriza%C3%A7%C3%A3o`
        },
        {
          name:`Tabela com o padrão remuneratório dos cargos e função`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Tabela%20remunerat%C3%B3ria%20dos%20cargos%20e%20fun%C3%A7%C3%B5es`
        },

      ]
    },
    {
      name:`Diárias`,
      top_list: true,
      img: 'Diárias',
      sub_link:[
        {
          name:`Tabela de valores das diárias `,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Rela%C3%A7%C3%A3o%20das%20di%C3%A1rias,%20dentro%20e%20fora%20Estado,%20e%20fora%20do%20Pa%C3%ADs`
        },
        {
          name:`Diárias e Passagens`,
          link:`http://portalcontreina.dcfiorilli.com.br:8022/link/Default.aspx?AcessoIndividual=lnkDiarias`
        },
        {
          name:`Legislação`,
          link:`${link}/portal/atosadministrativo/ultimasPublicacoes.xhtml?token=${tokenLink}&tipo=Di%C3%A1rias+e+Legisla%C3%A7%C3%A3o`
        },
      ]
    },
    {
      name:`Transparência`,
      link:`/transparencia`,
      top_list: true,
      img: 'Transparência',

    },
    {
      name:`Licitações e Contratos`,
      top_list: true,
      img: 'licitaçoes',
      sub_link:[
        {
          name:`Indicação do Fiscal de Contrato`,
          link:`${link}/portaltm/atosadministrativos/index.xhtml?token=${tokenLink}&tipo=Indica%C3%A7%C3%A3o%20do%20Fiscal%20do%20Contrado`
        },
        {
          name:`Avisos`,
          link:`${link}/portaltm/licitacao/aviso.xhtml?token=${tokenLink}`
        },
        {
          name:`Edital`,
          link:`${link}/portaltm/licitacao/licitacao.xhtml?token=${tokenLink}`
        },
        {
          name:`Dispensas`,
          link:`${link}/portaltm/licitacao/dispensa.xhtml?token=${tokenLink}`
        },
        {
          name:`Inexigibilidade`,
          link:`${link}/portaltm/licitacao/inexigibilidade.xhtml?token=${tokenLink}`
        },
        {
          name:`Pregão Eletrônico`,
          link:`${link}/portaltm/licitacao/pregaoeletronico.xhtml?token=${tokenLink}`
        },
        {
          name:`Ata de Adesão - SRP `,
          link:`${link}/portaltm/licitacao/registropreco.xhtml?token=${tokenLink}`
        },
        {
          name:`Resultados do Certame`,
          link:`${link}/portaltm/licitacao/resultadocertame.xhtml?token=${tokenLink}`
        },
        {
          name:`Termo de Aditivo`,
          link:`${link}/portaltm/licitacao/aditivo.xhtml?token=${tokenLink}`
        },
        {
          name:`Convênio`,
          link:`${link}/portaltm/licitacao/convenio.xhtml?token=${tokenLink}`
        },
        {
          name:`Contratos `,
          link:`${link}/portaltm/contrato/contrato.xhtml?token=${tokenLink}`
        },
      ]
    },
    {
      name:`Cidadão | e-SIC `,
      top_list: true,
      img: 'Ouvidoria',
      sub_link:[
        {
          name:`e-SIC - Regulamentação`,
          link:`${link}/portal/sic/sic.xhtml?token=${tokenLink}`
        },
        {
          name:`e-SIC - Perguntas e Respostas`,
          link:`${link}/esic/perguntaresposta.xhtml?token=${tokenLink}&tipo=Perguntas%20e%20Respostas%20e-Sic`
        },
        {
          name:`e-SIC`,
          link:`${link}/esic/index.xhtml?token=${tokenLink}`
        },
        {
          name:`Instrumento normativo local que regulamente a LAI`,
          link:`${link}/portal/transparencia/transparencia.xhtml?token=${tokenLink}`
        },
        {
          name:`e-SIC - Rol de Informações (12 meses)`,
          link:`${link}/portaltm/atosadministrativotipo/index.xhtml?token=${tokenLink}&tipo=Rol%20das%20informa%C3%A7%C3%B5es%20que%20tenham%20sido%20desclassificadas%20nos%20%C3%BAltimos%2012%20(doze)%20meses`
        },
        {
          name:`e-SIC - Rol de documentos (Grau Sigilo)`,
          link:`${link}/portaltm/atosadministrativotipo/index.xhtml?token=${tokenLink}&tipo=Rol%20de%20documentos%20classificados%20em%20cada%20grau%20de%20sigilo,%20com%20identifica%C3%A7%C3%A3o%20para%20refer%C3%AAncia%20futura`
        },
        
      ]
    },
    {
      name:`Tributos`,
      top_list: true,
      img: 'Contribuinte',
      sub_link:[
        {
          name:`Nota Fiscal Eletrônica`,
          link:`http://tributario.aspec.com.br/portal.ma.raposa/login.xhtml`
        },
        {
          name:`2ª via do IPTU`,
          link:`http://tributario.aspec.com.br/portal.ma.raposa/UC0085IPTU/T0085L-display-iptu.xhtml`
        },
        {
          name:`Certidões`,
          link:`http://tributario.aspec.com.br/portal.ma.raposa/UC0084EmitirCertidao/T0084L-emitir-certidao.xhtml`
        },
      ]
    },
    {
      name:`Usuário`,
      top_list: true,
      img: 'admin-navbar',
      sub_link:[
        {
          name:`Login - Portal`,
          link:`/admin/login`
        },
        {
          name:`Login - Diário`,
          link:`${link}/diario/login.xhtml`
        },
        {
          name:`Login - Licitação`,
          link:`${link}/licitacaotm/login.xhtml`
        },
        {
          name:`Login - e-SIC`,
          link:`${link}/esic/adm/login.xhtml?token=${tokenLink}`
        },
        {
          name:`WebMail`,
          link:`https://webmail-seguro.com.br/${dnsPortal}/`
        },
      ]
    }
  ]
  export default linksNavbar