import styles from "./Modal.module.css";
import { BsPlus } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { BsEraser } from "react-icons/bs";
import { InputUser } from "../../Context/InputUserContext";
import { MouseEvent, useState } from "react";

export function MyModal() {
  const {
    itenTable,
    contentIten,
    modalVisible,
    sumTotal,
    linesTable,
    setContentIten,
    setItenTable,
    setModalVisible,
    setSumTotal,
    setLinesTable,
  } = InputUser();

  const [quantityItens, setQuantityItens] = useState([0]);
  const [valueIten, setValueIten] = useState([0]);
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputValueIten, setInputValueIten] = useState("");
  console.log("itenTable", itenTable);
  console.log("sumTotal", sumTotal);
  console.log("QuantityItens", quantityItens);
  console.log("ValueIten", valueIten);

  const fecharModal = () => {
    const att = quantityItens.reduce((acc, quantity, index) => {
      const value = valueIten[index] || 0;
      return acc + quantity * value;
    }, 0);
    setSumTotal(att);
    setModalVisible(true);
  };

  function handleAddClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (contentIten != "" || null) {
      let linhasTabela = 0;
      const quantity = parseInt(inputQuantity, 10) || 0;
      const value = parseInt(inputValueIten, 10) || 0;

      setQuantityItens([...quantityItens, quantity]);
      setValueIten([...valueIten, value]);
      setInputQuantity("");
      setInputValueIten("");
      setContentIten("");

      setItenTable([
        ...itenTable,
        {
          quantity: quantity,
          content: contentIten,
          value: value,
        },
      ]);
      linhasTabela = linesTable + 1;
      setLinesTable(linhasTabela);
    } else {
      alert("Preencha todos os campos");
    }
  }

  const handleRemoveClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newItenTable = [...itenTable];
    newItenTable.pop();

    const newValueSumTotal = [...valueIten];
    newValueSumTotal.pop();
    valueIten.pop();
    quantityItens.pop();

    setItenTable(newItenTable);

    const total = quantityItens.reduce((quantity, index) => {
      const value = valueIten[index] || 0;
      return sumTotal - quantity * value;
    }, 0);
    setSumTotal(total);
  };

  return modalVisible ? null : (
    <section className={styles.sectionModal}>
      <div className={styles.boxModal}>
        <h3 className={styles.title}>
          Preencha os campos para inserir na tabela:
        </h3>
        <label htmlFor="input1">Quantidade</label>
        <input
          type="number"
          id="input1"
          value={inputQuantity}
          onChange={(e) => {
            setInputQuantity(e.target.value);
          }}
        />

        <label htmlFor="input2">Serviço</label>
        <input
          type="text"
          id="input2"
          value={contentIten || ""}
          onChange={(e) => {
            setContentIten(e.target.value);
          }}
        />

        <label htmlFor="input3">Valor</label>
        <input
          type="text"
          id="input3"
          onChange={(e) => {
            setInputValueIten(e.target.value);
          }}
        />

        <div className={styles.boxButton}>
          <button className={styles.buttonErase} onClick={handleRemoveClick}>
            <BsEraser />
          </button>
          <button className={styles.buttonAdd} onClick={handleAddClick}>
            <BsPlus />
          </button>
          <button className={styles.buttonSave} onClick={fecharModal}>
            <BsCheck />
          </button>
        </div>
      </div>
    </section>
  );
}
