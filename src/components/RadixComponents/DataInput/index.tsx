import { IMaskInput } from "react-imask";
import { InputUser } from "../../../Context/InputUserContext";
import styles from "../../Inputs/Inputs.module.css";
import * as Popover from "@radix-ui/react-popover";

export function DataInput() {
  const { setDate } = InputUser();
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button className={styles.buttonsInput}>
            <span>Data</span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <div className={styles.DataContent}>
              <label>Data</label>
              <IMaskInput
                mask={"00/00/0000"}
                type="text"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
