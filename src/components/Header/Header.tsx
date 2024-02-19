import styles from './Header.module.css';
import multiLogo from '../../assets/logo_multipoint.png'
import { TiThMenu } from "react-icons/ti";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={multiLogo} className={styles.logo}/>
            
            <div className={styles.menu}>
                <TiThMenu/>
            </div>
            
                
            
           
        </header>
    );
}