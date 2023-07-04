import { useContext, useState,  } from "react";
import { Navigate } from "react-router-dom";
import{UserContext} from "../UserContext";
import BASEURL from '../config';
// console.log(BASEURL)
// https://blogsbe.netlify.app/

export default function LoginPage(){
    const[username, setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[redirect, setRedirect] = useState(false);
    const{setUserInfo} = useContext(UserContext);
    // console.log(process.env.REACT_APP_BASE_URL)
   async function login(ev){
    ev.preventDefault();
     const response = await fetch(`${BASEURL}/login`,{
            method: "POST",
            body:JSON.stringify({username, password}),
            headers: {"Content-Type": "application/json"},
            credentials: "include",

        })
        // console.log(response)
        if(response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true)
            })
        } else{
            alert("wrong credentials")
        }
    }

    if(redirect){
        return <Navigate to={"/"} />
    }
    return(
       <form className="login" onSubmit={login}>
                <h1>Login</h1>

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
            <button>Login</button>
       </form>
    )
}