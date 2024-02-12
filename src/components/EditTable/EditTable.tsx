import styles from "./EditTable.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import { InputUser } from "../../Context/InputUserContext";

export function EditTable() {
  const {
    itenTable,
    quantityItens,
    contentIten,
    setContentIten,
    setItenTable,
    setQuantityItens,
  } = InputUser();

  function handleUserClick(e: { preventDefault: () => void }) {
    while (contentIten === "" || quantityItens === 0) {
      return alert("Por favor, preencha todos os campos");
    }
    e.preventDefault();
    setItenTable([
      ...itenTable,
      { quantity: quantityItens, content: contentIten },
    ]);

    setContentIten("");
    setQuantityItens(0);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleUserClick}>
        <BsFillPencilFill />
        Editar tabela
      </button>
    </div>
  );
}
