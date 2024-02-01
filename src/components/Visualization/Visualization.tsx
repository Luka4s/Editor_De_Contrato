/* eslint-disable react-refresh/only-export-components */
import styles from "./Visualization.module.css";
import logomulti from "../../assets/logo_multipoint.png";
import { InputUser } from "../../Context/InputUserContext";
import html2pdf from "html2pdf.js";
import { EditTable } from "../EditTable/EditTable";
import ReactDOM from "react-dom";
import { MyTable, Data } from "../Table/Table";
import Table from "rc-table";
import { ColumnsType } from "rc-table";
import { Modal } from "../Modal/Modal";

ReactDOM.render(<Table />, document.getElementById("root"));

export function handleUserClick() {
  const contentElement = document.getElementById("content1");

  const idsWithPageBreak = ["page-break"]; // Adicione os IDs após os quais deseja quebras de página

  const elements = contentElement!.children;

  Array.from(elements).forEach((element) => {
    const elementId = element.id;

    if (elementId && idsWithPageBreak.includes(elementId)) {
      const pageBreak = document.createElement("div");
      pageBreak.style.pageBreakBefore = "always";
      contentElement!.insertBefore(pageBreak, element.nextSibling);
    }
  });

  html2pdf(contentElement, {
    margin: 10,
    filename: "filename.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: {
      before: ".beforeClass",
      after: ["#page-break", "#after2"],
      avoid: "img",
    },
  }).then((pdf) => {
    pdf.save();
  });
}

