import styles from "./Proposta.module.css";
/* import logomulti from "../../../assets/logo_multipoint.png";
import logoCplug from "../../../assets/logoCplug.png";
import { InputUser } from "../../../Context/InputUserContext";
import { add } from "date-fns"; */
import imgProposta from "../../../assets/imagemProposta.png";
import sistemaERP from "../../../assets/sistemaERP.png";

export function TemplatePropostaCplug() {
  /*   const {
    userInfo,
    cnpjUser,
    /*  city,
    estado,
    street,
    numberHouse,
    neighborhood,
    cep, 
    date,
    /* itenTable, 
  } = InputUser(); */

  //transformando a string digitada no input para Date()
  /*   const newDateValue = new Date(date);
  const newFormatDate = add(newDateValue, {
    days: 1,
  }); */
  //criando uma variavel com um ano a frente (pegando o valor da variavel acima)

  return (
    <aside id="content1">
      <div>
        <div>
          <img src={imgProposta} alt="" className={styles.imgProposta} />
        </div>

        <div className={styles.FirstTopic}>
          <strong>Nossa</strong>{" "}
          <strong className={styles.FirstTitleStyle}>Atuação</strong>
        </div>

        <div className={styles.slide1}>
          <div>
            <p>- Restaurantes</p>
            <p>- Bares</p>
            <p>- Pizzarias</p>
            <p>- Padarias</p>
            <p>- Food Trucks</p>
            <p>- Distribuidora de Bebidas</p>
          </div>
          <div>
            <p>- Açougues</p>
            <p>- Mercearias</p>
            <p>- Roupas e Acessórios</p>
            <p>- Varejo</p>
            <p>- Hamburguerias</p>
            <p>- Cafeterias</p>
          </div>
          <div>
            <p>- Material de Construção</p>
            <p>- Lojas de Calçados</p>
            <p>- Papelarias</p>
            <p>- Conveniências</p>
            <p>- Tabacarias</p>
            <p>- Quiosques</p>
          </div>
        </div>

        <div className={styles.slide2}>
          <div>
            <img src={sistemaERP} alt="" className={styles.sistemaERPImg} />
          </div>
          <div className={styles.textSlide2}>
            <div>
              <h3>
                Ferramenta completa para gerenciar empresas. Otimiza, agiliza e
                organiza todo processo de gestão, vendas e produção.
              </h3>
            </div>
            <ul>
              <li>Cadastros de clientes, produtos e fornecedores</li>
              <li>Controle de estoque</li>
              <li>Gestão financeira completa</li>
              <li>Notas Fiscais</li>
              <li>Controle de produção</li>
              <li>Relatórios</li>
            </ul>
          </div>
        </div>
      </div>
      {/*  <div>
        <h4 className={styles.topic}>
          <strong>
            São Caetano do Sul,{"  "}
            <span>{newFormatDate.toLocaleDateString()}</span>
          </strong>
        </h4>
        <section className={styles.view}>
          <div className={styles.boxAssinatura}>
            <p>CONTRATANTE</p>
            <p>{userInfo}</p>
            <p>{cnpjUser}</p>
          </div>
          <div className={styles.view}>
            <div className={styles.boxAssinatura}>
              <p>CONTRATADA</p>
              <p>DANIEL F DE ALCATARA EPP</p>
            </div>
          </div>
        </section>
      </div> */}
    </aside>
  );
}
