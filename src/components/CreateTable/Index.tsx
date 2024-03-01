//import { InputUser } from "../../Context/InputUserContext";
import Style from "../CreateTable/CreateTable.module.css";
import React, { Key } from "react";
export interface TableData {
  key: Key;
  content: string;
  quantity: number;
  value: string;
}

document.getElementById("root");

export function CreateTable({ content, quantity, value }: TableData) {
  if (!content || !quantity || !value) {
    return null;
  } else {
    return (
      <React.Fragment>
        <td className={Style.servico}>
          <div className={Style.alignUn}>
            {content}
            <select className={Style.select}>
              <option value="UN">UN</option>
              <option value="HR">HR</option>
            </select>
          </div>
        </td>
        <td className={Style.quantidade}>{quantity}</td>
        <td className={Style.valor}>
          <div className={Style.value}>
            <span>R$</span>
            {value}
          </div>
        </td>
      </React.Fragment>
    );
  }
}
