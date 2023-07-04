
// import TimeAgo from "javascript-time-ago";
import {formatISO9075} from "date-fns"
import { Link } from "react-router-dom";
import BASEURL from '../config';
export default function Post({_id,title, summary, content, cover, createdAt,author}){
    const username = {author}
    // console.log(username)
    // console.log(author.username, "heya")
    // console.log(BASEURL)
    return (
        <div className='post' key={_id}>
            <div className='image'>
                <Link to={`/post/${_id}`}>
                      <img src={`${BASEURL}/`+cover} alt=""></img>
                </Link>
            </div>
            <div className='texts'>
                <Link to={`/post/${_id}`}>
                        <h2>{summary}</h2>
                    </Link>
                <p className='info'>
                    <a className='author'>By@{author.username} </a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
      </div>
    )
}