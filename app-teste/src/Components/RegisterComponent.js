import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from 'axios';
import './ImageSliderComponent.css';

function RegisterComponent() {
    const [isClosed, setIsClosed] = useState(true);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://143.198.156.185/api/auth/register', {
                nome,
                email,
                password
            });
            setSuccess(`Cadastro realizado com sucesso!, ${response.data.user.name}!`);
            setError(null);
        } catch (error) {
            setError(error.response?.data?.error || 'Erro desconhecido');
            setSuccess(null);
        }
    }

    function updatePasswordState() {
        setIsClosed(!isClosed);
    }

    return (
        <div className="center-container">
            <div className="card efeito-zero">
                <div className="card-header efeito-um">
                    <h4>Cadastro</h4>
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insira seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </Form.Group><br />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Insira seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group><br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha:</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type={isClosed ? "password" : "text"}
                                    placeholder="Senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button
                                    type="button"
                                    onClick={updatePasswordState}
                                    className="btn btn-light border"
                                >
                                    <i className={isClosed ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                </Button>
                            </div>
                        </Form.Group>
                    </div>
                    <div className="card-footer efeito-dois">
                        <Button type="submit" className="btn btn-sm btn-success">
                            Cadastrar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default RegisterComponent;
