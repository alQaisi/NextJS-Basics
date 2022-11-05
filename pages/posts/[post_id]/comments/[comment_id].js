import Link from "next/link";

export async function getStaticPaths(){
    const response=await fetch("https://jsonplaceholder.typicode.com/comments");
    const data=await response.json();
    const paths=data.map(comment=>({params:{post_id:""+comment.postId,comment_id:""+comment.id}}));
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{comment_id,post_id}}){
    const response=await fetch(`https://jsonplaceholder.typicode.com/comments/${comment_id}`);
    const data=await response.json();
    return {props:{
        comment:data,
        post_id
    }};
}

function Comment({comment,post_id}) {
    return (
        <div>
            <h1>{ comment.name }</h1>
            <h3>{ comment.email }</h3>
            <h4>{ post_id }</h4>
            <p>{ comment.body }</p>
            <Link href={`/posts/${post_id}`}><button>Back to the post</button></Link>
        </div>
    );
}

export default Comment;