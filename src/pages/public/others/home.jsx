import { Button } from "react-bootstrap"


export default function Home() {
 
  return (
    <>

    <Button
        className="btn-success"
        variant="primary"
        href={"/admin/lab"}
      >
        Criar novo Lab
      </Button>
      
      <Button
        className="btn-success"
        variant="primary"
        href={"/admin/lab/painel"}
      >
        Painel de lab
      </Button>

      <Button
        className="btn-success"
        variant="primary"
        href={"/admin/login"}
      >
        Login
      </Button>

      <Button
        className="btn-success"
        variant="primary"
        href={"/admin/user/painel"}
      >
        gerenciar Usuarios
      </Button>
    </>
  )
}

