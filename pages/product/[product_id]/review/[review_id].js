import { useRouter } from "next/router";

export async function getStaticPaths(){
    return{
        paths:[{params:{product_id:"1",review_id:"1"}},{params:{product_id:"1",review_id:"2"}},{params:{product_id:"2",review_id:"2"}},{params:{product_id:"3",review_id:"3"}}],
        fallback:false
    };
}

export async function getStaticProps({params:{review_id,product_id}}){
    return {props:{
        review_id,
        product_id
    }}
}

function Review({product_id,review_id}) {
    console.log(product_id,review_id);
    return (
        <h1> Review {review_id} for Product {product_id} </h1>
    );
}

export default Review;