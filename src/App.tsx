import { Header } from './components/Header/Header';
import { Inputs } from './components/Inputs/Inputs';
import { Visualization } from './components/Visualization/Visualization';
import { Download } from './components/Download/Download';
import './global.css';
import styles from './App.module.css';


export function App() {
  return( 
    
  <div>
    <Header/>

    <section className={styles.titulo}>
      <div>
        <h3>Editor de contratos</h3>
      </div>
    </section>

    <h2 className={styles.info}>Preencha os campos abaixo:</h2>

    <div className={styles.wrapper}>
      <Inputs/>

      <main>
        <div>
          <Visualization/>
        </div>
       
      </main>

      <section>
        <Download/>
      </section>
      
    </div>
    
  </div>
  
  );
}
