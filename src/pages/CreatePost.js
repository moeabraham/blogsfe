import { useState } from 'react';
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from '../components/Editor';
import BASEURL from '../config';





export default function CreatePost(){

    const[title,setTitle] =useState("");
    const[summary, setSUmmary] = useState("")
    const[content, setContent] = useState("");
    const[files,setFiles] = useState("");
    const[redirect, setRedirect] = useState(false);
    
    async function createNewPost(e){
        const data = new FormData();
        data.append("title", title);
        data.append("summary", summary);
        data.append("content", content);
        data.append("file", files[0] )
        // console.log(files)
        e.preventDefault();
        console.log(BASEURL)
        const response = await fetch(`${BASEURL}/post`,{
            method:"POST",
            // mode:"cors",
            body: data,
            credentials: 'include',
            // Access-Control-Allow-Origin
            headers: {
        //         // "Content-Type": "application/json",

        //         // "Content-Type": "application/json",
                'Access-Control-Allow-Origin': "https://blogsfe.netlify.app/"
        },

            // mode:"no-cors",

        })
        // response ? console.log("yalla"): console.log("lesa")
        // console.log(response,"respos")

        if(response.ok){
            console.log("esha")
            setRedirect(true)
        } else{
            console.log("7ah")
        }
        
        if(redirect === true){
         return (<Navigate to={"/login"} />)
        }
        // console.log(redirect)

        // console.log(await response.json())
    }
    return(
        <form
        onSubmit={createNewPost}>
            <input
            type="text" 
            name="title"
             placeholder={"title"} 
             value={title}
              onChange={ev => setTitle(ev.target.value)}
               />

            <input 
            
            type="text" 
            name="summary"
             placeholder={"summary"} 
             value={summary} 
             onChange={ev => setSUmmary(ev.target.value)}
              />
              
            <input 
            type="file"
            name="file"
            //  value={files} 
                onChange={ev => setFiles(ev.target.files)}
            />
            <Editor value={content} onChange={setContent} />
            {/* <ReactQuill
                value={content} 
                modules={modules} 
                formats ={formats}
                onChange={ev => setContent(ev)}
              /> */}
            {/* <textarea name="post" id="" cols="30" rows="10" ></textarea> */}
            <button style={{marginTop:"5px"}}>Create Post</button>
        </form>
    )
}