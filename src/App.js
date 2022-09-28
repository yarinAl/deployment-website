import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function App() {
  const img1 = require('./images/img1.png')
  return (
    <div>
    <Navbar className="bar" variant="dark"  bg="dark"  expand="lg">
      <Container>
        <Navbar.Brand href="https://www.linkedin.com/in/yarin-alkalai/">LinkedIn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="space"></div>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="My Apps" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shopping App</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <main class="l-main">
            <section class="home" id="home">
                <div class="home__container bd-grid">
                    <div class="home__img">
                        <img src={img1} alt="" data-speed="-2" class="move"/>
                    </div>
                    <div class="home__data">
                        <h1 class="home__title">Yarin's Website<br/> Online Cv</h1>
                        <p class="home__description">Website <br/> Online Cv.</p>
                        <a href="https://github.com/yarinAl" class="home__button">My Github</a>
                    </div>
                </div>
            </section>
        </main>
    </div>
    </div>
  );
}

export default App;
