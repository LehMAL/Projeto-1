import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginPage = () => {
    let [isClosed, setIsClosed] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    let [Mensagem]= useState("Email ou senha incorretos!");

    async function handleSubmit(e){
        e.preventDefault();

        let response = await axios.post('http://143.198.156.185/api/auth/login', {
            "email": email,
            "password": password
        }).then(function (value) {
            setSuccess(`Seja bem vindo, ${value.data.user.name}!`);
            setError(null);
          })
          .catch(function (value) {
            console.log(value);
            setError(Mensagem);
            setSuccess(null);
          });
        }
        function updatePasswordState(value){
            setIsClosed(!isClosed);
        }

    return (
        <div className="pt-4">
        <div className="card col-lg-5 col-md-10 mx-auto">

            <div className="card-header ">
                Login
            </div>
            <div className=" mx-3 pt-4">
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
            </div>
                <Form onSubmit={handleSubmit}>
                <div className="card-body">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group><br/>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha:</Form.Label>
                        <div class="input-group">
                        <Form.Control
                            type={isClosed ? "password" : "text" }
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                         <Button type="button" 
                            onClick={updatePasswordState}
                            onChange={(e) => setPassword(e.target.value)} 
                            className="btn btn-light border">
                            
                            <i className={isClosed ? "fa fa-eye-slash" : "fa fa-eye" }></i></Button>
                        </div>
                    </Form.Group>
                    </div>
               
            
                    <div className="card-footer text-center">
                        <Button type="submit" className="btn btn-sm btn-success">
                            Entrar
                        </Button><br/>
                   
                    <div className='register-link'>
                <p>Nao possui conta? <a href='/Register'>Cadastrar</a></p>
              </div>
              </div>
            </Form>

        </div>
        </div>
    );
};

export default LoginPage;
