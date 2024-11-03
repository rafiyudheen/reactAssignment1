import "../css/MyNavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/react.svg"
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavBar(){
  return(
      <>
        <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Products">Features</Nav.Link>
              <Nav.Link href="#Collection">Pricing</Nav.Link>
              <Nav.Link href="#Pages">Home</Nav.Link>
              <Nav.Link href="#About Us">Features</Nav.Link>
              <Nav.Link href="#Contact Us">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          
      </>
  )


}
export default MyNavBar