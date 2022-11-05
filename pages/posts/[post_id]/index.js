import Link from "next/link";

export async function getStaticPaths(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await response.json();
    const paths=data.map(post=>({params:{post_id:""+post.id}}));
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{post_id}}){
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data=await response.json();
    return {props:{
        post:data
    }};
}

function Post({post:{title,body}}) {
    return(
        <div>
            <h1>{ title }</h1>
            <p>{ body }</p>
            <Link href="/posts"><button>Back to all posts</button></Link>
        </div>
    );
}

export default Post;