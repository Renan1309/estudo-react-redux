import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form } from 'unform';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import Input from '../../componets/input';
import { Container, InputContent } from './styles';

function Formulario() {
    const dispatch = useDispatch();

    const estadoGeral = useSelector((state) => state.formulario);

    const formularioState = useSelector((state) => state.formulario.formulario);

    const usuario = useSelector((state) => state.formulario.usuario);

    const formRef = useRef(null);

    useEffect(() => {
        console.log(formularioState);
        console.log(usuario);
    }, []);

    const [cordenadores, setCordenador] = useState([
        { nome: 'Renan', email: 'renan@gmail.com' },
        { nome: 'José', email: 'jose@gmail.com' },
    ]);

    const handleSubmit = (data) => {
        console.log(data);
        dispatch({
            type: 'ADD_PEOPLE',
            payload: data,
        });
    };

    const editarNome = (event, index) => {
        console.log(event.target.value + ' @@@@@@ ' + index);
        dispatch({
            type: 'EDIT_PEOPLE',
            payload: {
                newName: event.target.value,
                index: index,
            },
        });
    };

    const usuarioDiferente = (event) => {
        console.log(estadoGeral);
        dispatch({
            type: 'EDIT_USUARIO',
            payload: event.target.value,
        });
    };

    const initialData = {
        email: 'fefe@fefefe.com',
        name: 'fefefefefef',
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <h2>Formulario</h2>
                    <InputContent>
                        <Input name="nome" />

                        <Input name="email" />
                        {/* <Input name={usuario} value={usuario} disabled={false} functionEdit={usuarioDiferente}></Input> */}

                        <button type="submit">
                            <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                    </InputContent>
                </Container>
            </Form>
            <Container>
            {formularioState.map((pessoa, index) => (

                    <InputContent>
                        {console.log(index)}
                        <Input
                            name={formularioState[index].nome}
                            value={formularioState[index].nome}
                            disabled={false}
                            functionEdit={editarNome}
                            indexList={index}
                        ></Input>
                        <Input
                            name={pessoa.email}
                            value={pessoa.email}
                            disabled={false}
                            functionEdit={editarNome}
                        ></Input>

                        <button type="button">
                            <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                    </InputContent>

            ))}
             </Container>
        </>
    );
}

export default Formulario;
