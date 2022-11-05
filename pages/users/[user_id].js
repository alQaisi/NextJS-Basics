import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export async function getServerSideProps({params:{user_id}}){
    let data;
    try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        data=await response.json();
        if(!data?.name)
            throw new Error("Not found");
    }catch(err){
        data={ notfound:true };
    }finally{
        console.log(data);
        return{
            props:{
                user:data
            }
        }
    }
    
}

function User({user}) {
    const router=useRouter();
    console.log(user);
    useEffect(()=>{
        if(!user?.name)
            router.replace("/404");
    },[user,router]);

    if(!user.name)
        return <></>

    return (
        <div>
            <h1>{ user.username }</h1>
            <h2>{ user.name }</h2>
            <h3>{ user.email }</h3>
            <h3>{ user.website }</h3>
            <Link href="/users"><button>Back to all users</button></Link>
        </div>
    );
}

export default User;