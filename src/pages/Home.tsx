import styles from "../components/Templates/Infraestrutura/Template-infra.module.css";
import { Background } from "../components/Background/Background";
import imagemHome from "../assets/Home_image.png";

export function Home() {
  return (
    <div>
      <Background />
      <div className={styles.aviso}>
        <h4>
          Essa aplicação está em versão BETA, entre em contato para informar
          bugs e melhorias!.
        </h4>
      </div>
      <div className={styles.wrapperHome}>
        <div className={styles.bemVindo}>
          <h2>
            Seja bem vindo(a) ao ambiente de soluções práticas relacionadas à
            geração de contratos.
          </h2>
        </div>
        <img width="250px" height="250px" src={imagemHome} alt="" />
        <div className={styles.tipo}>
          <h2>
            Escolha o tipo de contrato e desfrute de ferramentas dinâmicas que
            foram projetadas para facilitar esta etapa.
          </h2>
        </div>
        <div className={styles.gridCenter}>
          <h2>Ferramentas que nossa solução possui:</h2>
        </div>
        <div className={styles.ultimoGrid}>
          <ul className={styles.li}>
            <li>Atualização de dados em tempo real</li>
            <li>Geração de tabela com dados customizados</li>
            <li>Auto-preenchimento de contrato</li>
            <li>Ferramenta para download em PDF</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
