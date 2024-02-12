//import { InputUser } from "../../Context/InputUserContext";
import Style from "../CreateTable/CreateTable.module.css";
interface TableData {
  content: string;
  quantity: number;
  value: number;
}

document.getElementById('root')

export function CreateTable({ content, quantity, value }: TableData) {
  
  return (
    <div>
      <div className={Style.ItensService}>
        <div className={Style.quantity}>
          <span>{quantity}</span>
        </div>
        <div className={Style.content}>
          <span>{content}</span>
        </div>
        <div className={Style.value}>
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
}
