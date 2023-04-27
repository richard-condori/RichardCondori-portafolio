import React from "react";
import { Nav } from "react-bootstrap";

function About () {
    return (
        <>
            <center><h2>Acerca de mi</h2></center> 
            <div class="container px-4 py-5" id="featured-3">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <h5 class="fs-2">Descripción Personal</h5>
                <ul>
                    <li><h5>Nombre Completo</h5></li>
                    <p>Richard Bernabe Condori Toconas</p>
                    <li><h5>Edad</h5></li>
                    <p>27 años</p>
                    <li><h5>Lugar de Nacimiento</h5></li>
                    <p>Potosí</p>
                    <li><h5>Estado Civil</h5></li>
                    <p>Soltero</p>
                </ul>
            </div>
            <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
                <h3 class="fs-2">Foto</h3>
                <img src="foto.jpg" width={200}/>
            </div>
            <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
                <h3 class="fs-2">Enlaces  Perfiles o Redes Sociales</h3>
                <ul>
                    <Nav.Link href="https://www.facebook.com/richard.condoritoconas">Facebook</Nav.Link>
                </ul>
            </div>
            </div>
            </div>
        </>
    )
}

export default About