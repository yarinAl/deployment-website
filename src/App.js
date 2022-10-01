import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function App() {
  const img1 = require('./images/img1.png')
  return (
    <div>
      <Navbar className="bar" variant="dark" bg="dark" expand="lg">
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
        <main className="l-main">
          <section className="home" id="home">
            <div className="home__container bd-grid">
              <div className="home__img">
                <img src={img1} alt="" data-speed="-2" className="move imgDesgin" />
                <div className='bdym'>
                  <div className='myH12'>
                    <div className='myH1'>There &nbsp;</div>
                    <div className='myH1'>are &nbsp;</div>
                    <div className='myH1'>no &nbsp;</div>
                    <div className='myH1'>limits &nbsp;</div>
                    <div className='myH1'>to &nbsp;</div>
                    <div className='myH1'>what &nbsp;</div>
                    <div className='myH1'>you &nbsp;</div>
                    <div className='myH1'>can &nbsp;</div>
                    <div className='myH1'>accomplish, &nbsp;</div>
                    <div className='myH1'>except &nbsp;</div>
                    <div className='myH1'>the &nbsp;</div>
                    <div className='myH1'>limits &nbsp;</div>
                    <div className='myH1'>you &nbsp;</div>
                    <div className='myH1'>place &nbsp;</div>
                    <div className='myH1'>on &nbsp;</div>
                    <div className='myH1'>your &nbsp;</div>
                    <div className='myH1'>own &nbsp;</div>
                    <div className='myH1'>thinking.</div>
                  </div></div>
              </div>
              <div className="home__data">
                <h1 className="home__title">Yarin's Website<br /> Online Cv</h1>
                <p className="home__description">Website <br /> Online Cv.</p>
                <a href="https://github.com/yarinAl" className="home__button">My Github</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
