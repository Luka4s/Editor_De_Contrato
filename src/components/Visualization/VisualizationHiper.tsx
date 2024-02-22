import { SwitcherHiper } from "../Switcher/SwitcherHiper";

import styles from "./Visualization.module.css"

export function VisualizationHiper() {

    return (
      <div>
        <section className={styles.visualization}>
          <SwitcherHiper/>
        </section>
      </div>
    );
  }