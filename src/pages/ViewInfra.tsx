import { Download } from "../components/Download/Download"
import { EditTable } from "../components/EditarTable/EditTable"
import { MyModal } from "../components/Modal/Modal"
import styles from "../components/Templates/Infraestrutura/Template-infra.module.css"
import { ViewInputsInfra } from "../components/ViewInputs/Infraestrutura/ViewInputsInfra"
import { Visualization } from "../components/Visualization/Visualization"
import { Background } from "../components/Background/Background"

export function ViewInfra(){

    return(
      <div>
        <div>
        <Background/>
        </div>
        <h2 className={styles.info}>Preencha os campos abaixo:</h2>
        <div className={styles.wrapper}>
        <div>
          <div className={styles.InputsContainer}>
            <ViewInputsInfra/>
          </div>
          <section className={styles.sectionDownload}>
            <Download />
          </section>
        </div>
        <main>
          <div>
            <Visualization />
            <MyModal />
            <EditTable />
          </div>
        </main>
        </div>
      </div>
      
    
    )
}