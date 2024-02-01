import styles from './EditTable.module.css';
import { BsFillPencilFill } from "react-icons/bs";
import { Modal } from '../Modal/Modal'


export function EditTable() {
   
    const handleClick = () => {
        console.log('clicou');
        
        return(
        <Modal open={true}/>
        )
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => {handleClick()}}>
                <BsFillPencilFill />
                Editar tabela
            </button>
        </div>
    );
}