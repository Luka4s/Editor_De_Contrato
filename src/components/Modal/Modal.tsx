import styles from "./Modal.module.css";
import { BsPlus } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { BsEraser } from "react-icons/bs";
import { InputUser } from "../../Context/InputUserContext";
import { MouseEvent, useState } from "react";
import React from "react";

export function MyModal() {
  const {
    itenTable,
    contentIten,
    modalVisible,
    //inputTextValue,
    // valorTotal,
    setValorTotal,
    setContentIten,
    //  setQuantityItens,
    // setValueIten,
    setItenTable,
    setModalVisible,
    setSumTotal,
  } = InputUser();

  const [quantityItens, setQuantityItens] = useState([0]);
  const [valueIten, setValueIten] = useState([0]);
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputValueIten, setInputValueIten] = useState("");

  const fecharModal = () => {
    setModalVisible(true);
  };

  function handleAddClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (contentIten != "" || null) {
      const quantity = parseInt(inputQuantity, 10) || 0;
      const value = parseInt(inputValueIten, 10) || 0;

      setQuantityItens([...quantityItens, quantity]);
      setValueIten([...valueIten, value]);
      setInputQuantity("");
      setInputValueIten("");

      setItenTable([
        ...itenTable,
        {
          quantity: quantity,
          content: contentIten,
          value: value,
        },
      ]);
    } else {
      alert("Preencha todos os campos");
    }
  }

  React.useEffect(() => {
    const total = quantityItens.reduce((acc, quantity, index) => {
      const value = valueIten[index] || 0;
      return acc + quantity * value;
    }, 0);
    setSumTotal(total);
  }, [quantityItens, valueIten, setSumTotal]);

  const handleRemoveClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newItenTable = [...itenTable];
    newItenTable.pop();
    setItenTable(newItenTable);
  };

  return modalVisible ? null : (
    <section className={styles.sectionModal}>
      <div className={styles.boxModal}>
        <h3 className={styles.title}>
          Preencha os campos para inserir na tabela:
        </h3>
        <label htmlFor="input1">Quantidade</label>
        <input
          type="text"
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
          value={inputValueIten}
          onChange={(e) => {
            setInputValueIten(e.target.value);
          }}
        />

        <label htmlFor="input3">Valor Total</label>
        <input
          type="text"
          id="input4"
          onChange={(e) => {
            setValorTotal(e.target.value);
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
