import axios from 'axios';
import { useRef } from 'react';
import { BASE_URL } from '../../Utils/requests';

export default function Logar() {

    const username = useRef()
    const password = useRef()

    function enviar(event) {
        event.preventDefault()
        axios.post(`${BASE_URL}/login`, {
            username: username.current.value,
            password: password.current.value
        }).then((res) => localStorage.setItem("token", res.headers.authorization)
            .catch((err) => console.log(err)))
    }

    function sair(){
        localStorage.removeItem("token")
    }

    return (
        <div className="container mt-5">
            {localStorage.getItem("token") == null ?
                <>
                    <form onSubmit={enviar}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" className="form-control" ref={username} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" ref={password} />
                        </div>
                        <button type="submit" className="btn btn-primary">enviar</button>
                    </form>
                </>   
                :
                <>
                    <h1>Bem vindo!</h1>
                    <button onClick={sair}>Sair</button>
                </>
        }
        </div>
    )
}

