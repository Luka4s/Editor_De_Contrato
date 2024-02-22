import { InputsContractor } from "../../Inputs/Inputs";
import { AddressInput } from "../../RadixComponents/AdressInput";
import { DataInput } from "../../RadixComponents/DataInput";
import styles from "../Infraestrutura/ViewInputsInfra.module.css"

export function ViewInputsHiper(){

    return(
           <div className={styles.boxInputs}>
                <AddressInput/>
                <DataInput/>
                <InputsContractor/>
            </div>
            
    )

    }