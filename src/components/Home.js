import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ev from "./images/Electric-vehicle-charging-station-infrastructure-blog-fetaured.jpeg";
import v2g from "./images/V2G-technology-integrated-with-a-power-grid.ppm"
import ev2 from "./images/Ev 2.jpeg"
import e1 from "./images/ev2.png"
import e2 from "./images/ev3.jpg"
import e3 from "./images/ev charging station.jpg"
import c1 from "./images/car1.jpg"
<link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function ColorSchemesExample() {
  return (
    <>
      <div className="title-container">
         <h1 className="title-text">Electric Vehicle Management System</h1>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home"></Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/vehicle-details" className="nav-link">Vehicle Details</Nav.Link>
            <Nav.Link as={Link} to="/charging-station" className="nav-link">Charging Station</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
              <Link to="/login" className="mr-3">
                <Button variant="outline-success">Login</Button>
              </Link>
            
              <Link to="/register">
                <Button variant="outline-success">Register</Button>
              </Link>
            </div>
        </Container>
      </Navbar>
      <br />
    <section id="title" class="gradient-background">
      <div class="container col-xxl-8 px-4 pt-5">
        <div class="row align-items-center g-5 pt-5">
          <div class="col-lg-6 order-lg-2">  <div class="background-image">
            <img src={ev2} alt="ev2" class="responsive-image img-thumbnail" /> </div>
          </div>
          <div class="col-lg-6 order-lg-1">  <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">NEW ELECTRIC ERA BEGINS.</h1>
          </div>
        </div>
      </div>
    </section>
      <section id="features">
        <div className="container px-4 py-5" id="hanging-icons">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Safe Ride</h3>
                <p>Make your ride comportable.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-mortarboard" viewBox="0 0 16 16">
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                </svg>
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">More Affordable</h3>
                <p>The new electric vehicle is more affordable than ever before.</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-arrow-through-heart" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.854 15.854a.5.5 0 0 1 0-.708l12-12a.5.5 0 0 1 .708.708l-12 12a.5.5 0 0 1-.708 0Zm.793-9.998a20.419 20.419 0 0 0-3.368 3.656c-1.39 1.837-1.794 3.567-1.373 5.088.42 1.524 1.625 2.527 3.146 2.949 1.52.421 3.251.016 5.088-1.373a20.419 20.419 0 0 0 3.657-3.368l-1.708-1.708a1.5 1.5 0 0 1-.073-.178l-.013-.026c-.012-.03-.026-.062-.04-.098a2.162 2.162 0 0 0-.125-.222c-.016-.026-.036-.052-.053-.078a1.5 1.5 0 0 1 .008-1.931l1.708-1.708a20.419 20.419 0 0 0-3.368 3.657 20.419 20.419 0 0 0-5.088 1.373c-1.524-.42-2.527-1.625-2.949-3.146-.421-1.521-.016-3.251 1.373-5.088a20.419 20.419 0 0 0 3.657-3.368l-1.708-1.708a1.5 1.5 0 0 1 .001-1.931l1.708-1.708Zm6.679-1.137-1.233 1.233-1.233-1.233a1.5 1.5 0 0 1 2.466-1.789Zm-1.466 1.733a.5.5 0 0 1-.753-.66l1.5-3a.5.5 0 1 1 .913.407l-1.5 3a.5.5 0 0 1-.16.25Zm1.5.667a.5.5 0 0 1 .733-.035l1.5 1a.5.5 0 0 1-.472.862l-1.5-1a.5.5 0 0 1 .24-.827Z" />
                </svg>
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Sustainable Transport Systems</h3>
                <p>Electric vehicles (EVs) are a sustainable mode of transport because they do not produce tailpipe emissions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="cta" className="text-center py-5">
        <div className="container">
          <h3 className="fs-2 text-body-emphasis">Find the nearest EV Charging Station.</h3>
        </div>
      </section>
      <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage imageName="./images/Electric-vehicle-charging-station-infrastructure-blog-fetaured.jpeg" /> */}
        <div className="background-image">
        <img src={c1} alt="Electric Vehicle" className="responsive-image" />
        </div>
     
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <div className="background-image">
        <img src={e2} alt="v2g" className="responsive-image" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="background-image">
          <img src={e3} alt="charging station" className="responsive-image" />
        </div>
        {/* <ExampleCarouselImage text="Third slide" /> */}
      </Carousel.Item>
    </Carousel>
     

    <section id="footer" className='gradient-background'>
      <div className='container'>
      <footer >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h3 className="text-body-emphasis">Features</h3>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Cool stuff</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Random feature</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Team feature</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Stuff for developers</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Another one</a></li>
                <li className="mb-2"><a href="#"  className='nav-link p-0 text-body-secondary'>Last time</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="text-body-emphasis">Resources</h3>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary' >Resource name</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Resource</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Another resource</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Final resource</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12">
              <h3 className="text-body-emphasis">About</h3>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Team</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Locations</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Privacy</a></li>
                <li className="mb-2"><a href="#" className='nav-link p-0 text-body-secondary'>Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-muted mb-0 py-2">© 2024 EVMS</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </section>

    </>
    


  );
}

export default ColorSchemesExample;
