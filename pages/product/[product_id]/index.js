import { useRouter } from "next/router";

export async function getStaticPaths(){
    return{
        paths:[{params:{product_id:"1"}},{params:{product_id:"2"}},{params:{product_id:"3"}}],
        fallback:false
    };
}

export async function getStaticProps({params:{product_id}}){
    return {props:{
        product_id
    }}
}

function Product_Page({product_id}) {
    const { query:{product_id:prdId} }=useRouter();
    console.log(prdId);
    return (
        <h1>Product {product_id} </h1>
    );
}

export default Product_Page;