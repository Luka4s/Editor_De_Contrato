//import { InputUser } from "../../Context/InputUserContext";
import Style from "../CreateTable/CreateTable.module.css";
interface TableData {
  content: string;
  quantity: number;
}

document.getElementById('root')

export function CreateTable({ content, quantity }: TableData) {
  return (
    <div>
      <div className={Style.ItensService}>
        <div className={Style.quantity}>
          <span>{quantity}</span>
        </div>
        <div className={Style.content}>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
}
