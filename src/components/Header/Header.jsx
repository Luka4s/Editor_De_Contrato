import styles from './Header.module.css';
import multiLogo from '../../assets/multipoint-logo-novo-horizontal.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={multiLogo}/>
            <h2 className={styles.titulo}>Editor de Contratos</h2>

            <div>
                <nav className={styles.navbar}> 
                    <ul>
                     <li>Lorem</li>
                     <li>Lorem</li>
                     <li>Lorem</li>
                    </ul>
                </nav>
            </div>
           
        </header>
    );
}