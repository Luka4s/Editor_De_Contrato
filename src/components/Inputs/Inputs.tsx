import { IMaskInput } from "react-imask";
import { InputUser } from "../../Context/InputUserContext";
import styles from "./Inputs.module.css";
import * as Popover from "@radix-ui/react-popover";

export function InputsContractor() {
  const { setUserInfo, setCnpjUser } = InputUser();

  return (
    <section>
      <div>
        <div>
          <h2 className={styles.info}>Preencha os campos abaixo:</h2>
        </div>
        <Popover.Root>
          <Popover.Trigger>
            <button>
              <span>Contratante</span>
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content>
              <div className={styles.PopoverContent}>
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
