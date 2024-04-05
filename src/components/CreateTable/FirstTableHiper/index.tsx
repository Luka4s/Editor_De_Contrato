import styles from "./TableHiper.module.css";

export default function TableHiper() {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.headerTableH}>
          <td>Valores e forma de pagamento</td>
        </thead>
        <tbody className={styles.tableBody}>
          <div className={styles.divTest}>
            <td>
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
            <td>
              <tr>
                <textarea name="" id=""></textarea>
              </tr>
              <tr>
                <textarea name="" id=""></textarea>
              </tr>
              <tr>
                <textarea name="" id=""></textarea>
              </tr>
              <tr>
                <textarea name="" id=""></textarea>
              </tr>
              <tr>
                <textarea name="" id=""></textarea>
              </tr>
              <tr>
                <textarea name="" id=""></textarea>
              </tr>
            </td>
          </div>
        </tbody>
      </table>
    </div>
  );
}

{
  /* <tr className={styles.rowBody}>
<td className={styles.fieldBody}>
  Valor total da ativação, serviços e equipamentos
</td>
<td className={styles.inputUser}>
  <textarea></textarea>
</td>
</tr>
<tr className={styles.rowBody}>
<td className={styles.fieldBody}>
  Quantidade de parcelas para pagamento
</td>
<td className={styles.inputUser}>
  <textarea></textarea>
</td>
</tr>
<tr className={styles.rowBody}>
<td className={styles.fieldBody}>Valor de cada parcela</td>
<td className={styles.inputUser}>
  <textarea></textarea>
</td>
</tr>
<tr className={styles.rowBody}>
<td className={styles.fieldBody}>Meio de pagamento</td>
<td className={styles.inputUser}>
  <textarea></textarea>
</td>
</tr>
<tr className={styles.rowBody}>
<td className={styles.fieldBody}>Data vencimento da 1º parcela</td>
<td className={styles.inputUser}>
  <textarea></textarea>
</td>
</tr>
<tr className={styles.rowBody}>
<td className={styles.fieldBody}>
  Prazo de pagamento das demais parcelas
</td>
<td className={styles.inputUser}>
  <textarea></textarea>
</td>
</tr> */
}
