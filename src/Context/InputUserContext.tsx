/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useState } from "react";

interface IUserContext {
  userInfo: string;
  cnpjUser: string;
  isEditing: boolean;
  city: string;
  estado: string;
  street: string;
  neighborhood: string;
  numberHouse: number;
  cep: number;
  date: number | undefined;
  itenTable: string[];
  contentIten: string;
  quantityItens: number[];
  valueIten: number[];
  modalVisible: boolean;
  inputTextValue: string;
  inputInfra: boolean;
  sumTotal: number;
  totalContractValue: string;
  switchInfra: boolean;
  switchSistema: boolean;
  switchHiper: boolean;
  setUserInfo: (e: any) => void;
  setIsEditing: (e: any) => void;
  setCnpjUser: (e: any) => void;
  setCity: (e: any) => void;
  setEstado: (e: any) => void;
  setStreet: (e: any) => void;
  setNumberHouse: (e: any) => void;
  setNeighborhood: (e: any) => void;
  setCep: (e: any) => void;
  setDate: (e: any) => void;
  setItenTable: (e: any) => void;
  setContentIten: (e: any) => void;
  setQuantityItens: (e: any) => void;
  setValueIten: (e: any) => void;
  setModalVisible: (e: any) => void;
  setInputTextValue: (e: any) => void;
  setSumTotal: (e: any) => void;
  setTotalContractValue: (e: any) => void;
  setInputInfra: (e: any) => void;
  setSwitchInfra: (e: any) => void;
  setSwitchSistema: (e: any) => void;
  setSwitchHiper: (e: any) => void;
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
  //Inputs do Usuario
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [cnpjUser, setCnpjUser] = useState("");
  const [city, setCity] = useState("");
  const [estado, setEstado] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [numberHouse, setNumberHouse] = useState(0);
  const [cep, setCep] = useState(0);
  const [date, setDate] = useState();

  //define o Array da tabela
  const [itenTable, setItenTable] = useState([""]);

  //define o conteudo que vai dentro da tabela
  const [contentIten, setContentIten] = useState("");
  const [quantityItens, setQuantityItens] = useState([0]);

  //Pegar o valor desse array para utilizar no reduce
  const [valueIten, setValueIten] = useState([0]);

  //Input que controla o valor digitado na coluna valor
  const [inputTextValue, setInputTextValue] = useState("");

  //Valor da soma total dos valores
  const [sumTotal, setSumTotal] = useState(0);

  //Valor total do contrato
  const [totalContractValue, setTotalContractValue] = useState("");

  //Modal
  const [modalVisible, setModalVisible] = useState(true);

  //Inputs infra
  const [inputInfra, setInputInfra] = useState(false);

  //Switch infra proposta
  const [switchInfra, setSwitchInfra] = useState(false);

  //Switch sistemas
  const [switchSistema, setSwitchSistema] = useState(false);

  //Switch hiper
  const [switchHiper, setSwitchHiper] = useState(false);

  

  return (
    <UserContext.Provider
      value={{
        userInfo,
        isEditing,
        cnpjUser,
        city,
        estado,
        street,
        neighborhood,
        numberHouse,
        cep,
        date,
        contentIten,
        itenTable,
        quantityItens,
        valueIten,
        modalVisible,
        inputTextValue,
        inputInfra,
        sumTotal,
        totalContractValue,
        switchInfra,
        switchSistema,
        switchHiper,
        setIsEditing,
        setUserInfo,
        setCnpjUser,
        setCity,
        setEstado,
        setStreet,
        setNeighborhood,
        setNumberHouse,
        setCep,
        setDate,
        setItenTable,
        setContentIten,
        setQuantityItens,
        setValueIten,
        setModalVisible,
        setInputTextValue,
        setSumTotal,
        setTotalContractValue,
        setInputInfra,
        setSwitchInfra,
        setSwitchSistema,
        setSwitchHiper,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
