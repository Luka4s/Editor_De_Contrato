import { TbSwitchHorizontal } from "react-icons/tb";
import { InputUser } from "../Context/InputUserContext";
import { Background } from "../components/Background/Background";
import { Download } from "../components/Download/Download";
import { EditTable } from "../components/EditarTable/EditTable";
import { MyModal } from "../components/Modal/Modal";
import styles from "../components/Templates/Infraestrutura/Template-infra.module.css";
import { ViewInputsHiper } from "../components/ViewInputs/Hiper/ViewInputsHiperContrato";
import { VisualizationHiper } from "../components/Visualization/VisualizationHiper";
export function ViewHiper() {
  const { setSwitchHiper, switchHiper } = InputUser();

  return (
    <div>
      <div>
        <Background />
      </div>
      <div className={styles.info}>
        <h2>Preencha os campos abaixo:</h2>
      </div>
      {/* <div className={styles.buttonSwitchContainer}>
        <button
          className={styles.buttonSwitch}
          onClick={() => {
            setSwitchHiper(!switchHiper);
          }}
        >
          <span>
            {switchHiper ? "Proposta" : "Contrato"}
            <TbSwitchHorizontal />
          </span>
        </button>
      </div> */}
      <div className={styles.wrapper}>
        <div>
          <div className={styles.InputsContainer}>
            <ViewInputsHiper />
          </div>
          <section className={styles.sectionDownload}>
            <Download />
          </section>
        </div>
        <main>
          <div>
            <VisualizationHiper />
            <MyModal />
            <EditTable />
          </div>
        </main>
      </div>
    </div>
  );
}
