import { SwitcherCplug } from "../Switcher/SwitcherCplug";
import styles from "./Visualization.module.css";

export function VisualizationCplug() {
  return (
    <div>
      <section className={styles.visualization}>
        <SwitcherCplug />
      </section>
    </div>
  );
}
