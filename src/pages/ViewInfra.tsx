import { Download } from "../components/Download/Download"
import { EditTable } from "../components/EditarTable/EditTable"
import { MyModal } from "../components/Modal/Modal"
import styles from "../components/Templates/Infraestrutura/Template-infra.module.css"
import { ViewInputsInfra } from "../components/ViewInputs/Infraestrutura/ViewInputsInfra"
import { Visualization } from "../components/Visualization/Visualization"
import { Background } from "../components/Background/Background"
import { TbSwitchHorizontal } from "react-icons/tb";
import { InputUser } from "../Context/InputUserContext"



export function ViewInfra(){

  const {setSwitchInfra, switchInfra} = InputUser()
  console.log(switchInfra);
  

    return(
      <div>
        <div>
          <Background/>
        </div>
          <div className={styles.info}>
          <h2>Preencha os campos abaixo:</h2>
          </div>
          <div className={styles.buttonSwitchContainer}>
            <button className={styles.buttonSwitch} onClick={() => {setSwitchInfra(!switchInfra)}}><span>{switchInfra?"Proposta":"Contrato"}<TbSwitchHorizontal/></span></button>
          </div>
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