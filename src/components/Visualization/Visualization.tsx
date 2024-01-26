import html2canvas from "html2canvas";
import { InputUser } from "../../Context/InputUserContext";
import styles from "./Visualization.module.css";
import jsPDF from "jspdf";

export function Visualization() {
  function handleUserClick() {
    const test = document.getElementById("content1");

    const doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
      putOnlyUsedFonts: true,
    });

    html2canvas(test!).then((canvas) => {
      const imgData = canvas.toDataURL("ok");

      /*  const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight(); */
      doc.addImage(imgData, "PDF", 80, 30, -90, -90, undefined, "NONE");
      doc.setFontSize(8);
      doc.setDisplayMode(3, "continuous");

      doc.save("test.pdf");
    });

    console.log("Clicou");
  }

  const { userInfo, cnpjUser } = InputUser();

  return (
    <div>
      <section className={styles.visualization}>
        <aside className={styles.boxView}>
          <div id="content1">
            <h4 className={styles.title}>
              CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE INFRAESTRUTURA DE TI
            </h4>
            <p className={styles.view}>
              <br />
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
              <strong>{cnpjUser}</strong>, Razão Social:{" "}
              <strong>{userInfo}</strong> com sede na cidade de São Paulo ,
              Estado de São Paulo , na Rua Sete de Abril, nº264 , Bairro
              República, CEP 01044-000 , Brasil, doravante denominada
              simplesmente de <strong>USUÁRIO</strong>.
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
            <h4 className={styles.topic}>
              2.1 - TABELA DE SERVIÇOS E RECURSOS CONTRATADOS
            </h4>
            <div className={styles.view}>
              <table>
                <thead>
                  <tr>
                    <th>Quantidade</th>
                    <th>Item</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10 UN.</td>
                    <td>Dispositivo/Usuário</td>
                  </tr>
                  <tr>
                    <td>1 UN.</td>
                    <td>Servidor-controlador de domínio AC/DC</td>
                  </tr>
                  <tr>
                    <td>1 UN.</td>
                    <td>Gestão de Firewall</td>
                  </tr>
                  <tr>
                    <td>5 UN.</td>
                    <td>Deslocamento mensal</td>
                  </tr>
                  <tr>
                    <td>2 HRS</td>
                    <td>Preventiva mensal</td>
                  </tr>
                  <tr>
                    <td>6 HRS</td>
                    <td>Corretiva mensal</td>
                  </tr>
                  <tr>
                    <td>10 HRS</td>
                    <td>Serviços internos</td>
                  </tr>
                  <tr>
                    <td>1 UN</td>
                    <td>Reunião de gestão trimestral</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Segunda Pagina */}

          <div id="content2">
            <h4 className={styles.topic}>
              2.2 - DETALHAMENTO DO ESCOPO DE SERVIÇOS
            </h4>
            <div>
              <ul className={styles.view}>
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
                  FormaAtendimento ou suporte às soluções de terceiros, mediante
                  colaboração por parte dos provedores destas soluções,
                  estabelecendo uma relação de parceria para proporcioar ao
                  cliente maior segurança e estabilidade nos seus processos;{" "}
                </li>
                <li>
                  Consultoria operacional de gestão de tecnologia da informação
                  para novos projetos e/ou aquisição de novos hardwares e
                  softwares;
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
      <div>
        <button onClick={handleUserClick}>Download PDF</button>
      </div>
    </div>
  );
}
