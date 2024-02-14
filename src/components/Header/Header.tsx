import styles from './Header.module.css';
import multiLogo from '../../assets/multipoint-logo-novo-horizontal.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={multiLogo} className={styles.logo}/>
            <h2 className={styles.titulo}>Editor de Contratos</h2>

            
                <nav className={styles.navbar}> 
                    <ul>
                     <li>Editor de contratos</li>
                     <li>Gerador de propostas</li>
                     <li>Lorem</li>
                    </ul>
                </nav>
            
           
        </header>
    );
}