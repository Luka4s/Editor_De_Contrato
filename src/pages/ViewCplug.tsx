import { InputUser } from "../Context/InputUserContext";
import { Background } from "../components/Background/Background";
import { Download } from "../components/Download/Download";
import { EditTable } from "../components/EditarTable/EditTable";
import { MyModal } from "../components/Modal/Modal";
import styles from "../components/Templates/StylesTeamplates.module.css";
import { ViewInputsCplug } from "../components/ViewInputs/Cplug/ViewInputsCplug";
import { VisualizationCplug } from "../components/Visualization/VisualizationCplug";
import { TbSwitchHorizontal } from "react-icons/tb";

export function ViewCplug() {
  const { setSwitchInfra, switchInfra } = InputUser();
  return (
    <div>
      <div>
        <div>
          <Background />
        </div>
        <div className={styles.buttonSwitchContainer}>
          <button
            className={styles.buttonSwitch}
            onClick={() => {
              setSwitchInfra(!switchInfra);
            }}
          >
            <span>
              {switchInfra ? "Proposta" : "Contrato"}
              <TbSwitchHorizontal />
            </span>
          </button>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <div className={styles.info}>
              <h2>Preencha os campos abaixo:</h2>
            </div>
            <div className={styles.InputsContainer}>
              <ViewInputsCplug />
            </div>
            <section className={styles.sectionDownload}>
              <Download />
            </section>
          </div>
          <main>
            <VisualizationCplug />
            <MyModal />
            <EditTable />
          </main>
        </div>
      </div>
    </div>
  );
}
