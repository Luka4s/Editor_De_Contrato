import { InputUser } from "../../Context/InputUserContext";
import styles from "./EditTable.module.css";
import { BsFillPencilFill } from "react-icons/bs";

export function EditTable() {
  const { setModalVisible } = InputUser();

  const abrirModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.editarTable}>
      <button className={styles.button} onClick={abrirModal}>
        <span>Editar tabela</span> <BsFillPencilFill />
      </button>
    </div>
  );
}
