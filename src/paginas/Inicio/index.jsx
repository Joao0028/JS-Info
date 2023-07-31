import styles from "./Inicio.module.scss"
import posts from '../../assets/json/posts.json'
import Post from "../../components/Post";

export default function Inicio(){
    return(
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => ((
                    <li key={post.id}>

                        <Post post={post}/>
                    </li>
                )))}
            </ul>
        </main>
    )
}