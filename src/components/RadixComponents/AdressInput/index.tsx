import * as Popover from "@radix-ui/react-popover";
import { InputUser } from "../../../Context/InputUserContext";
import styles from "../../Inputs/Inputs.module.css";
import { IMaskInput } from "react-imask";

export function AddressInput() {
  const {
    setCity,
    setEstado,
    setNumberHouse,
    setStreet,
    setNeighborhood,
    setCep,
  } = InputUser();

  return (
    <Popover.Root>
      <Popover.Trigger className={styles.buttonsInput}>
        <span>Endereço</span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <div>
            <div className={styles.enderecoContent}>
              <label className={styles.labels}>Cidade</label>
              <input
                type="text"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />

              <label className={styles.labels}>Estado</label>
              <input
                type="text"
                onChange={(e) => {
                  setEstado(e.target.value);
                }}
              />

              <label className={styles.labels}>Bairro</label>
              <input
                type="text"
                onChange={(e) => {
                  setNeighborhood(e.target.value);
                }}
              />

              <label className={styles.labels}>Numero</label>
              <input
                type="text"
                onChange={(e) => {
                  setNumberHouse(e.target.value);
                }}
              />

              <label className={styles.labels}>Rua</label>
              <input
                type="text"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />

              <label className={styles.labels}>CEP</label>
              <IMaskInput
                mask={"00000-000"}
                type="text"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setCep(target.value);
                }}
              />
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
