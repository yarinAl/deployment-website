import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';



function App() {
  const img1 = require('./images/img1.png')
  return (
    <div>
      <Navbar className="bar" variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className='hoverLinked' href="https://www.linkedin.com/in/yarin-alkalai/">LinkedIn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="space"></div>
            <Nav className="me-auto">
              <Nav.Link className='hoverLinks' href="#home">Home</Nav.Link>
              <OverlayTrigger
                key='bottom'
                placement='bottom'
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    not yet <strong>available</strong>.
                  </Tooltip>
                }
              >
                <Nav.Link className='hoverLinks' href="#link">Blogs</Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
                key='bottom'
                placement='bottom'
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    not yet <strong>available</strong>.
                  </Tooltip>
                }
              >
                <NavDropdown className='hoverLinks' title="My Apps" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Shopping App</NavDropdown.Item>
                </NavDropdown>
              </OverlayTrigger>
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
                    <div className='myH1'>"There &nbsp;</div>
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
                    <div className='myH1'>thinking." </div>
                    <br className='myH1' />
                    <div className='myH1 endStyleTxt'>Brian Tracy</div>
                  </div>
                </div>
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
