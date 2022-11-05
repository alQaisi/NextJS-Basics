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

function Test({product_id}) {
    console.log({product_id});
    return (
        <h1>Test for product {product_id}</h1>
    );
}

export default Test;