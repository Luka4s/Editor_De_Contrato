import styles from "../SecondTableHiper/SecondTableHiper.module.css";

export function SecondTableHiper() {
  return (
    <table className={styles.secondTable}>
      <tbody>
        <td>
          <tr className={styles.secondTableTr}>Valor da mensalidade</tr>
          <tr className={styles.secondTableTr}>PAGAMENTO</tr>
        </td>
        <td>
          <tr>
            <textarea name="" id="" className={styles.secondTableTextArea} />
          </tr>
          <tr>
            <textarea name="" id="" className={styles.secondTableTextArea} />
          </tr>
        </td>
      </tbody>
    </table>
  );
}
