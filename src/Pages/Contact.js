import React from "react";
import { Form, Button } from "react-bootstrap";

function Contact () {
    return (
        <>
        <center><h2>Contacto</h2></center>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="name" placeholder="Ingresa tu Nombre Completo" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control type="message" placeholder="Ingresa tu Mensaje" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
        </>
    )
}

export default Contact