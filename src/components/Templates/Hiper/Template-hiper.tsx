import styles from "../Infraestrutura/Template-infra.module.css"
import logomulti from "../../../assets/logo_multipoint.png"
import { InputUser } from "../../../Context/InputUserContext";

export function TemplateHiper() {

  const {
    userInfo,
    cnpjUser,
    city,
    estado,
    street,
    numberHouse,
    neighborhood,
    cep,
    // date,
    // itenTable,
    // valueIten,
    // sumTotal,
    // totalContractValue,
  } = InputUser();
  

    return(
      <aside className={styles.boxView} id="content1">
      <div >
        <section className={styles.Header}>
          <div>
            <img src={logomulti} className={styles.logo} />
            <div className={styles.boxTextHeader}>
              <p>Multipoint It Services & Consulting</p>
              <p>CNPJ 19.322.719/0001-77</p>
              <p>(11) 2578-0699</p>
            </div>
          </div>
        </section>
        <div className={styles.view}>
          <h4 className={styles.title}>
            CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE INFRAESTRUTURA DE TI
          </h4>{" "}
          <br />
        </div>
        
        <p className={styles.view}>
          <strong>CONTRATADA</strong>: Pessoa jurídica responsável pela
          implantação, atendimento e treinamento do <strong>USUÁRIO</strong>,
          inscrito no CNPJ sob o nº 19.322.719/0001-77, Razão Social: DANIEL F
          DE ALCANTARA EPP com sede na cidade de São Caetano do Sul, Estado de
          São Paulo, na Alameda João Galego, nº 783, Bairro Santa Maria, CEP
          09560340, Brasil, neste ato representada na forma de sua constituição
          social, doravante denominada simplesmente de{" "}
          <strong>CONTRATADA</strong>.
        </p>
        <p className={styles.view}>
          <strong>CONTRATANTE</strong>: Pessoa jurídica que adquiriu os serviços
          de INFRAESTRUTURA DE TI, inscrito no CNPJ sob o nº{" "}
          <span>{cnpjUser}</span> ,Razão Social: {"  "} <span>{userInfo}</span>
          {"  "}com sede na cidade de <span>{city}</span>, Estado de{" "}
          <span>{estado}</span>, na <span>{street}</span>,{" "}
          <span>{numberHouse}</span> ,Bairro: <span>{neighborhood}</span>, CEP
          <span>{cep}</span>, Brasil, doravante denominada simplesmente de{" "}
          <strong>USUÁRIO</strong>.
        </p>
        <p className={styles.view}>
          As partes devidamente qualiﬁcadas, conforme dispõem seus contratos
          sociais, ora denomidadas Contratante e Contratada, ajustam entre si, a
          prestação de serviços de manutenção de microcomputadores e
          periféricos, que se regerá pela legislação pertinente e pelas
          cláusulas a segui aduzidas:
        </p>
        <h4 className={styles.topic}>1 - OBJETO</h4>
        <p className={styles.view}>
          O objeto deste contrato é a prestação de serviços de suporte técnico
          em infraestrutura e gerenciamento dos recursos e ambiente de TI
          (Gestão de TI), com atendimento técnico remoto ilimitado a usuários,
          monitoramento de dispositivos, consultoria para projetos relacionados
          à estratégia de negócios do cliente e gestão da segurança da
          informação.
        </p>
        <h4 className={styles.topic}>2 - ESCOPO</h4>
        <p className={styles.view}>
          A Contratada, na vigência deste contrato, obriga-se à prestação de
          serviços de suporte técnico em infraestrutura e gerenciamento dos
          recursos e ambiente de TI, de acordo com os Termos Comerciais e
          Técnicos estabelecidos incluindo o Acordo de Nível de Serviços
          (ANS/SLA), conforme deﬁnições abaixo:
        </p>
      </div>
      <div id="view">
        <h4 className={styles.topic}>
          2.1 - TABELA DE SERVIÇOS E RECURSOS CONTRATADOS
        </h4>
      </div>
      </aside>
    )
}