//import { IMaskInput } from "react-imask";
import { InputUser } from "../../../Context/InputUserContext";
import styles from "../../Inputs/Inputs.module.css";
import * as Popover from "@radix-ui/react-popover";

export function DataInput() {
  const { setDate } = InputUser();

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger className={styles.buttonsInput}>
          <span>Date</span>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <div className={styles.DataContent}>
              <label>Data</label>
              <input
                //mask={"00/00/0000"}
                type="date"
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
