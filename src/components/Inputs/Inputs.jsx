import styles from './Inputs.module.css';

export function Inputs() {
    return (
        
        <section>
          <div className={styles.inputs}>
            
            <label>Contratante</label>
            <input type="text" id='input1'/>
            
            
            <label>CNPJ</label>
            <input type="text" id='input2'/>
            
            
            <label>Lorem</label>
            <input type="text" id='input3'/>
            
            
            <label>Lorem</label>
            <input type="text" id='input4'/>

            <label>Lorem</label>
            <input type="text" id='input5'/>

            <label>Lorem</label>
            <input type="text" id='input6'/>
            
          </div>

          {/* <div className={styles.textArea}>
            <textarea readOnly cols="90" rows="20"></textarea>
          </div> */}
        </section>
        
    )
}