import { Header } from "./components/Header/Header";
import { InputsContractor } from "./components/Inputs/Inputs";
import { Visualization } from "./components/Visualization/Visualization";
import { Download } from "./components/Download/Download";
import { Footer } from "./components/Footer/Footer";
import "./global.css";
import styles from "./App.module.css";
import { InputUserProvider } from "./Context/InputUserContext";
import { EditTable } from "./components/EditarTable/EditTable";
import { MyModal } from "./components/Modal/Modal";
import { GrSystem } from "react-icons/gr";
import { FaServer } from "react-icons/fa6";
import { FaCashRegister } from "react-icons/fa";
import { AddressInput } from "./components/RadixComponents/AdressInput";
import { DataInput } from "./components/RadixComponents/DataInput";

export function App() {
  return (
    <InputUserProvider>
      <div>
        <Header />

        <section className={styles.titulo}>
          <div>
            <h3>Editor de contratos</h3>
          </div>
        </section>

        <section>
          <div className={styles.containerButtons}>
            <div className={styles.boxButtons}>
              <button className={styles.buttons}>
                <FaServer />
                INFRAESTRUTURA
              </button>

              <button className={styles.buttons}>
                <FaCashRegister />
                HIPER
              </button>

              <button className={styles.buttons}>
                <GrSystem />
                SISTEMAS
              </button>
            </div>
          </div>
        </section>

        <div className={styles.wrapper}>
          <div className={styles.gapContainerDowload}>
            <div className={styles.InputsContainer}>
              <InputsContractor />
              <AddressInput />
              <DataInput />
            </div>
            <section className={styles.sectionDownload}>
              <Download />
            </section>
          </div>
          <main className={styles.line2}>
            <div>
              <Visualization />
              <MyModal />

              <EditTable />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </InputUserProvider>
  );
}
