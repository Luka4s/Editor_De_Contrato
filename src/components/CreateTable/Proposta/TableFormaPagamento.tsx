import Style from "../CreateTable/CreateTable.module.css";
import React from "react";
interface TableData {
  content: string;
  quantity: number;
  value: number;
  qtdParcela: number;
  formaPgto: string;
  dataVenc1P: string;
  prazoPgto: string;
}

document.getElementById("root");

export function CreateTablePagamento({
  qtdParcela,
  quantity,
  value,
  formaPgto,
  prazoPgto,
  dataVenc1P,
  content,
}: TableData) {
  if (!content || !quantity || !value) {
    return null;
  } else {
    return (
      <React.Fragment>
        <td className={Style.servico}>{value}</td>
        <td className={Style.quantidade}>{qtdParcela}</td>
        <td className={Style.quantidade}>{qtdParcela}</td>
      </React.Fragment>
    );
  }
}

{
  /* <td className={Style.valor}>
  <div className={Style.value}>
    <span>R$</span>
    {value}
  </div>
</td> */
}
