import { useEffect, useState } from "react";
// import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import BASEURL from '../config';


export default function EditPost(){

    const{id} = useParams()
    const[title,setTitle] =useState("");
    const[summary, setSUmmary] = useState("")
    const[content, setContent] = useState("");
    const[files,setFiles] = useState("");
    const[cover, setCover] = useState("");
    const[redirect, setRedirect] = useState(false);

    useEffect(()=>{
        fetch(`${BASEURL}/post/`+id)
        .then(response=>{
            response.json().then(postInfo=>{
                setTitle(postInfo.title)
                setContent(postInfo.content)
                setSUmmary(postInfo.summary)
                // setTitle(postInfo.title)
            })
        })
    },[])


   async function updatePost(ev){
        ev.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set('id', id);

        if(files?.[0]){
            data.set("file", files?.[0])

        }
        const response = await fetch(`${BASEURL}/post`,{
            method:"PUT",
            body: data,
            credentials: 'include',

        })
        console.log(response)
        if(response.ok){
            setRedirect(true)

        }
    }
    if(redirect){
        return <Navigate to={"/post/"+id} />
       }


    //    const modules = {
    //     toolbar: [
    //     [{ 'header': [1, 2, false] }],
    //     ['bold', 'italic', 'underline','strike', 'blockquote'],
    //     [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    //     ['link', 'image'],
    //     ['clean']
    //     ],
    // }
    
    // const formats =  [
    //     'header',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image'
    //   ]
    
    return(
        <form
        onSubmit={updatePost}>
            <input type="title"
             placeholder={"title"} 
             value={title}
              onChange={ev => setTitle(ev.target.value)}
               />

            <input type="summary"
             placeholder={"summary"} 
             value={summary} 
             onChange={ev => setSUmmary(ev.target.value)}
              />
              
            <input type="file"
            //  value={files} 
                onChange={ev => setFiles(ev.target.files)}
            />
            <Editor onChange={setContent} value={content}/>
            {/* <ReactQuill
                value={content} 
                modules={modules} 
                // formats ={formats}
                onChange={ev => setContent(ev)}
              /> */}
            {/* <textarea name="post" id="" cols="30" rows="10" ></textarea> */}
            <button style={{marginTop:"5px"}}>Update Post</button>
        </form>
    )
}