import { InputsContractor } from "../../Inputs/Inputs";
import { AddressInput } from "../../RadixComponents/AdressInput";
import { DataInput } from "../../RadixComponents/DataInput";
import styles from "./ViewInputsInfra.module.css";

export function ViewInputsInfra() {
  return (
    <div className={styles.boxInputs}>
      <InputsContractor />
      <AddressInput />
      <DataInput />
    </div>
  );
}
