import styles from "./BotaoPrincipal.module.scss"

export default function BotaoPrincipal({texto, tamanho}){
    return <button className={`
    ${styles.botao}
    ${styles[tamanho]}
    `}>
        {texto}</button>
} 