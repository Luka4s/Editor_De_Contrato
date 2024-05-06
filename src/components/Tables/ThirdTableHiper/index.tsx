import styles from "../ThirdTableHiper/ThirdTableHiper.module.css";

export function ThirdTableHiper() {
  return (
    <>
      <table className={styles.thirdTable}>
        <thead className={styles.thirdHeaderTable}>
          <td>Prazos de Atendimento para Suporte Tecnico</td>
        </thead>

        <thead className={styles.thirdHeaderTable}>
          <td>
            <tr className={styles.trHeaderThirdTableFirstTitle}>
              GRAU DE CRITICIDADE
            </tr>
          </td>
          <td>
            <tr className={styles.trHeaderThirdTableSecondTitle}>PRAZO</tr>
          </td>
        </thead>
        <tbody className={styles.thirdBodyTable}>
          <div className={styles.leftColumnThirdTable}>
            <td>
              <tr className={styles.TrLeftInThirdTable}>
                Alto – Incidentes com o Software que possam gerar riscos de
                interrupção do sistema.
              </tr>
              <tr className={styles.TrLeftInThirdTable}>
                Médio – Incidentes com o Software que provoquem perturbações em
                sua utilização, mas sem risco de interrupção do sistema.
              </tr>
              <tr className={styles.TrLeftInThirdTable}>
                Baixo – Incidentes que não causem impactos imediatos, permitindo
                a continuidade do sistema, ainda que através de soluções
                alternativas.
              </tr>
            </td>
          </div>
          <div className={styles.rightColumnThirdTable}>
            <td>
              <tr className={styles.TrRightInThirdTable}>
                <textarea name="" id="" />
              </tr>
              <tr className={styles.TrRightInThirdTable}>
                <textarea name="" id="" />
              </tr>
              <tr className={styles.TrRightInThirdTable}>
                <textarea name="" id="" />
              </tr>
            </td>
          </div>
        </tbody>
      </table>
      <div>
        <table className={styles.thirdTable}>
          <thead className={styles.thirdHeaderTable}>
            <td>Valor da Hora Técnica para Serviços Adicionais</td>
          </thead>

          <tbody className={styles.thirdBodyTableSecondPart}>
            <td className={styles.firstColumnSecondPart}>
              <td className={styles.contentFistColumnSecondPart}>
                <span>Suporte Local:</span>
                <textarea name="" id="" className={styles.textAreaSecondPart} />
              </td>
              <td className={styles.contentFistColumnSecondPart}>
                <span className={styles.ajusteSpan}>
                  Suporte Remoto (fora do período):
                </span>
                <textarea name="" id="" className={styles.textAreaSecondPart} />
              </td>
            </td>

            <td className={styles.firstColumnSecondPart}>
              <td className={styles.contentFistColumnSecondPart}>
                <span>Treinamento Remoto:</span>
                <textarea name="" id="" className={styles.textAreaSecondPart} />
              </td>
              <td className={styles.contentFistColumnSecondPart}>
                <span>Treinamento Presencial:</span>
                <textarea name="" id="" className={styles.textAreaSecondPart} />
              </td>
            </td>
          </tbody>
        </table>
      </div>
    </>
  );
}
