import { SwitcherLocacaoImpre } from "../Switcher/SwitcherLocacaoImpre";
import styles from "./Visualization.module.css";

export function VisualizationLocacaoImpre() {
  return (
    <div>
      <section className={styles.visualization}>
        <SwitcherLocacaoImpre />
      </section>
    </div>
  );
}
