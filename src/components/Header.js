import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import BASEURL from '../config';

export default function Header(){

    // const[username, setUsername] = useState(null)
    const {setUserInfo, userInfo} = useContext(UserContext)

    useEffect(()=>{
        fetch(`${BASEURL}/profile`, {
            credentials:"include"
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                // setUsername(userInfo.username)
            })
        })
    },[])
// },[])

function logout(){
    fetch(`${BASEURL}/logout`, {
        credentials: "include",
        method: "POST",
    })
    setUserInfo(null)
    // setUsername(null)
}
// console.log(UserContext)
    const username = userInfo?.username;
    return (
        <header>
            <Link to="/" className='logo'>MyBlog</Link>
            <nav>
                {username && (
                    <>
                     <Link to="/create">Create new Post   </Link>
                    <a href="" onClick={logout}>Logout</a>
                    </>
                ) }
                {!username && (
                    <>
                       <Link to="/login" >Login</Link>
                       <Link to="/register" >Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}