import React from "react";
import { Stack } from "react-bootstrap";

function Skills () {
    return (
        <>
            <center><h2>Habilidades</h2></center>
            <Stack gap={5}>
                <div className="bg-light border">Conocimientos en emsamblaje y reparacion de computadoras</div>
                <div className="bg-light border">Nivel de Ingles B2</div>
                <div className="bg-light border">Conociminetos Basicos en Programación</div>
            </Stack>
        </>
    )
}

export default Skills