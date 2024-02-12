import styles from "./Modal.module.css"
import { BsPlus } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { BsEraser } from "react-icons/bs";
import { InputUser } from "../../Context/InputUserContext";

export function MyModal() {
  const {
    setContentIten,
    setQuantityItens,
    setValueIten,
    setItenTable,
    itenTable,
    quantityItens,
    contentIten,
    valueIten,
  } = InputUser();
  
  const handleAddClick = (e) => {
    if (quantityItens != 0 && contentIten != "" && valueIten != 0){
    e.preventDefault();
    setItenTable([
      ...itenTable,
      { quantity: quantityItens, content: contentIten, value: valueIten },
    ]);
    setContentIten("");
    setQuantityItens("");
    setValueIten("");
  }else{
    alert("Preencha todos os campos")
  }}
  
  const handleRemoveClick = (e) => {
    e.preventDefault();
    const newItenTable = [...itenTable];
    newItenTable.pop();
    setItenTable(newItenTable)
    
  }

  return(
    <section className={styles.sectionModal}>
      <div className={styles.boxModal}> 
        <h3 className={styles.title}>Preencha os campos para inserir na tabela:</h3>
        <label htmlFor="input1">Quantidade</label>
          <input 
          type="text" 
          id="input1"
          value={quantityItens}
          onChange={(e) => {
                setQuantityItens(e.target.value);
              }}/>

        <label htmlFor="input2">Serviço</label>
          <input 
          type="text" 
          id="input2"
          value={contentIten}
          onChange={(e) => {
            setContentIten(e.target.value);
          }} />

        <label htmlFor="input3">Valor</label>
          <input 
            type="text" 
            id="input3"
            value={valueIten}
            onChange={(e) => {
              setValueIten(e.target.value);
            }}/>

        <div className={styles.boxButton}>
          <button className={styles.buttonErase} onClick={handleRemoveClick}><BsEraser/></button>
          <button className={styles.buttonAdd} onClick={handleAddClick} ><BsPlus/></button>
          <button className={styles.buttonSave} ><BsCheck/></button>
        </div>
      </div>
    </section>
  )
    
}
