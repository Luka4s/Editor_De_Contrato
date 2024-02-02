/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useState } from "react";

interface IUserContext {
  userInfo: string;
  cnpjUser: string;
  isEditing: boolean;
  city: string;
  estado: string;
  date: number | undefined;
  itenTable: string[];
  contentIten: string;
  quantityItens: number;
  open: boolean;
  setUserInfo: (e: any) => void;
  setIsEditing: (e: any) => void;
  setCnpjUser: (e: any) => void;
  setCity: (e: any) => void;
  setEstado: (e: any) => void;
  setDate: (e: any) => void;
  setItenTable: (e: any) => void;
  setContentIten: (e: any) => void;
  setQuantityItens: (e: any) => void;
  setOpen: (e: any) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const InputUser = (): IUserContext => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Provider missing!");
  }
  return context;
};

/* function handleChangeCnpj(value: string) {
  const cnpjUser = value.replace(/\D/g, "");

  if (cnpjUser.length === 11) {
    return cnpjUser.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  return cnpjUser.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    "$1.$2.$3/$4-$5"
  );
} */

export function InputUserProvider({ children }: { children: ReactNode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [cnpjUser, setCnpjUser] = useState("");
  const [city, setCity] = useState("");
  const [estado, setEstado] = useState("");
  const [date, setDate] = useState();

  //define o Array da tabela
  const [itenTable, setItenTable] = useState([""]);
  //define o conteudo que vai dentro da tabela
  const [contentIten, setContentIten] = useState("");
  const [quantityItens, setQuantityItens] = useState(0);

  const [open, setOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        isEditing,
        cnpjUser,
        city,
        estado,
        date,
        contentIten,
        itenTable,
        open,
        quantityItens,
        setIsEditing,
        setUserInfo,
        setCnpjUser,
        setCity,
        setEstado,
        setDate,
        setItenTable,
        setContentIten,
        setOpen,
        setQuantityItens,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
