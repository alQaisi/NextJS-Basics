import useSWR from "swr";
import { Children, useState, useEffect  } from "react";
import { useRouter } from "next/router";
import fetcher from "../../utils/fetcher";

function Todos() {
    const router=useRouter();
    const [fetchTarget,setFetchTarget]=useState("https://jsonplaceholder.typicode.com");
    const { data, error }=useSWR("https://jsonplaceholder.typicode.com/todos",fetcher);
    useEffect(()=>{
        if(router.query.id){
            console.log(router.query.id);
            setFetchTarget(`https://jsonplaceholder.typicode.com/${router.query.id}`);
        }
    },[router.query])
    console.log(fetchTarget);
    console.log(data,error);
    return (
        <div>
            { ( data && !error  ) && Children.toArray(data.map(({id,title,completed})=><div><h1 style={{cursor:"pointer"}} onClick={()=>router.push(`/todos/?id=${id}`, undefined, { shallow: true })}>{title}</h1><h3>completed: {`${completed}`}</h3></div>)) }
        </div>
    );
}

export default Todos;