import './login.css';
import {useState} from "react";

const send = ()=>{
    console.log('Hello');
}

function Login({email,password}) {




    return (
        <main className="main">
            <article className="content">
                <p> Inicio de Sesión </p>
                <form action="" className="form">
                    <input type="email" id="email" placeholder="Enter email"/>
                    <input type="password" id="password" placeholder="Enter password"/>
                    <section><input type="submit" value="Continuar" onClick={this.send}/></section>
                </form>
            </article>
        </main>
    );
}

export default Login;
