import { InputUser } from "../../Context/InputUserContext";
import styles from "./EditTable.module.css";
import { BsFillPencilFill } from "react-icons/bs";

export function EditTableP() {
  const { setModalPVisible } = InputUser();

  const abrirModal = () => {
    setModalPVisible(false);
  };

  return (
    <div className={styles.editarTable}>
      <button className={styles.button} onClick={abrirModal}>
        <BsFillPencilFill />
      </button>
    </div>
  );
}
