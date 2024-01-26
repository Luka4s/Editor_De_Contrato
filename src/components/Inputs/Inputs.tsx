import { InputUser } from "../../Context/InputUserContext";
import styles from "./Inputs.module.css";

export function Inputs() {
<<<<<<< HEAD
    return (
        
        <section>
          <div className={styles.inputs}>
            
            <label className={styles.labels}>Contratante</label>
            <input type="text" id='input1'/>
            
            
            <label className={styles.labels}>CNPJ</label>
            <input type="text" id='input2'/>
            
            
            <label className={styles.labels}>Lorem</label>
            <input type="text" id='input3'/>
            
            
            <label className={styles.labels}>Lorem</label>
            <input type="text" id='input4'/>

            <label className={styles.labels}>Lorem</label>
            <input type="text" id='input5'/>

            <label className={styles.labels}>Lorem</label>
            <input type="text" id='input6'/>
            
          </div>
        </section>
        
    )
}
=======
  const { setUserInfo, setCnpjUser } = InputUser();

  return (
    <section>
      <div className={styles.inputs}>
        <label>Contratante</label>
        <input
          type="text"
          id="input1"
          onChange={(e) => {
            setUserInfo(e.target.value);
          }}
        />

        <label>CNPJ</label>
        <input
          type="text"
          id="input2"
          onChange={(e) => {
            setCnpjUser(e.target.value);
          }}
        />

        <label>Lorem</label>
        <input type="text" id="input3" />

        <label>Lorem</label>
        <input type="text" id="input4" />

        <label>Lorem</label>
        <input type="text" id="input5" />

        <label>Lorem</label>
        <input type="text" id="input6" />
      </div>
    </section>
  );
}
>>>>>>> refs/remotes/origin/master
