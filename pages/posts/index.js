import { Children } from "react";
import Link from "next/link";

export async function getStaticProps(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await response.json();
    return {props:{
        posts:data
    }};
}

function Posts({posts}){
    return (
        <div>
            { Children.toArray(posts.map(({title,body,id})=><div><Link href={`/posts/${id}`}><h1>{title}</h1></Link><p>{body}</p><br/></div>)) }
        </div>
    );
}

export default Posts;