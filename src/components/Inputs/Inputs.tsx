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
    setContentIten,
    setQuantityItens,
  } = InputUser();

  console.log(itenTable);

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

        <label className={styles.labels}>Quantidade</label>
        <input
          type="text"
          id="input5"
          onChange={(e) => {
            setQuantityItens(e.target.value);
          }}
        />

        <label className={styles.labels}>Serviços</label>
        <input
          type="text"
          id="input5"
          onChange={(e) => {
            setContentIten(e.target.value);
          }}
        />

        <label className={styles.labels}>Date</label>
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
