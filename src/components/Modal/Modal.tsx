import styles from "./Modal.module.css"
import { BsPlus } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { BsEraser } from "react-icons/bs";
import { InputUser } from "../../Context/InputUserContext";
import { EditTable} from "../EditTable/EditTable";

export function MyModal() {

  const {
    setContentIten,
    setQuantityItens,
  } = InputUser();
  

  return(
    <section className={styles.sectionModal}>
      <div className={styles.boxModal}> 
        <h3 className={styles.title}>Preencha os campos para inserir na tabela:</h3>
        <label htmlFor="input1">Quantidade</label>
          <input 
          type="text" 
          id="input1" 
          onChange={(e) => {
                setQuantityItens(e.target.value);
              }}/>

        <label htmlFor="input2">Serviço</label>
          <input 
          type="text" 
          id="input2"
          onChange={(e) => {
            setContentIten(e.target.value);
          }} />

        <label htmlFor="input3">Valor</label>
          <input 
            type="text" 
            id="input3"/>

        <div className={styles.boxButton}>
          <button className={styles.buttonErase}><BsEraser/></button>
          <button className={styles.buttonAdd} onClick={EditTable}><BsPlus/></button>
          <button className={styles.buttonSave}><BsCheck/></button>
        </div>
      </div>
    </section>
  )
    
}
