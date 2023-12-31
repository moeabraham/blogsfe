import { useState } from "react"
import BASEURL from '../config';


// https://blogsbe.netlify.app
export default function RegisterPage(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    // console.log(BASEURL)
   async function register(ev){
    ev.preventDefault();

     const response =  await fetch(`${BASEURL}/register`, {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers:{"Content-Type": "application/json"},
        })
        console.log(response)
        if(response.status === 200){
               alert("registration successful")

        }else{
            console.log(BASEURL)

            alert("registration failed")
        }
    }

    return( 
       <form className="register"  onSubmit={register}>

        <h1>Register</h1>
            <input 
            type="text" 
            placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}
             />
            <input 
            type="password"
             placeholder="password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              />
            <button>Register</button>
       </form>
    )
}