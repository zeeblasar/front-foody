import './login.css';
import {useState} from "react";
import { Link } from 'react-router-dom';


function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
       e.preventDefault();
   }

   return (
        <main className="main">
            <article className="content">
                <p> Inicio de Sesión </p>
                <form onSubmit={handleSubmit} className="form">
                    <input type="email" id="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" id="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                    <section><input type="submit" className="submit" value="Continuar" /></section>
                </form>
            </article>
        </main>
   );
}

export default Login;
