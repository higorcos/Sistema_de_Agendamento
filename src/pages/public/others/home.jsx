import { Button } from "react-bootstrap"
import Navbar from '../../../components/public/Navbar'
import CardInfor from '../../../components/public/others/CardInfor'
import ButtonAcess from '../../../components/public/others/ButtonsAcess'
export default function Home() {

  const buttons = [
    {
      name:'Laboratórios',
      link:'/admin/lab/painel',
    },
    {
      name:'Usuários',
      link:'/admin/user/painel',
    },
    {
      name:'Horários',
      link:'/admin/time/painel',
    }
  ] 
 
  return (
    <>
    <Navbar/>
    <CardInfor title={'Olá, bem vindo !'} txt={'Gerencie o seu laboratório'}/>
    <ButtonAcess buttons={buttons} painel={'Painéis'}/>
    
    

      

    </>
  )
}

