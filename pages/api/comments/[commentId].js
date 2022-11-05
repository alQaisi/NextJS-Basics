import { comments } from "../../../data/comments";

export default function handler(req,res){
    const { method,query:{commentId} }=req;
    const comment=comments.filter(comment=>comment.id===+commentId);
    if(method==="DELETE"){
        const index=comments.findIndex(comment=>comment.id===+commentId);
        comments.splice(index,1);
    }
    console.log(comment);
    res.status(200).json(comment);
}