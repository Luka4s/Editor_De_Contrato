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
          <Popover.Trigger className={styles.buttonsInput}>
            <span>Contratante</span>
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
                    const target = e.target as HTMLInputElement;
                    setCnpjUser(target.value);
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
