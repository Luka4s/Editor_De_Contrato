import styles from './EditTable.module.css';
import { BsFillPencilFill } from "react-icons/bs";

export function EditTable() {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <BsFillPencilFill />
                Editar tabela
            </button>
        </div>
    );
}