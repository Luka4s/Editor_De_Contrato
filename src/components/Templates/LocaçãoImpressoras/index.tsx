import styles from "../StylesTeamplates.module.css";
import logomulti from "../../../assets/logo_multipoint.png";
import { InputUser } from "../../../Context/InputUserContext";
import { add } from "date-fns";

export function TemplateLocacaoImpre() {
  const {
    userInfo,
    cnpjUser,
    city,
    estado,
    street,
    numberHouse,
    neighborhood,
    cep,
    date,
    itenTable,
  } = InputUser();

  //transformando a string digitada no input para Date()
  const newDateValue = new Date(date);
  const newFormatDate = add(newDateValue, {
    days: 1,
  });

  return (
    <aside className={styles.boxView} id="content1">
      <div>
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
          <h4 className={styles.title}>CONTRATO DE LOCAÇÃO DE IMPRESSORAS</h4>{" "}
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
          <strong>CONTRATANTE</strong>: Pessoa jurídica que adquiriu o software
          CPLUG, inscrito no CNPJ sob o nº <span>{cnpjUser}</span> ,Razão
          Social: {"  "} <span>{userInfo}</span>
          {"  "}com sede na cidade de <span>{city}</span>, Estado de{" "}
          <span>{estado}</span>, na rua <span>{street}</span>,{" "}
          <span>{numberHouse}</span> ,Bairro: <span>{neighborhood}</span>, CEP{" "}
          <span>{cep}</span>, Brasil, doravante denominada simplesmente de{" "}
          <strong>USUÁRIO</strong>.
        </p>

        <p className={styles.view}>
          As partes devidamente qualificadas, conforme dispõem seus contratos
          sociais, ora denominadas Contratante e Contratada, ajustam entre si, o
          contrato de locação de impressoras e outsourcing de impressão, que se
          regerá pela legislação pertinente e pelas cláusulas a seguir aduzidas:
        </p>
        <h4 className={styles.topic}>Cláusula Primeira – Do Objeto:</h4>
        <p className={styles.view}>
          O presente contrato tem por objeto a locação de 01 (hum) unidade de
          Multifuncional Laser monocromática com conexão de Rede, e fornecimento
          de suprimentos para impressão, tão somente cartuchos de toners e
          cilindros, não inclusos papeis e outros suprimentos. Franquia de
          Impressão mensal de 3.500 páginas, e cobrança excedente de R$ 0,05 por
          página adicional que exceder o limite da franquia.
        </p>
      </div>
      <div className={styles.quebrarPage}>
        <div>
          <h4 className={styles.topic}>
            Clausula Segunda – das responsabilidades da CONTRATANTE
          </h4>
        </div>
        <div className={styles.view}>
          <p className={styles.view}>
            A Contratante se torna responsável pelo equipamento locado, durante
            a vigência do contrato, contra furto, roubo, mal uso ou danos de
            origem elétrica que possam acarretar a não cobertura de garantia do
            equipamento pelo fabricante. Se responsabiliza também pelo correto
            uso do equipamento contribuindo com sua preservação e durabilidade,
            São consideradas práticas inadequadas e que justificam o mal uso do
            equipamento: Utilização de folhas reutilizadas: folhas já impressas,
            com dobras e pontas amassadas, folhas perfuradas e anteriormente
            fixadas com grampo.
          </p>
          <p className={styles.view}>
            1.2. A partir do momento em que o CONTRATANTE aceitar este TERMO, as
            disposições aqui constantes regerão a relação entre a CONTRATADO, o
            CONTRATANTE e o PARCEIRO, razão pela qual é recomendável que o
            CONTRATANTE imprima uma cópia deste documento para futura
            referência.
          </p>
          <h4 className={styles.topic}>
            Clausula Terceira – das responsabilidades da CONTRATADA
          </h4>
          <p className={styles.view}>
            A Contratada ficara obrigada a fornecer suporte técnico e manutenção
            para os equipamentos objeto desta locação, assim como fornecer
            insumos de impressão como toners e cilindros.
          </p>
          <h4 className={styles.topic}>
            Clausula Quarta – Do Valor e da Forma de Pagamento:
          </h4>
          <p className={styles.view}>
            A Contratante pagará a partir da data da assinatura do contrato, o
            valor de R$ 275,00 (duzentos e setenta e cinco reais) mensais, com
            vencimento para todo dia 05, iniciando em{" "}
            <span>{newFormatDate.toLocaleDateString()}</span>
          </p>
        </div>
      </div>
      <div>
        <h4 className={styles.topic}>Cláusula Quinta – Da Vigência:</h4>
        <p className={styles.view}>
          O prazo de vigência deste contrato será de 12 (doze) meses, com início
          na data de entrega do equipamento, renovados automaticamente por
          período igual, salvo comunicação antecipada pela não renovação, com o
          mínimo de 30 dias de antecedência do término desta vigência.
        </p>
      </div>
      <div>
        <h4 className={styles.topic}>Cláusula Sexta – Da Rescisão:</h4>
        <p className={styles.view}>
          O presente contrato poderá ser rescindido, mediante termo próprio, na
          ocorrência da seguinte situação:
        </p>
        <p className={styles.view}>
          1 - Do não cumprimento de quaisquer itens das Clausulas Segunda e
          Terceira.
        </p>
        <p className={styles.view}>
          2- Por escolha da Contratante, de forma antecipada, mediante o
          pagamento correspondente à 50% do saldo das parcelas remanescentes.
        </p>
        <p className={styles.view}>
          3 - Judicialmente, nos termos da legislação.
        </p>
      </div>
      <div>
        <h4 className={styles.topic}>
          Cláusula Sétima – Das cláusulas penais:
        </h4>
        <p className={styles.view}>
          8.1 A falta de pagamento de qualquer fatura em seu respectivo
          vencimento acarretará acréscimo de multa de 1% (hum porcento) sobre
          seu valor e juros moratórios de 0,33% ad (trinta e três décimos
          porcento ao dia) por dia de atraso.
        </p>
        <p className={styles.view}>
          8.2 A Contratada poderá acumular os encargos moratórios do item 8.1,
          com cessação da prestação dos serviços, objeto deste contrato até
          efetiva regularização dos pagamentos, independentemente de qualquer
          notificação judicial ou extrajudicial.
        </p>
      </div>
      <div>
        <h4 className={styles.topic}>
          Cláusula Oitava – Das cláusulas penais:
        </h4>
        <p className={styles.view}>
          A falta de pagamento de qualquer fatura em seu respectivo vencimento
          acarretará acréscimo de multa de 1% (hum porcento) sobre seu valor e
          juros moratórios de 0,33% ad (trinta e três décimos porcento ao dia)
          por dia de atraso.
        </p>
        <p className={styles.view}>
          Fica eleito o fórum da Comarca do município de São Caetano do Sul, com
          exclusão de qualquer outro pôr mais privilegiado que seja, para
          dirimir quaisquer dívidas ou dúvidas decorrentes do presente contrato.
        </p>
        <p className={styles.view}>
          E, por estarem assim ajustadas as partes assinam o presente contrato
          em duas vias de igual teor e para um só fim, na presença de duas
          testemunhas de tudo ciente.
        </p>
      </div>

      <div className={itenTable.length == 10 ? "" : styles.quebrarPage}>
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
      </div>
    </aside>
  );
}
