import { useState } from "react";
import styles from "../SecondTableEasy/SecondTableEasy.module.css";

export function SecondTableEasy() {
  const [vm, setVm] = useState("R$ 380,00"); //Valor da mensalidade
  const [dv, setDv] = useState("30 dias após assinatura do contrato"); //Data do 1º vencimento
  return (
    <table className={styles.secondTable}>
      <tbody>
        <td>
          <tr className={styles.secondTableTr}>Valor da mensalidade</tr>
          <tr className={styles.secondTableTr}>PAGAMENTO</tr>
        </td>
        <td>
          <tr>
            <textarea
              name=""
              id=""
              className={styles.secondTableTextArea}
              value={vm}
              onChange={(e) => {
                setVm(e.target.value);
              }}
            />
          </tr>
          <tr>
            <textarea
              name=""
              id=""
              className={styles.secondTableTextArea}
              value={dv}
              onChange={(e) => {
                setDv(e.target.value);
              }}
            />
          </tr>
        </td>
      </tbody>
    </table>
  );
}
