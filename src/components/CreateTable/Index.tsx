//import { InputUser } from "../../Context/InputUserContext";
import Style from "../CreateTable/CreateTable.module.css";
import React from 'react';
interface TableData {
  content: string;
  quantity: number;
  value: number;
}

document.getElementById('root')

export function CreateTable({ content, quantity, value }: TableData) {
  
  if(!content || !quantity || !value){
    return null;
  }else{
    return (
    <React.Fragment>
      <td className={Style.servico}>{content}</td>
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
