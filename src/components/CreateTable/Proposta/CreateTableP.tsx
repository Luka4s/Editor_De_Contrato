import style from "../CreateTable.module.css";
import React from "react";
interface TableData {
  content: string;
  quantity: number;
  value: number;
  product: string;
}

document.getElementById("root");

export function CreateTableP({ content, quantity, value, product }: TableData) {
  if (!content || !quantity || !value || !product) {
    return null;
  } else {
    return (
      <React.Fragment>
        <td className={style.servico}>{product}</td>
        <td className={style.quantidade}>{content}</td>
        <td className={style.quantidade}>{quantity}</td>
        <td className={style.valor}>
          <div className={style.value}>
            <span>R$</span>
            {value}
          </div>
        </td>
      </React.Fragment>
    );
  }
}
