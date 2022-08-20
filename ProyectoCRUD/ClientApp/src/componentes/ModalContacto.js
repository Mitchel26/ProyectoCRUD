
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Input, ModalFooter, Button } from "reactstrap"
import { useEffect, useState } from "react"

const modeloContacto = {
    id: 0,
    nombre: "",
    correo: "",
    telefono: ""
}

const ModalContacto = ({ mostrarModal, setMostrarModal, guardarContacto, editar, setEditar, editarContacto }) => {

    const [contacto, setContacto] = useState(modeloContacto);

    const actalizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value
        })
    }

    const enviarDatos = () => {
        if (contacto.id == 0) {
            guardarContacto(contacto)
        } else {
            editarContacto(contacto)
        }
        setContacto(modeloContacto)
    }

    useEffect(() => {
        if (editar != null) {
            setContacto(editar)
        } else {
            setContacto(modeloContacto)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {
                    contacto.id == 0 ? "Nuevo Contacto" : "Editar Contacto"
                }
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <label>Nombre</label>
                        <Input name="nombre" onChange={(e) => actalizarDato(e)} value={contacto.nombre}></Input>
                    </FormGroup>
                    <FormGroup>
                        <label>Correo</label>
                        <Input name="correo" onChange={(e) => actalizarDato(e)} value={contacto.correo}></Input>
                    </FormGroup>
                    <FormGroup>
                        <label>Telefono</label>
                        <Input name="telefono" onChange={(e) => actalizarDato(e)} value={contacto.telefono}></Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={(cerrarModal)}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalContacto;