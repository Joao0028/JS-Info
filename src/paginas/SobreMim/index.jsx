import PostModelo from "../../components/PostModelo";
import fotoCapa from '../../../src/assets/video-2.3/assets/sobre_mim_capa.png'
import styles from "./SobreMim.module.scss"
import fotoSobreMim from '../../../src/assets/minhaFoto/Foto_animada.png'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o João Paulo
            </h3>

            <img src={fotoSobreMim} alt="Foto de João Paulo Silva sorrindo"
                className={styles.fotoSobreMim} />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou um desenvolvedor web Front-end e estou feliz de te ver por aqui.
            </p>
            
            <p className={styles.paragrafo}>
                Minha história com programação começou no Senai (SP - SBC), quando fiz o curso de Desenvolvimento de Sistemas de Multiplataforma (Web e Mobile) integrado a um curso de Informática.
            </p>
            
            <p className={styles.paragrafo}>
                Eu aprendi lógica de programação e o básico de algumas technologias, como JavaScript, HTML e CSS mas sem aprofundar muito em cada uma delas. A partir disso eu desenvolvi o gosto por estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>
            
            <p className={styles.paragrafo}>
                No ensino médio, decidi que iria cursar Análise e Desenvolvimento de Sistemas e que viveria de programação.  Desde então tenho me dedicado a me tornar um programador cada vez mais experiente e capacitado para atender as demandas do mercado com maestria, para isso estou sempre me atualizando fazendo cursos de programação e pesquisando assuntos relacionadas a tecnologia em paralelo.
            </p>

        </PostModelo>
    )
}