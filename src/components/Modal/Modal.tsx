import { InputUser } from "../../Context/InputUserContext";

export interface MyModal {
  open: boolean;
  content: string;
  key: number;
}
export function Modal({ content, key }: MyModal) {
  const { open } = InputUser();

  if (!open) {
    console.log("Deu certo aqui !");
    return (
      <div>
        {key}
        <div>{content}</div>
      </div>
    );
  } else {
    return null;
  }
}
