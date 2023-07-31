import { Link } from "react-router-dom"
import styles from "./Post.module.scss"
import BotaoPrincipal from "../BotaoPrincipal"

export default function Post({post}){
    return(

        <Link to={`/post/${post.id}`}>
       <div className={styles.post}>
            <img className={styles.capa}
             src={`/img/posts/${post.id}/capa.png`}
             alt="Imagem de capa do post"/>
             <h2 className={styles.titulo}>{post.titulo}</h2>
             <BotaoPrincipal texto={"Ler mais"}/>
       </div>
       </Link>
    )
}