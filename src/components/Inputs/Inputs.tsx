import styles from './Inputs.module.css';

export function Inputs() {
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