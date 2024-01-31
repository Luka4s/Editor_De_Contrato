import styles from "../Download/Download.module.css";
import { handleUserClick } from "../Visualization/Visualization";
import { BsDownload } from "react-icons/bs";


export function Download() {
  return (
      <div className={styles.download}>
        
        <button onClick={handleUserClick} className={styles.button}>
          <BsDownload/>
          Download PDF
        </button>
      </div> 
  );
}
