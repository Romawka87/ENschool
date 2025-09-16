import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {HookToScrol} from "../hooks/HookToScrol"


const Header = () => {
  const scrollTo = HookToScrol();



  return (
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ENschool</Navbar.Brand>
          <Nav className=" justify-content-between cursor-pointer">
            <Nav.Link
            onClick={()=>scrollTo('about')}
            >
            О нас
          </Nav.Link>
            <Nav.Link
             onClick={() => scrollTo('services')}
            >
              
              Услуги
              
              </Nav.Link>
            <Nav.Link
            onClick={()=>scrollTo('footer')}
            
            >
              
              Контакты
              
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
