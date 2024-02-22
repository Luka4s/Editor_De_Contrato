import { SwitcherSistema } from "../Switcher/SwitcherSistema";
import styles from "./Visualization.module.css"

export function VisualizationSistemas() {

    return (
      <div>
        <section className={styles.visualization}>
          <SwitcherSistema/>
        </section>
      </div>
    );
  }