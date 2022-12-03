import { PromiseProvider } from "mongoose";
import React, {useState} from "react"

export default function Login(props){
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

    }

    return (
        <>
        <form onSubmit = {handleSubmit}>
            <label value = {email} for = 'email'>Email</label>
            <input type = "email" placeholder="your email" id='email' name = 'email' />
            <label value = {pass} for = 'password'>Password</label>
            <input type = "password" placeholder=" ********" id='password' name = 'password' />
            <button type = "submit">Login</button>
        </form>
        {props.val}
        </>
    )
}