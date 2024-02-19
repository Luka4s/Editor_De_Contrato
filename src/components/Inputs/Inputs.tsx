import { IMaskInput } from "react-imask";
import { InputUser } from "../../Context/InputUserContext";
import styles from "./Inputs.module.css";
import * as Popover from "@radix-ui/react-popover";

export function InputsContractor() {
  const { setUserInfo, setCnpjUser } = InputUser();

  return (
    <section>
     
      <div>       
        <Popover.Root>
          <Popover.Trigger>
            <button className={styles.buttonsInput}>
              <span>Contratante</span>
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content>
              <div className={styles.ContractorContent}>
                <label className={styles.labels}>Contratante</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setUserInfo(e.target.value);
                  }}
                />
                <label className={styles.labels}>CNPJ</label>
                <IMaskInput
                  mask={"00.000.000/0000-00"}
                  maxLength={18}
                  type="text"
                  onChange={(e) => {
                    setCnpjUser(e.target.value);
                  }}
                />
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </section>
  );
}
