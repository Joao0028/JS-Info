import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.scss'

export default function Menu(){

    const localizacao = useLocation();

    console.log(localizacao);

    return(
    <header>
        <nav className={styles.navegacao}>
            <Link className={`${styles.link} ${localizacao.pathname === "/" ? styles.link__destacado : "" }`} to="/">
                Início
            </Link>
            <Link className={`${styles.link} ${localizacao.pathname === "/sobremim" ? styles.link__destacado : "" }`} to="/sobremim">
                Sobre Mim
            </Link>
        </nav>
    </header>
    )
}