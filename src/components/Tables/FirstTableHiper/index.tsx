import { useState } from "react";
import styles from "./TableHiper.module.css";

export default function TableHiper() {
  const [vta, setVta] = useState("R$ 1.530,00"); //Valor total da Ativação e Serviços Online (remoto)
  const [qpp, setQPP] = useState("3x"); //Quantidade de parcelas para pagamento
  const [vcp, setVcp] = useState("R$ 510,00"); //Valor de cada parcela
  const [mp, setMp] = useState("BOLETO"); //Meio de Pagamento
  const [dv, setDv] = useState("ATO(PIX)"); //Data de vencimento da 1ª Parcela
  const [pp, setPp] = useState("30/60 Dias."); //Prazo de pagamento das demais parcelas

  return (
    <table className={styles.table}>
      <thead className={styles.headerTableH}>
        <td>Valores e forma de pagamento</td>
      </thead>
      <tbody className={styles.tableBody}>
        <div className={styles.divTest}>
          <td className={styles.columnLeft}>
            <div>
              <tr className={styles.contentTr}>
                Valor total da ativação, serviços e equipamentos
              </tr>
              <tr className={styles.contentTr}>
                Quantidade de parcelas para pagamento
              </tr>
              <tr className={styles.contentTr}>Valor de cada parcela</tr>
              <tr className={styles.contentTr}>Meio de Pagamento</tr>
              <tr className={styles.contentTr}>
                Data de vencimento da 1ª Parcela
              </tr>
              <tr className={styles.contentTr}>
                Prazo de pagamento das demais parcelas
              </tr>
            </div>
          </td>
          <td className={styles.columnRight}>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
                value={vta}
                onChange={(e) => {
                  setVta(e.target.value);
                }}
              ></textarea>
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
                value={qpp}
                onChange={(e) => {
                  setQPP(e.target.value);
                }}
              />
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
                value={vcp}
                onChange={(e) => {
                  setVcp(e.target.value);
                }}
              />
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
                value={mp}
                onChange={(e) => {
                  setMp(e.target.value);
                }}
              />
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
                value={dv}
                onChange={(e) => {
                  setDv(e.target.value);
                }}
              />
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
                value={pp}
                onChange={(e) => {
                  setPp(e.target.value);
                }}
              />
            </tr>
          </td>
        </div>
      </tbody>
    </table>
  );
}
