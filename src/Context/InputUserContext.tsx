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
  valueIten: number;
  modalVisible: boolean;
  setUserInfo: (e: any) => void;
  setIsEditing: (e: any) => void;
  setCnpjUser: (e: any) => void;
  setCity: (e: any) => void;
  setEstado: (e: any) => void;
  setDate: (e: any) => void;
  setItenTable: (e: any) => void;
  setContentIten: (e: any) => void;
  setQuantityItens: (e: any) => void;
  setValueIten: (e: any) => void;
  setModalVisible: (e: any) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const InputUser = (): IUserContext => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Provider missing!");
  }
  return context;
};



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
  const [quantityItens, setQuantityItens] = useState(null);
  
  const [valueIten, setValueIten] = useState(null);
  //Modal
  const [modalVisible, setModalVisible] = useState(true);

  
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
        quantityItens,
        valueIten,
        modalVisible,
        setIsEditing,
        setUserInfo,
        setCnpjUser,
        setCity,
        setEstado,
        setDate,
        setItenTable,
        setContentIten,
        setQuantityItens,
        setValueIten,
        setModalVisible,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