export function Visualization() {
  const { userInfo, cnpjUser, city, estado, date, modalList, itenList } =
    InputUser();

  const columns: ColumnsType<Data> = [
    {
      title: "Quantidade",
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    {
      title: "Serviço",
      dataIndex: "age",
      key: "age",
      width: 100,
    },
  ];
  const data: Data[] = [{ name: itenList, key: "1" }];

  return (
    <div>
      <section className={styles.visualization}>
        <aside className={styles.boxView} id="content1">
          <div id="page-break">
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
              implantação, atendimento e treinamento do <strong>USUÁRIO</strong>
              , inscrito no CNPJ sob o nº 19.322.719/0001-77, Razão Social:
              DANIEL F DE ALCANTARA EPP com sede na cidade de São Caetano do
              Sul, Estado de São Paulo, na Alameda João Galego, nº 783, Bairro
              Santa Maria, CEP 09560340, Brasil, neste ato representada na forma
              de sua constituição social, doravante denominada simplesmente de{" "}
              <strong>CONTRATADA</strong>.
            </p>
            <p className={styles.view}>
              <strong>CONTRATANTE</strong>: Pessoa jurídica que adquiriu os
              serviços de INFRAESTRUTURA DE TI, inscrito no CNPJ sob o nº{" "}
              <text>{cnpjUser}</text> ,Razão Social: {"  "}{" "}
              <text>{userInfo}</text> {"  "}com sede na cidade de{" "}
              <text>{city}</text>, Estado de <text>{estado}</text>, na Rua Sete
              de Abril, nº264 , Bairro República, CEP 01044-000 , Brasil,
              doravante denominada simplesmente de <strong>USUÁRIO</strong>.
            </p>
            <p className={styles.view}>
              As partes devidamente qualiﬁcadas, conforme dispõem seus contratos
              sociais, ora denomidadas Contratante e Contratada, ajustam entre
              si, a prestação de serviços de manutenção de microcomputadores e
              periféricos, que se regerá pela legislação pertinente e pelas
              cláusulas a segui aduzidas:
            </p>
            <h4 className={styles.topic}>1 - OBJETO</h4>
            <p className={styles.view}>
              O objeto deste contrato é a prestação de serviços de suporte
              técnico em infraestrutura e gerenciamento dos recursos e ambiente
              de TI (Gestão de TI), com atendimento técnico remoto ilimitado a
              usuários, monitoramento de dispositivos, consultoria para projetos
              relacionados à estratégia de negócios do cliente e gestão da
              segurança da informação.
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

            <div className={styles.view}>
              <MyTable columns={columns} data={data} />
              {modalList.map((item) => {
                return (
                  <Modal key={item.key} content={item.content} open={false} />
                );
              })}
            </div>
            <div>
              <h4 className={styles.topic}>
                2.2 - DETALHAMENTO DO ESCOPO DE SERVIÇOS
              </h4>
            </div>
            <div className={styles.view}>
              <ul>
                <li>
                  Gestão e monitoramento dos dispositivos e usuários conforme
                  tabela de Escopo de Serviços;
                </li>
                <li>
                  Monitoramento de estações de trabalho e atualização dinâmica
                  do inventário de Hardware e Software;{" "}
                </li>
                <li>
                  Monitoramento 24/7 dos ativos de rede e estações de trabalho
                  com foco em manutenção preventiva, com geração de alertas em
                  caso de falhas críticas de hardware ou software;{" "}
                </li>
                <li>
                  Manutenções corretivas e preventivas de hardware nas estações
                  de trabalho e outro dispositivos conforme estabelecido na
                  proposta comercial. Não incluso troca de peças ou reparos
                  eletrônicos em circuitos, fontes e placas, ou despesas de
                  deslocamento até o local. Caso necessário, esses itens não
                  inclusos serão cobrados de maneira avulsa;
                </li>
                <li>
                  Suporte a aplicações usadas como colaboração empresarial e
                  sistemas operacionais para estações e servidores;
                </li>
                <li>
                  Atendimento ou suporte às soluções de terceiros, mediante
                  colaboração por parte dos provedores destas soluções,
                  estabelecendo uma relação de parceria para proporcioar ao
                  cliente maior segurança e estabilidade nos seus processos;{" "}
                </li>
                <li>
                  Consultoria operacional de gestão de tecnologia da informação
                  para novos projetos e/ou aquisição de novos hardwares e
                  softwares;
                </li>
                <li>
                  Treinamento operacional quando necessário, mediante
                  solicitação e programação;
                </li>
                <li>
                  Horas de atendimento interno para manutenção de equipamentos
                  (serviços realizações em laboratório e que não incluem custo
                  de deslocamento ou transporte dos equipamentos) conforme
                  proposta comercial;{" "}
                </li>
                <li>
                  Atendimento presencial mensal para manutenção preventiva com
                  duração conforme indicado na proposta comercial;{" "}
                </li>
                <li>
                  Atendimento presencial mensal para manutenção corretiva com
                  duração conforme indicado na proposta comercial;{" "}
                </li>
                <li>
                  Visitas corretivas adicionais ou avulsas serão taxas de acordo
                  com o informado na proposta comercial;{" "}
                </li>
                <li>
                  Reunião de gestão bimestral online, para discussão e análise
                  de necessidades geradas pelas estratégias do negócio do
                  cliente, para que o TI possa dar suporte às outras áreas
                  funcionais do negócio;{" "}
                </li>
                <li>
                  Atendimento remoto ou telefônico, para suporte técnico a
                  usuários conforme indicado na proposta comercial;{" "}
                </li>
                <li>
                  Atendimento: de segunda a sexta-feira das 09h00 às 18h00
                  horário de Brasília; Para chamados de manutenção corretiva
                  presencial, atendidos de segunda a sexta após as 18h00 e
                  sábado das 09h00 às 18h00 , será taxado em R$150,00 (cento e
                  cinquenta reais) a primeira hora e R$95,00 (noventa e cinco
                  reais) por hora adicional trabalhada, somado o custo de
                  deslocamento.
                </li>
                <li>
                  Para chamados de manutenção remota, atendidos de segunda a
                  sexta após as 18h00 e sabado das 09h00 às 18h00, será taxado
                  em R$35,00 (trinta e cinco reais) por hora trabalhada.{" "}
                </li>
                <li>
                  Para chamados de manutenção remota atendidos aos sabados após
                  as 18h00,domingos e feriados, será taxado em R$70,00 (setenta
                  reais) por hora trabalhada.{" "}
                </li>
                <li>
                  Prazo contratual de acordo com a proposta comercial e com
                  renovação automática.{" "}
                </li>
              </ul>
            </div>
          </div>
          <h4 className={styles.topic}>
            2.3 - DETALHAMENTO SERVIÇOS DE MANUTENÇÃO CORRETIVA E PREVENTIVA
          </h4>
          <div className={styles.view}>
            <ul>
              <li>
                A manutenção preventiva consiste na limpeza, restauração e
                lubriﬁcação dos equipamentos, a ﬁm de mantê-los em perfeitas
                condições de funcionamento;{" "}
              </li>
              <li>
                A manutenção corretiva consiste na reparação de dados
                apresentados pelos equipamentos, não sendo de responsabilidade
                da Contratada o fornecimento de peças para efetuar a reparação
                do dano. As peças necessárias para reparo dos equipamentos fora
                da garantia do fabricante, serão objeto de orçamentos,
                previamente encaminhados para aprovação do Contratante;
              </li>
              <li>
                Manutenções corretivas em impressoras, monitores e outros
                equiapementos não serão realizadas nas dependências do cliente,
                devendo ser encaminhadas ao laboratório para diagnostico e
                orçamento, sujeito à aprovação por parte do Contratante, exceto
                manutenções preventivas;{" "}
              </li>
              <li>
                No caso da necessidade de troca de peças e/ou retirada do
                equipamento para remessa ao laboratório para conserto, o
                contratante poderá solicitar a reposição temporária do
                equipamento através de locação do item. A Contratada deverá
                encaminhar previamente o orçamento ou tabela de locação à
                contratante que decidirá sobre a proposta;{" "}
              </li>
              <li>
                A instalação de conﬁguração de novos equipamentos adquiridos
                pela Contratante, sejam notebooks, impressoras ou desktops,
                conﬁguram como parte do contrate de suporte e manutenção e serão
                enquadrados como atendimento ou manutenção corretiva. em caso de
                outras soluções, deverá ser aberto um ticket para projeto.
              </li>
              <li>
                A manutenção será prestada somente por técnicos autorizados e
                credenciados pela Contratada.{" "}
              </li>
            </ul>
          </div>
          <h4 className={styles.topic}>
            2.4 - ACORDO DE NÍVEL DE SERVIÇOS (ANS/SLA)
          </h4>
          <div className={styles.view} id="page-break">
            <ul>
              <li>
                Atendimento telefônico e suporte remoto 1º Nível: atendimento em
                até 2h úteis, a partir da abertura do chamado;{" "}
              </li>
              <li>
                Atendimento local: atendimento em até 8h úteis, a partir do
                escalonamento do atendimento 1º Nível.{" "}
              </li>
              <li>
                Situações críticas: atendimento em até 4h úteis a partir do
                escalonamento do atendimento 1º Nível em caso de parada dos
                equipamentos críticos, como servidores e switches;
              </li>
              <li>
                Atendimento remoto: atendimento em até 2h úteis, a partir do
                escalonamento do atendimento 1º nível.{" "}
              </li>
              <li>
                Agendamento de visitas: deverá ser realizado com, no mínimo, 72h
                de antecedência.
              </li>
            </ul>
          </div>
          <h4 className={styles.topic}>3 - DAS EXCLUSÕES</h4>
          <div className={styles.view}>
            <p className={styles.view}>
              A Contratada se exime de prestar manutenção nos seguintes casos:{" "}
            </p>
            <ul>
              <li>
                Equipamentos de terceiros e colaboradores, que não façam parte
                do inventário de equipamentos do cliente, salvo autorização e
                requisição do responsável legal pela gestão do contrato.
              </li>
              <li>
                Reparos e instalações efetuados por terceiros sem prévia
                aprovação da Contratada ou acompanhamento de sua equipe técnica.{" "}
              </li>
            </ul>
          </div>
          <h4 className={styles.topic}>4 - DA VIGÊNCIA</h4>
          <p className={styles.view}>
            O presente contrato entrará em vigor em{"  "} <text>{date}</text>,
            por período de 12 (doze) meses, e será renovado automaticamente,
            salvo comunicação por escrito com 60 (sessenta) dias de antecedência
            à{"  "}
            <text>{date}</text>
          </p>
          <h4 className={styles.topic}>5 - DA RESCISÃO</h4>
          <p className={styles.view}>
            O presente contrato poderá ser rescindido em decorrência de:
          </p>
          <div className={styles.view}>
            <ul>
              <li>
                <strong>5.1</strong> - Infração a qualquer cláusula ou item
                deste contrato, mantida por prazo superior a 30 (trinta) dias,
                após o recebimento do comunicado por escrito da parte
                prejudicada à parte inadimplente. concordata, falência,
                liquidação judicial ou extrajudicial, intervenção de Órgão
                Governamental, dissolução ou qualquer forma de cessação de
                atividades de qualquer das partes. Transferência do contrato à
                terceiros sem a prévia concordância das partes. E caso ocorra a
                necessidade de transferência de contrato à terceiros, a
                Contratante deve informar por escrito, com 60 (sessenta) dias de
                antecedência a Contratada, aﬁm de manter os mesmos diretos e
                deveres contidos neste contrato.
              </li>
              <li>
                <strong>5.2</strong> - A rescisão antes do término previsto para
                o contrato, e sem a ocorrência do disposto no item 5.1 deverá
                ser comunicada com 90 dias de antecedência, período de carência
                para encerramento do contrato, sem ônus adicionais para a
                Contratante.
              </li>
            </ul>
          </div>
          <h4 className={styles.topic}>6 - PREÇO E CONDIÇÕES DE PAGAMENTO</h4>
          <p className={styles.view}>
            <strong>6.2</strong> - Na ﬁxação do preço não se incluem os
            tributos, impostos ou taxas Federais, Estaduais ou Municipais. A
            inclusão dos impostos será realizada no ato do faturamento e
            quaisquer alterações de alíquotas ou novos tributos, impostos ou
            taxas que venham a ser criadas, incidentes sobre os serviços
            objetivo deste contrato, constituirão encargos do Contratante e
            calculados sobre os preços então vigentes. Este item será objeto de
            renegociação, no caso de alteração na legislação.
          </p>
          <p className={styles.view}>
            <strong>6.3</strong> - Os preços objeto do presente contrato serão
            revisados anualmente, conforme permite a legislação, ou em períodos
            inferiores, de acordo com a variação do Índice Geral de Preços -
            Mercado divulgado pela Fundação Getúlio Vargas (IGPM/FVG), em
            conformidade com a legislação, e na sua falta ou impossibilidade de
            aplicação, por outro que venha a substituí-lo e que reﬂita a real
            inﬂação ocorrida no período ou, ainda, por qualquer outro
            determinado pelo Governo Federal, a ﬁm de manter o equilíbrio
            econômico e ﬁnanceiro desta prestação de serviços.
          </p>
          <p className={styles.view} id="page-break">
            <strong>6.4</strong> - Todo equipamento adicional que for adquirido
            durante a vigência deste instrumento, deverá ser informado à
            contratada para que seja incorporado ao presente contrato, assim
            como reajustado o valor do contrato nos itens contratados por
            usuário ou dispositivo conform tabela de deﬁnição de investimento.
          </p>
          <h4 className={styles.topic}>7 - DAS CLÁUSULAS PENAIS</h4>
          <p className={styles.view}>
            <strong>7.1</strong> - A falta de pagamento de qualquer fatura em
            seu respectivo vencimento acarretará acréscimo de multa de 2% (dois
            por cento) sobre seu valor, acrescido de juros de 1% ao mês.
          </p>
          <p className={styles.view}>
            <strong>7.2</strong> - A contratada poderá acumular os encargos
            moratórios do item 7.1, com cessação da prestação dos serviços,
            objeto deste contrato até efetiva regularização dos pagamentos,
            independentemente de qualquer notiﬁcação judicial ou extrajudicial.
            Fica eleito o fórum da Comarca da Capital do Estado de São Paulo,
            com exclusão de qualquer outro pôr mais privilegiado que seja, para
            dirimir quaisquer dívidas ou dúvidas decorrentes do presente
            contrato. E, por estarem assim ajustadas as partes assinam o
            presente contrato em duas vias de igual teor e para um só ﬁm, na
            presença de duas testemunhas de tudo ciente.
          </p>
          <h4 className={styles.topic}>
            <strong>
              São Caetano do Sul,{"  "} <strong>{date}</strong>
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
        </aside>
      </section>

      <EditTable />
    </div>
  );
}
