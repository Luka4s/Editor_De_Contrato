import styles from "../Download/Download.module.css";
import { handleUserClick } from "../Visualization/Visualization";

export function Download() {
  return (
    <div className={styles.download}>
      <button onClick={handleUserClick}>Download PDF</button>
    </div>
  );
}
