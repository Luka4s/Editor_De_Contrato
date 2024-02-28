import { Download } from "../components/Download/Download";
import { EditTable } from "../components/EditarTable/EditTable";
import { MyModal } from "../components/Modal/Modal";
import styles from "../components/Templates/Infraestrutura/Template-infra.module.css";
import { Background } from "../components/Background/Background";
import { TbSwitchHorizontal } from "react-icons/tb";
import { InputUser } from "../Context/InputUserContext";
import { ViewInputsSistema } from "../components/ViewInputs/Sistemas/ViewInputsContrato";
import { VisualizationSistemas } from "../components/Visualization/VisualizationSistemas";

export function ViewSistemas() {
  const { setSwitchSistema, switchSistema } = InputUser();

  return (
    <div>
      <div>
        <Background />
      </div>
      <div className={styles.info}>
        <h2>Preencha os campos abaixo:</h2>
      </div>
      {/* <div className={styles.buttonSwitchContainer}>
            <button className={styles.buttonSwitch} onClick={() => {setSwitchSistema(!switchSistema)}}><span>{switchSistema?"Proposta":"Contrato"}<TbSwitchHorizontal/></span></button>
          </div> */}
      <div className={styles.wrapper}>
        <div>
          <div className={styles.InputsContainer}>
            <ViewInputsSistema />
          </div>
          <section className={styles.sectionDownload}>
            <Download />
          </section>
        </div>
        <main>
          <div>
            <VisualizationSistemas />
            <MyModal />
            <EditTable />
          </div>
        </main>
      </div>
    </div>
  );
}
