import { useState,useEffect,Children } from "react";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";


function CommentsPage() {
    const [comment,setComment]=useState("");
    const [comments,setComments]=useState([]);
    const [shouldFetch,setShouldFetch]=useState(false);
    const { data,error }=useSWR(shouldFetch?"/api/comments":null,fetcher);
    function fetchComments(){
       setShouldFetch(true); 
    }
    async function submitComment(){
        const response=await fetch("/api/comments",{
            method:"POST",
            body:JSON.stringify({comment}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const data=await response.json();
        console.log(data);
        setComment("");
    }
    function deleteComment(commentId){
        return async function(){
            const response=await fetch(`/api/comments/${commentId}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }); 
            const data=await response.json();
            console.log(data);
        }
    }
    useEffect(()=>{
        if(data){
            // setShouldFetch(false);
            setComments(data);
        }
    },[data]);
    return (
        <div>
            <label style={{display:"block",marginBlockEnd:"15px"}}>
                <p>Comment</p>
                <input type="text" value={comment} onChange={({target:{value}})=>setComment(value)} />
                <button onClick={submitComment}>Add</button>
            </label>
            <button onClick={fetchComments}>Fetch Comments</button>
            { Children.toArray(comments.map(comment=><div><h1>{comment.id} : {comment.text}</h1><button onClick={deleteComment(comment.id)}>Delete</button></div>)) }
        </div>
    );
}

export default CommentsPage;