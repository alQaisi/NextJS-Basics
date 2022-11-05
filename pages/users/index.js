import Link from "next/link";
import { Children } from "react";

export async function getServerSideProps(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    return {props:{
        users:data
    }};
}

function Users({users}) {
    return (
        <div>
            { Children.toArray(users.map(({id,name,username})=><div><Link href={`/users/${id}`}><h1>{username}</h1></Link><p>{name}</p><br/></div>)) }
        </div>
    );
}

export default Users;