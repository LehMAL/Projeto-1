import { useState } from "react";
import { Alert } from "react-bootstrap";

function LoginPage(){
    let [isClosed, setIsClosed] = useState(true)
    const [error, setError] = useState(null);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://143.198.156.185/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log('Login successful');
            } else {
                const data = await response.json();
                setError(data.message || 'Something went wrong');
            }
        } catch (error) {
            setError('Something went wrong');
            console.error('Error:', error);
        }
    };

    function submeterFormulario(form){
        alert("Login efetuado com sucesso!");
        form.preventDefault();
    }

    function updatePasswordState(value){
        setIsClosed(!isClosed);
    }

    return (
    <>
    <form onSubmit={submeterFormulario}>
        <div className="pt-4">
        <div className="card mb-5 mx-3">
            <div className="card-header">
                <h6>Login</h6>
            </div>
            <div className="card-body">
            {error && <Alert variant="danger">{error}</Alert>}
                <div onSubmit={handleSubmit}>
                <div className="row">

                    <div className="col-12 mb-2">
                        <label className="label-control">Login:</label>
                        <input type="email" 
                        className="form-control" 
                        placeholder="Insira seu email"
                        onChange={(e) => setEmail(e.target.value)}></input>
                    </div>        
                    
                    <div className="col-12 mb-2">
                        <label className="label-control">Senha:</label>
                        <div class="input-group">
                            <input type={isClosed ? "password" : "text" } className="form-control" placeholder="Insira sua senha..."></input>
                            <button type="button" 
                            onClick={updatePasswordState}
                            onChange={(e) => setPassword(e.target.value)} 
                            className="btn btn-light border">
                            
                            <i className={isClosed ? "fa fa-eye-slash" : "fa fa-eye" }></i></button>
                        </div>
                    </div>                
                </div>
            </div>
            <br/>
            <div className="card-footer text-end">
                <button type="submit" className="btn btn-sm btn-success">Login</button>
            </div>
        </div>
        </div>
    </div>
    </form>
    </>
    );
}

export default LoginPage;