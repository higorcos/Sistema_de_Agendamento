import { Button } from "react-bootstrap"
import Navbar from '../../../components/public/Navbar'
import CardInfor from '../../../components/public/others/CardInfor'
import ButtonAcess from '../../../components/public/others/ButtonsAcess'
export default function Home() {

  const buttons = [
    
    {
      name:'Criar Reserva',
      link:'/booking/new',
    },
    {
      name:'Ver Reservas',
      link:'/booking/user',
    },
   
  ] 
 
  return (
    <>
    <Navbar/>
    <CardInfor title={'Olá, bem vindo !'} txt={'Gerencie o seu laboratório'}/>
    <ButtonAcess buttons={buttons} painel={'Painéis'}/>
    
    

      

    </>
  )
}

