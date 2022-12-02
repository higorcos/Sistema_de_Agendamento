const idPortalApi = '1fea43fec0ccd7f2b0cbf55804aca8182177ab79'

module.exports = {
    idPortalApi: `${idPortalApi}`,
//Produção
  //urlApi: `https://api-portais.com.br/${idPortalApi}`,
//teste
//teste nova
   // urlApi: `http://ec2-54-232-59-57.sa-east-1.compute.amazonaws.com:8004/${idPortalApi}`,
//teste antiga
   //urlApi: `http://ec2-54-207-215-247.sa-east-1.compute.amazonaws.com:8004/${idPortalApi}`,
//Local
   urlApi: `http://localhost:3006`,
 
    //config botões e imagens

    dnsPortal: "raposa.ma.gov.br",
    NomePortal: "Raposa", 
    ufPortal:"MA",
    NomeTipoPortal: "Prefeitura Municipal", //Prefeitura ou Câmara
    TipoPortal: 3, //3 = Prefeitura 4=Câmara

    link: "http://www.transparenciadministrativa.com.br", //Onde o token abaixo ser[a utilizado]
    tokenLink: `${idPortalApi}`, //Token para acessar o WWW.transparência
    urlEmDeploy: 'https://www.raposa.ma.gov.br', //usada para link de compartilhamento

    //imagemURL: 'https://api-s3-tss.s3.amazonaws.com/', //link para a imagem 
    imagemURL: 'https://arquivos-api-portais.s3.sa-east-1.amazonaws.com/', //link para a imagem 
    //imagemURL: 'http://localhost:8004/uploads/', //link para a imagem 
} 
 