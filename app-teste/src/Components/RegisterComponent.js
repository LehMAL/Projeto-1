import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from 'axios';





function RegisterComponent() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
    
        let response = await axios.post('http://143.198.156.185/api/auth/register', {
            "nome": nome,
          "email": email,
          "password": password
        }).then(function (value) {
          setSuccess(`Cadastro realizado com sucesso!, ${value.data.user.name}!`);
          setError(null)
        })
          .catch(function (value) {
            setError(value.response.data.error);
            setSuccess(null)
          });
      }

    return (
        <>
      

        
        <div className="row justify-content-center">
            <div className="card col-sm-12 col-md-8 col-lg-6" style={{"margin-top": "200px"}}>

                <div className="card-header">
                    <h1>Cadastro</h1>
                </div>
                <div className="card-body">
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form>
                <Form.Group controlId="formBasicText">
                        <Form.Label><b>Nome</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><b>Email</b></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><b>Senha</b></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-2">
                        <b>Cadastrar</b>
                    </Button>
                </Form>

                 
                
                </div>

            </div>
            </div>
            <div/>

        </>
    )
}
export default RegisterComponent;
