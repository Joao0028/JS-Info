import styles from "./Banner.module.scss"
import circuloColorido from '../../assets/video-2.3/assets/circulo_colorido.png'
import minhaFoto from '../../assets/minhaFoto/FOTO_P.jpg'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>

                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou João Paulo, um dev Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>

            </div>

            <div className={styles.imagens}>
                <img src={circuloColorido} className={styles.circuloColorido} alt="Circulo colorido" aria-hidden={true}/>
                <img src={minhaFoto} className={styles.minhaFoto} alt="Foto de João Paulo" />
            </div>

        </div>
    )
}