import { IMaskInput } from "react-imask";
import { InputUser } from "../../Context/InputUserContext";
import styles from "./Inputs.module.css";

export function Inputs() {
  const {
    //  cnpjUser,
    itenTable,
    setUserInfo,
    setCnpjUser,
    setCity,
    setEstado,
    setDate,
  } = InputUser();

  return (
    <section>
      <div className={styles.inputs}>
        <label className={styles.labels}>Contratante</label>
        <input
          type="text"
          onChange={(e) => {
            setUserInfo(e.target.value);
          }}
        />

        <label className={styles.labels}>CNPJ</label>
        <IMaskInput
          mask={"00.000.000/0000-00"}
          maxLength={18}
          type="text"
          onChange={(e) => {
            setCnpjUser(e.target.value);
          }}
        />

        <label className={styles.labels}>Cidade</label>
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <label className={styles.labels}>Estado</label>
        <input
          type="text"
          onChange={(e) => {
            setEstado(e.target.value);
          }}
        />

        <label className={styles.labels}>Data</label>
        <IMaskInput
          mask={"00/00/0000"}
          type="text"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
    </section>
  );
}
