/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import style from "./TableCplug.module.css";

export function SecondTableCplug() {
  /* Utilizar esses estados caso queira tornar o valor de desconto dinamico */
  /*   const [valueDesc, setValueDesc] = useState(12.28);
  const [descReal, setDescReal] = useState(""); */

  /* Funcção que calcula o valor total com base da porcentagem do desconto */
  /*   function handleDesc(e: any) {
    e.preventDefault();
    const inNumber = Number(valueDesc);
    const newValueDesc = (inNumber / 100) * valueArray;
    const newValueTotal = valueArray - newValueDesc;
    const newFormatValueTotal = newValueTotal.toFixed(2);
    newFormatValueTotal.replace(".", ",");

    setDescReal(newFormatValueTotal);
    console.log(inNumber);
    console.log(newValueDesc);
  } */
  /*   const valueDesc = 12.28; */
  /*   const desc = 435.01; */
  /*   const descReal = desc.toFixed(2); */
  /*descReal.replace(".", ",");
  const array = [253.65, 28.5, 85.5, 28.5, 28.5, 28.5,  82.65,  42.75];
  const valueArray = array.reduce((acc, att) => acc + att, 0); 
  */
  const [PcContent, setPcContent] = useState("ideal");

  return (
    <>
      <div className={style.bodyPage}>
        <table className={style.CplugTable}>
          <h2>Módulos contratados</h2>
          <thead className={style.tableThead}>
            <td>
              <h3>Planos Cplug</h3>
            </td>
            <td>
              <h3>Quantidade</h3>
            </td>
          </thead>
          <tbody className={style.firtTbodyTable}>
            <td>
              <tr>
                <input
                  type="text"
                  value={PcContent}
                  onChange={(e) => {
                    setPcContent(e.target.value);
                  }}
                />
              </tr>
            </td>
            <td>
              <tr>
                <span>
                  <input type="number" name="" id="" />
                </span>
              </tr>
            </td>
          </tbody>
          <thead className={style.tableThead}>
            <td>
              <tr>
                <h3>Módulos adicionais</h3>
              </tr>
            </td>
            <td>
              <tr>
                <h3>Quantidade</h3>
              </tr>
            </td>
          </thead>
          <tbody className={style.firtTbodyTable}>
            <td>
              <tr>Produção</tr>
              <tr>Hub Delivery</tr>
              <tr>Estoque em Grade</tr>
              <tr>Delivery</tr>
              <tr>Controle de mesas</tr>
              {/* <tr>Facilita NFE</tr> */}
            </td>
            <td>
              <tr>
                <span>
                  <input type="number" name="" id="" />
                </span>
              </tr>
              <tr>
                <span>
                  <input type="number" name="" id="" />
                </span>
              </tr>
              <tr>
                <span>
                  <input type="number" name="" id="" />
                </span>
              </tr>
              <tr>
                <span>
                  <input type="number" name="" id="" />
                </span>
              </tr>
              <tr>
                <span>
                  <input type="number" name="" id="" />
                </span>
              </tr>
              {/* <tr>
                <span> <input type="number" name="" id="" /></span>
              </tr> */}
            </td>
          </tbody>
          <thead className={style.tableThead}>
            <td>
              <tr>
                <h3>Aplicativos</h3>
              </tr>
            </td>
          </thead>
          <tbody className={style.firtTbodyTable}>
            <td>
              <tr>Aplicativo Real Time</tr>
            </td>
            <td>
              <tr>
                <span>
                  <input type="number" name="" id="" />
                </span>
              </tr>
            </td>
          </tbody>
          <tfoot className={style.firtTFooterTable}>
            <td>
              <tr>Total:</tr>
              <tr>Total com desconto do plano anual:</tr>
              <tr>Vencimento da primeira parcela:</tr>
            </td>
            <td>
              <tr>
                <span>
                  <input
                    type="number"
                    name=""
                    id=""
                    className={style.inputValueTotal}
                  />
                </span>
              </tr>
              <tr>
                <div>
                  <span>
                    <input
                      type="number"
                      name=""
                      id=""
                      className={style.inputValueTotal}
                    />
                  </span>
                </div>
              </tr>
              <tr>
                <div>
                  <span>
                    <input
                      type="text"
                      name=""
                      id=""
                      className={style.inputValueTotal}
                    />
                  </span>
                </div>
              </tr>
            </td>
          </tfoot>
        </table>
        {/*  <form onSubmit={handleDesc}>
          <input
            type="text"
            name="desconto"
            value={valueDesc}
            onChange={(e) => {
              setValueDesc(e.target.value);
            }}
          />
          <button type="submit">Calcular</button>
        </form> */}
      </div>
    </>
  );
}
