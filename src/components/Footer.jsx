import { NavbarText } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import whats from '../img/whats.png';
import x from '../img/x.png';

function Footer() {
  return (
    <Navbar bg="danger" data-bs-theme="danger">
      <Container>
        <Navbar.Brand href="#home">Timepiece Shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavbarText>
            Endereço: 123 Rua das Flores Bairro da Esperança
São Paulo, SP  
          </NavbarText>
          <div>
          .    <img src={x} height={20} width={20}></img>
          </div>
          <div>
            -  <img src={whats} height={20} width={20}></img>
          </div>

         <div>   Tel: (11)96836-0483</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;