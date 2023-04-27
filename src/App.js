import AppRoutes from './Routers/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  return(
    <>
      <AppRoutes />
      <footer className='text-white py-4 bg-dark'>
      <div class="container px-4 py-5" id="featured-3">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
              <h3>Portafolio</h3>
            </div>
            <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
              <ul>
                    <li><h5>Correo Electronico</h5></li>
                    <p>richardcondoritoconas@gmail.com</p>
                    <li><h5>Telefono</h5></li>
                    <p>75731579</p>
                    <li><h5>Dirección</h5></li>
                    <p>Cll. 6 de agosto #185</p>
                </ul>
            </div>
            <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
                <h5 class="fs-2">Redes Sociales</h5>
                <ul>
                    <img src='facebook.png' width={40}/>
                    <Nav.Link href="https://www.facebook.com/richard.condoritoconas">Facebook</Nav.Link>
                </ul>
            </div>
            </div>
            </div>
      </footer>
    </>
    
  );
}

export default App; 



