import { useEffect, useState } from "react"
import Post from "../components/Post"
import BASEURL from '../config';

export default function IndexPage(){
// console.log(BASEURL)
    const[posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(`${BASEURL}/post`).then(response => {
            response.json().then(posts=>{
                setPosts(posts)
                // console.log(posts)
            })
        })
    }, [])
    return(
        <>
      {posts.length > 0 && posts.map((post, idx) => (
        <Post {...post} key={idx}/>
      ))}
        </>
    )
}