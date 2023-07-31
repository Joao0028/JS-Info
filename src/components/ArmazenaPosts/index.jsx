import styles from "./ArmazenaPosts.css"
import {useParams} from "react-router-dom"
import posts from "../../assets/json/posts.json"
import PostModelo from "../PostModelo"
import ReactMarkdown from 'react-markdown'
import NaoEncontrada from "../NaoEncontrada"

export default function ArmazenaPosts(){

     const parametros = useParams();
     const post = posts.find((post)=> {
        return post.id === Number(parametros.id)
     })

    if(!post){
       return <NaoEncontrada/>
    }
    return (
        <PostModelo
        fotoCapa={`/img/posts/${post.id}/capa.png`}
        titulo={post.titulo}
        >
            <div className={"post-markdown-container"}>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>
        </PostModelo>
    )
}