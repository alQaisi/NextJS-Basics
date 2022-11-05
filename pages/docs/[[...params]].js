import { useRouter } from "next/router";

function Doc() {
    const { query:{params} }=useRouter();
    console.log(params);
    return (
        <h1>Docs Home Page</h1>
    );
}

export default Doc;