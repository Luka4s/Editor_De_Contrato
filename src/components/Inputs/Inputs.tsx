import { InputUser } from "../../Context/InputUserContext";
import styles from "./Inputs.module.css";

export function Inputs() {
  const { setUserInfo, setCnpjUser, setCity, setEstado, setDate } = InputUser();

  return (
    <section>
      <div className={styles.inputs}>
        <label className={styles.labels}>Contratante</label>
        <input
          type="text"
          id="input1"
          onChange={(e) => {
            setUserInfo(e.target.value);
          }}
        />

        <label className={styles.labels}>CNPJ</label>
        <input
          type="text"
          id="input2"
          onChange={(e) => {
            setCnpjUser(e.target.value);
          }}
        />

        <label className={styles.labels}>Cidade</label>
        <input
          type="text"
          id="input3"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <label className={styles.labels}>Estado</label>
        <input
          type="text"
          id="input4"
          onChange={(e) => {
            setEstado(e.target.value);
          }}
        />

        <label className={styles.labels}>Lorem</label>
        <input type="text" id="input5" />

        <label className={styles.labels}>Date</label>
        <input
          type="text"
          id="input6"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
    </section>
  );
}
