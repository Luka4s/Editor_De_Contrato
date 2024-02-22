import { InputsContractor } from "../../Inputs/Inputs";
import { AddressInput } from "../../RadixComponents/AdressInput";
// import { DataInput } from "../../RadixComponents/DataInput";
import styles from "./ViewInputsInfra.module.css"

export function ViewInputsInfraProposta(){

    return(
           <div className={styles.boxInputs}>
                <AddressInput/>
                {/* <DataInput/> */}
                <InputsContractor/>   
            </div>
    )
}