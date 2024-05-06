import styles from "./TableHiper.module.css";

export default function TableHiper() {
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
              ></textarea>
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
              ></textarea>
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
              ></textarea>
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
              ></textarea>
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
              ></textarea>
            </tr>
            <tr>
              <textarea
                name=""
                id=""
                className={styles.textAreaUser}
              ></textarea>
            </tr>
          </td>
        </div>
      </tbody>
    </table>
  );
}
