import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import UserContext from '../context/UserContext';






function Login() {
    const[username, setUsername] = useState('')
    const[password, setpassword] = useState('')
    const {setUser} = useContext(UserContext)


    const submit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }



    return ( 
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/> <br />
            <input type="text" placeholder='username'value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            <button onClick={submit}>Submit</button>
        </div>
     );
}

export default Login;