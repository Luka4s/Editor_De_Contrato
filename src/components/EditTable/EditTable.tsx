import styles from "./EditTable.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import { InputUser } from "../../Context/InputUserContext";

export function EditTable() {
  const { modalList, itenList, setModalList } = InputUser();
  function handleClick() {
    setModalList([...modalList, { content: itenList }]);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        <BsFillPencilFill />
        Editar tabela
      </button>
    </div>
  );
}
