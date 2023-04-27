import React from "react";

function Education () {
    return (
        <>
        <center><h2>Educación</h2></center>
        <table class="table">
            <thead>
                <tr>
                    <th>Nro</th>
                    <th>Titulo</th>
                    <th>Institucion</th>
                    <th>Fecha de Finalizacion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Titulo de Bachiller</td>
                    <td>Colegio Nacional Mixto Manuel Basconez Martines</td>
                    <td>2015</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Titulo en Provision Nacional Ingeniero en Sistemas</td>
                    <td>Universidad Autonoma Tomas Frias</td>
                    <td>En Proceso</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Education