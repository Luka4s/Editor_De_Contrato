/* eslint-disable no-irregular-whitespace */
import styles from "../Infraestrutura/Template-infra.module.css";
import styleTable from "../Hiper/tableHiper.module.css";
import logomulti from "../../../assets/logo_multipoint.png";
import logoHiper from "../../../assets/logo_Hiper.svg";
import { InputUser } from "../../../Context/InputUserContext";
//import { CreateTable } from "../../CreateTable/Index";
import { add } from "date-fns";
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
    date,
    /*  itenTable,
    sumTotal,
    linesTable, */
  } = InputUser();

  //transformando a string digitada no input para Date()
  const newDateValue = new Date(date);
  const newFormatDate = add(newDateValue, {
    days: 1,
  });

  //criando uma variavel com um ano a frente (pegando o valor da variavel acima)
  /* const oneMoreYear = add(date, {
    days: 1,
    years: 1,
  }); */

  return (
    <aside className={styles.boxView} id="content1">
      <div>
        <section className={styles.Header}>
          <div>
            <img
              src={logomulti}
              className={styles.logo}
              alt="Logo MultiPoint"
            />
            <img
              src={logoHiper}
              className={styles.logoHiper}
              alt="Logo Hiper"
            />
            <div className={styles.boxTextHeader}>
              <p>Multipoint It Services & Consulting</p>
              <p>CNPJ 19.322.719/0001-77</p>
              <p>(11) 2578-0699</p>
            </div>
          </div>
        </section>
        <div className={styles.view}>
          <h4 className={styles.title}>CONTRATO HIPER</h4> <br />
        </div>
        <h4 className={styles.topic}>TERMO DE USO</h4>
        <p className={styles.view}>
          HIPER SOFTWARE S.A, pessoa jurídica de direito privado, inscrita no
          CNPJ/MF sob o nº 12.605.982/0001-24, com sede na cidade de Brusque,
          Estado de Santa Catarina, Av Getúlio Vargas, Nr 61, Bloco 01, Vila
          Schlösser, Bairro Centro 2, CEP: 88353-900, doravante denominada
          simplesmente “HIPER”, única e exclusiva proprietária do software
          denominado Hiper (ora em diante simplesmente “Aplicativo”), das
          marcas, nomes e do domínio http://www.hiper.com.br associados à marca
          HIPER.
        </p>

        <p className={styles.view}>
          <strong>CONTRATANTE:</strong> Pessoa jurídica que adquiriu o software
          HIPER, inscrito no CNPJ sob o nº <span>{cnpjUser}</span>, Razão Social
          <span>{userInfo}</span> com sede na cidade de <span>{city}</span> ,
          Estado de <span>{estado}</span>,na rua <span>{street}</span>, nº{" "}
          <span>{numberHouse}</span> bairro <span>{neighborhood}</span>, CEP{" "}
          <span>{cep}</span>, Brasil, doravante denominada simplesmente de
          CONTRATANTE. om
        </p>
        <p className={styles.view}>
          <strong>CONTRATADA:</strong> Pessoa jurídica responsável pela
          implantação, atendimento e treinamento do USUÁRIO, inscrito no CNPJ
          sob o nº <strong>19.322.719/0001-77</strong>, Razão Social:{" "}
          <strong>DANIEL F DE ALCANTARA EPP</strong> com sede na cidade de{" "}
          <strong>SÃO CAETANO DO SUL</strong>, Estado de{" "}
          <strong>SÃO PAULO</strong>, na <strong>RUA JOANA ANGÉLICA</strong>, nº{" "}
          <strong>254</strong>, Bairro <strong>BARCELONA</strong>, CEP{" "}
          <strong>09551-050</strong>, Brasil, neste ato representada na forma de
          sua constituição social, doravante denominada simplesmente de
          CONTRATADA.
        </p>
        <h4 className={styles.topic}>DAS DEFINIÇÕES</h4>
        <p className={styles.view}>
          Os termos a seguir constantes neste <strong>TERMO</strong> terão o
          significado estabelecido abaixo, seja no plural ou no singular, sempre
          que usados em letras maiúsculas:
        </p>
        <h4 className={styles.topic}>PORTAL:</h4>
        <p className={styles.view}>
          significa o local onde o Aplicativo será disponibilizado para acesso
          do USUÁRIO, cujo endereço eletrônico é o seguinte: www.hiper.com.br;
        </p>
        <h4 className={styles.topic}>APLICATIVO:</h4>
        <p className={styles.view}>
          significa o software de propriedade exclusiva da HIPER, cujas
          funcionalidades e serviços estão disponibilizados no Portal.
        </p>
      </div>
      <div>
        <div className={styles.quebrarPage}>
          <h4 className={styles.topic}>INFORMAÇÕES:</h4>
        </div>
        <p className={styles.view}>
          qualquer informação disponibilizada pelo <strong>CONTRATANTE</strong>{" "}
          que o identifique junto a <strong>HIPER</strong>, tais como: razão
          social/nome, CNPJ/CPF, endereço, número de telefone, fax, e-mail,
          número de documentos, etc. <strong>CONTRATADO:</strong> pessoa
          jurídica responsável pela implantação, atendimento e treinamento do{" "}
          <strong>CONTRATANTE</strong>.
        </p>
        <h4 className={styles.topic}>PERÍODO DE TRIAL:</h4>
        <p className={styles.view}>
          período de teste disponibilizado ao <strong>CONTRATANTE</strong> antes
          da contratação.
        </p>
        <h4 className={styles.topic}>HORÁRIO COMERCIAL:</h4>
        <p className={styles.view}>
          Compreendido de segundas às quintas-feiras, das 8:00h as 18:00h e
          sextas-feiras das 8h às 17h, horário de Brasília, exceto feriados
          nacionais ou municipais do local da sede da{" "}
          <strong>CONTRATADO</strong> ou do <strong>PARCEIRO</strong>.
        </p>
        <h4 className={styles.topic}>PROPOSTA COMERCIAL:</h4>
        <p className={styles.view}>
          documento enviado ao <strong>CONTRATANTE</strong> com preços,
          condições de pagamento, detalhamento do produto contratado e
          implantação que faz parte do presente <strong>TERMO DE USO</strong>.
          Em caso de contradição entre a proposta comercial e o presente termo,
          prevalece as disposições da proposta comercial.
        </p>
        <h4 className={styles.topic}>IMPLANTAÇÃO:</h4>
        <p className={styles.view}>
          processo de parametrização e treinamento para uso do aplicativo
          detalhado na PROPOSTA COMERCIAL.
        </p>
        <h4 className={styles.topic}>1 -DECLARAÇÃO DE VONTADE</h4>
        <p className={styles.view}>
          1.1. O CONTRATANTE DECLARA TER CIÊNCIA DOS DIREITOS E OBRIGAÇÕES
          DECORRENTES DO PRESENTE TERMO, CONSTITUINDO ESTE INSTRUMENTO O ACORDO
          COMPLETO ENTRE AS PARTES. DECLARA, AINDA, TER LIDO, COMPREENDIDO E
          ACEITO TODOS OS TERMOS E CONDIÇÕES DESTE INSTRUMENTO.
        </p>
        <p className={styles.view}>
          1.2. A partir do momento em que o CONTRATANTE aceitar este TERMO, as
          disposições aqui constantes regerão a relação entre a CONTRATADO, o
          CONTRATANTE, razão pela qual é recomendável que o CONTRATANTE imprima
          uma cópia deste documento para futura referência.
        </p>
        <p className={styles.view}>
          1.3. O CONTRATANTE se declara ciente de que as operações que
          corresponderem à aceitação de determinadas opções serão registradas
          nos bancos de dados da CONTRATADA,juntamente com a data e hora em que
          o aceite foi manifestado pelo CONTRATANTE, podendo tal informação ser
          utilizada como prova da aceitação da opção pelo CONTRATANTE
          independentemente de outra formalidade.
        </p>
        <p className={styles.view}>
          1.4. As informações referentes à data e hora de acesso e ao endereço
          de protocolo de internet utilizado pelo <strong>CONTRATANTE</strong>{" "}
          para acessar o Portal ou o Aplicativo permanecerão armazenadas pela
          <strong>HIPER</strong> por, no mínimo, 6 (meses) a contar da data de
          cada acesso realizado, independentemente do término da relação
          jurídica e comercial entre a <strong>HIPER</strong> e o{" "}
          <strong>CONTRATANTE</strong>, em cumprimento ao disposto no Artigo 15
          da Lei nº 12.965/2014.
        </p>
        <h4 className={styles.topic}> 2 - RAZÕES DO CONTRATO:</h4>
        <p className={styles.view}>
          <strong>CONSIDERANDO</strong>, que a empresa <strong>UNI4</strong>{" "}
          deseja comercializar em todo território nacional, por meio de Parceiro
          Comercial devidamente credenciado, a licença de uso do programa de
          informática denominado “Sistema Hiper”, o qual foi criado como solução
          empresarial que une automação comercial com ferramenta de gestão,
          direcionada a estabelecimentos varejistas de pequeno e médio porte;
        </p>
        <p>
          <strong>CONSIDERANDO</strong>, que o <strong>CONTRATADO</strong> se
          trata de parceiro credenciado para promover a comercialização da
          licença de uso do referido sistema, bem como, por meio de
          profissionais devidamente habilitados, oferecer diretamente aos
          clientes finais serviços de suporte e manutenção do objeto de venda;{" "}
          <strong>CONSIDERANDO</strong>, que a ora <strong>CONTRATANTE </strong>
          deseja adquirir a licença de uso do “Sistema Hiper”, bem ainda, que
          lhe seja oferecido suporte técnico e manutenção do objeto de venda por
          parte do CONTRATADO, por meio de profissionais devidamente
          habilitados, firmam as partes o presente instrumento, sob as condições
          descritas adiante:
        </p>
        <h4 className={styles.topic}>3 - NOMENCLATURAS:</h4>
        <p className={styles.view}>
          <strong>I - PROGRAMA:</strong>programa/sistema de informática
          denominado “Sistema Hiper”, integralmente desenvolvido pela UNI4 para
          o uso de clientes finais – empresas de pequeno e médio porte de que
          desejam aumentar sua produtividade e segurança na execução dos
          trabalhos -, bem como o manual de usuário, manuais de operações,
          informações técnicas complementares e materiais diversos, tais como
          cartões de referências, folders, etc.
        </p>
        <p className={styles.view}>
          <strong>II - INSTALAÇÃO:</strong>forma técnica profissional de
          preparar bases de dados, testar, preparar os módulos existentes do
          programa para funcionar e realizar as necessárias conexões e acionar
          os necessários comandos para deixar o <strong>PROGRAMA</strong> em
          estado de funcionamento no equipamento de informática.
        </p>
        <p className={styles.view}>
          <strong>III – TREINAR/TREINAMENTO:</strong> compreende-se como
          manutenção os serviços consistentes em manter atualizadas as funções
          existentes nos módulos do <strong>PROGRAMA</strong>, com relação às
          variáveis normalmente alteradas por legislação ou quaisquer outras
          causas externas exigidas por determinação governamental, bem como
          fornecer as novas versões dos “Sistema Hiper” que venham a ser
          liberadas, desde que contenham alterações, acréscimos de rotina ou
          melhoria de desempenho.
        </p>
        <p className={styles.view}>
          <strong>IV – MANUTENÇÃO:</strong> orientar o cliente a usar
          corretamente o <strong>PROGRAMA</strong>.
        </p>
        <p className={styles.view}>
          <strong> V – SUPORTE:</strong> Compreende-se como suporte os serviços
          de apoio e orientação exclusivamente sobre os módulos do{" "}
          <strong>PROGRAMA</strong>, quanto ao funcionamento dos seus módulos
          objetivando seu melhor aproveitamento, esclarecendo dúvidas
          operacionais através de ligações telefônicas, e-mails e demais
          modalidades de contato virtual.
        </p>
        <h4 className={styles.topic}>4 - DO OBJETO CONTRATUAL</h4>
        <p className={styles.view}>
          Cláusula primeira: Pelo presente instrumento, a{" "}
          <strong>CONTRATADA</strong> formaliza a cessão da licença de uso do
          <strong>PROGRAMA</strong> em favor do <strong>Cliente</strong>, bem
          como demais componentes do produto, sob o modelo aluguel, pelo período
          de 12 meses.
        </p>
        <p className={styles.view}>
          <strong>Parágrafo único:</strong> As partes acordam que a relação
          comercial se restringe somente entre o{" "}
          <strong>Parceiro Comercial</strong> e o <strong>Cliente</strong>,
          isentando a <strong>UNI4</strong> de qualquer responsabilidade
          consumerista, bem como de prestação de serviço de suporte e
          manutenção.
        </p>
        <h4 className={styles.topic}>5 - DAS CLAÚSULAS CONTRATUAIS:</h4>
        <p className={styles.view}>
          <strong>5.1 - Da obrigação das partes:</strong>
        </p>
        <p className={styles.view}>
          <strong>Cláusula segunda:</strong> Constitui obrigação restrita do
          <strong>Parceiro Comercial</strong> a prestação de serviços de
          <strong>INSTALAÇÃO</strong> e <strong>SUPORTE do</strong>{" "}
          <strong>PROGRAMA</strong>, O <strong>TREINAMENTO</strong> ao{" "}
          <strong>Cliente</strong>, será considerado Serviço Adicional, e
          formalizada em proposta comercial.
        </p>
        <p className={styles.view}>
          <strong>Cláusula terceira:</strong> Constitui obrigação do{" "}
          <strong>Cliente</strong> o pagamento integral do valor exigido para
          ativação da licença do <strong>PROGRAMA</strong>, o valor referente
          treinamento e implantação, bem como um valor mensal, fixado em tabela,
          para prestação de suporte técnico, manutenção e atualizações do
          sistema.​
        </p>
        <p className={styles.view}>
          <strong>Cláusula quarta:</strong> O <strong>Cliente</strong> se
          compromete ainda a não ceder à licença do <strong>PROGRAMA</strong>,
          bem como sublicenciar, vender, dar em locação ou em garantia, doar,
          alienar de qualquer forma, transferir, total ou parcialmente, gratuita
          ou onerosamente, provisória ou permanente, assim como seus manuais ou
          quaisquer informações.​
        </p>
        <p className={styles.view}>
          <strong>
            {" "}
            5.2 - Do valor e forma de pagamento da ATIVAÇÃO DO PROGRAMA e dos
            encargos contratuais para o caso de inadimplemento: Cláusula quinta:
          </strong>
          Os valores totais da ativação do PROGRAMA, bem como a forma de
          pagamento e data de vencimento, devem obedecer ao descrito na seguinte
          tabela:
        </p>
        <div className={styleTable.divTableHiper}>
          <table className={styleTable.tableHiper}>
            <thead>
              <td>Nome</td>
              <td>valor</td>
            </thead>
            <tbody className={styleTable.tbodyHiper}>
              <td className={styleTable.tdHiper}>
                <tr className={styleTable.trHiper}>
                  Valor total da Ativação, Serviços e Equipamentos
                </tr>
                <tr className={styleTable.trHiper}>
                  Quantidade de parcelas para pagamento
                </tr>
                <tr className={styleTable.trHiper}>Valor de cada parcela</tr>
                <tr className={styleTable.trHiper}>Meio de Pagamento</tr>
                <tr className={styleTable.trHiper}>
                  Data de vencimento da 1ª Parcela
                </tr>
                <tr className={styleTable.trHiper}>
                  Prazo de pagamento das demais parcelas
                </tr>
              </td>
              <td>
                <tr className={styleTable.trHiperColumn2}>
                  <textarea name="" id=""></textarea>
                </tr>
                <tr className={styleTable.trHiperColumn2}>
                  <textarea name="" id=""></textarea>
                </tr>
                <tr className={styleTable.trHiperColumn2}>
                  <textarea name="" id=""></textarea>
                </tr>
                <tr className={styleTable.trHiperColumn2}>
                  <textarea name="" id=""></textarea>
                </tr>
                <tr className={styleTable.trHiperColumn2}>
                  <textarea name="" id=""></textarea>
                </tr>
                <tr>
                  <textarea name="" id=""></textarea>
                </tr>
              </td>
            </tbody>
          </table>
        </div>
        {/* <div className={styles.view}>
           <table>
            <thead className={styles.headerTable}>
              <tr className={styles.rowHeader}>
                <td className={styles.borderRB}>Quantidade</td>
                <td className={styles.borderRB}>Serviço</td>
                <td className={styles.borderB}>Sub-total</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {itenTable.map((item, index) => {
                  return (
                    <CreateTable
                      key={index}
                      content={item.content}
                      quantity={item.quantity}
                      value={item.value}
                    />
                  );
                })}
              </tr>
            </tbody>
            <tfoot className={styles.footerTable}>
              <tr className={styles.footerTotal}>
                <td></td>
                <td>Total</td>
                <td>
                  <span>R$</span>
                  <strong>{sumTotal}</strong>
                </td>
              </tr>
            </tfoot>
          </table> 
        </div> */}
        {/*   <div>
          <h4 className={styles.topic}>
            2.2 - DETALHAMENTO DO ESCOPO DE SERVIÇOS
          </h4>
        </div>  */}
        {/*  <div className={styles.view}>
          <ul>
            <li>
              <p className={styles.list}>
                Gestão e monitoramento dos dispositivos e usuários conforme
                tabela de Escopo de Serviços;
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Monitoramento de estações de trabalho e atualização dinâmica do
                inventário de Hardware e Software;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Monitoramento 24/7 dos ativos de rede e estações de trabalho com
                foco em manutenção preventiva, com geração de alertas em caso de
                falhas críticas de hardware ou software;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Manutenções corretivas e preventivas de hardware nas estações de
                trabalho e outro dispositivos conforme estabelecido na proposta
                comercial. Não incluso troca de peças ou reparos eletrônicos em
                circuitos, fontes e placas, ou despesas de deslocamento até o
                local. Caso necessário, esses itens não inclusos serão cobrados
                de maneira avulsa;
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Suporte a aplicações usadas como colaboração empresarial e
                sistemas operacionais para estações e servidores;
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Atendimento ou suporte às soluções de terceiros, mediante
                colaboração por parte dos provedores destas soluções,
                estabelecendo uma relação de parceria para proporcioar ao
                cliente maior segurança e estabilidade nos seus processos;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Consultoria operacional de gestão de tecnologia da informação
                para novos projetos e/ou aquisição de novos hardwares e
                softwares;
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Treinamento operacional quando necessário, mediante solicitação
                e programação;
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Horas de atendimento interno para manutenção de equipamentos
                (serviços realizações em laboratório e que não incluem custo de
                deslocamento ou transporte dos equipamentos) conforme proposta
                comercial;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Atendimento presencial mensal para manutenção preventiva com
                duração conforme indicado na proposta comercial;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Atendimento presencial mensal para manutenção corretiva com
                duração conforme indicado na proposta comercial;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Visitas corretivas adicionais ou avulsas serão taxas de acordo
                com o informado na proposta comercial;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Reunião de gestão bimestral online, para discussão e análise de
                necessidades geradas pelas estratégias do negócio do cliente,
                para que o TI possa dar suporte às outras áreas funcionais do
                negócio;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Atendimento remoto ou telefônico, para suporte técnico a
                usuários conforme indicado na proposta comercial;{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Atendimento: de segunda a sexta-feira das 09h00 às 18h00
                horário. de Brasília; Para chamados de manutenção corretiva
                atendidos apos o horario de expediente ou finais de semana serão
                taxados em: R$150,00 (cento e cinquenta reais) a primeira hora e
                R$95,00 (noventa e cinco reais) por hora adicional trabalhada,
                somado o custo de deslocamento.
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Para chamados de manutenção remota, atendidos após os horarios
                de expedientes, será taxado em R$35,00 (trinta e cinco reais)
                por hora trabalhada.{" "}
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Deslocamentos adicionais e atendimento corretivo ou preventivo
                local excedente seguirão os valores da tabela de serviços
                contratada.
              </p>
            </li>
            <li>
              <p className={styles.list}>
                Prazo contratual de acordo com a proposta comercial e com
                renovação automática.{" "}
              </p>
            </li>
          </ul>
        </div>  */}
      </div>
      {/*    <h4 className={styles.topic}>
        2.3 - DETALHAMENTO SERVIÇOS DE MANUTENÇÃO CORRETIVA E PREVENTIVA
      </h4> */}
      {/*   <div className={styles.view}>
        <ul>
          <li>
            A manutenção preventiva consiste na limpeza, restauração e
            lubriﬁcação dos equipamentos, a ﬁm de mantê-los em perfeitas
            condições de funcionamento;{" "}
          </li>
          <li>
            A manutenção corretiva consiste na reparação de dados apresentados
            pelos equipamentos, não sendo de responsabilidade da Contratada o
            fornecimento de peças para efetuar a reparação do dano. As peças
            necessárias para reparo dos equipamentos fora da garantia do
            fabricante, serão objeto de orçamentos, previamente encaminhados
            para aprovação do Contratante;
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
            equipamento para remessa ao laboratório para conserto, o contratante
            poderá solicitar a reposição temporária do equipamento através de
            locação do item. A Contratada deverá encaminhar previamente o
            orçamento ou tabela de locação à contratante que decidirá sobre a
            proposta;{" "}
          </li>
          <li>
            A instalação de conﬁguração de novos equipamentos adquiridos pela
            Contratante, sejam notebooks, impressoras ou desktops, conﬁguram
            como parte do contrate de suporte e manutenção e serão enquadrados
            como atendimento ou manutenção corretiva. em caso de outras
            soluções, deverá ser aberto um ticket para projeto.
          </li>
          <li>
            A manutenção será prestada somente por técnicos autorizados e
            credenciados pela Contratada.{" "}
          </li>
        </ul>
      </div> */}
      {/*   <h4 className={styles.topic}>
        2.4 - ACORDO DE NÍVEL DE SERVIÇOS (ANS/SLA)
      </h4>
      <div className={styles.view}>
        <ul>
          <li>
            Atendimento telefônico e suporte remoto 1º Nível: atendimento em até
            2h úteis, a partir da abertura do chamado;{" "}
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
            Agendamento de visitas: deverá ser realizado com, no mínimo, 72h de
            antecedência.
          </li>
        </ul>
      </div> */}
      {/*   <div>
        <h4 className={styles.topic}>3 - DAS EXCLUSÕES</h4>
        <div className={styles.view}>
          <p className={styles.view}>
            A Contratada se exime de prestar manutenção nos seguintes casos:{" "}
          </p>
          <ul>
            <li>
              Equipamentos de terceiros e colaboradores, que não façam parte do
              inventário de equipamentos do cliente, salvo autorização e
              requisição do responsável legal pela gestão do contrato.
            </li>
            <li>
              Reparos e instalações efetuados por terceiros sem prévia aprovação
              da Contratada ou acompanhamento de sua equipe técnica.{" "}
            </li>
          </ul>
        </div>
      </div> */}
      {/*  <div className={linesTable == 4 ? "styles.quebrarPage" : ""}>
        <h4 className={styles.topic}>4 - DA VIGÊNCIA</h4>
        <p className={styles.view}>
          O presente contrato entrará em vigor em{"  "}{" "}
          <span>{newFormatDate.toLocaleDateString()}</span>, por período de 12
          (doze) meses, e será renovado automaticamente, salvo comunicação por
          escrito com 60 (sessenta) dias de antecedência à{"  "}
          <span>{oneMoreYear.toLocaleDateString()}</span>
        </p>
      </div>
      <h4 className={styles.topic}>5 - DA RESCISÃO</h4>
      <p className={styles.view}>
        O presente contrato poderá ser rescindido em decorrência de:
      </p>
      <div className={styles.view}>
        <ul>
          <li>
            <strong>5.1</strong> - Infração a qualquer cláusula ou item deste
            contrato, mantida por prazo superior a 30 (trinta) dias, após o
            recebimento do comunicado por escrito da parte prejudicada à parte
            inadimplente. concordata, falência, liquidação judicial ou
            extrajudicial, intervenção de Órgão Governamental, dissolução ou
            qualquer forma de cessação de atividades de qualquer das partes.
            Transferência do contrato à terceiros sem a prévia concordância das
            partes. E caso ocorra a necessidade de transferência de contrato à
            terceiros, a Contratante deve informar por escrito, com 60
            (sessenta) dias de antecedência a Contratada, aﬁm de manter os
            mesmos diretos e deveres contidos neste contrato.
          </li>
          <li>
            <strong>5.2</strong> - A rescisão antes do término previsto para o
            contrato, e sem a ocorrência do disposto no item 5.1 deverá ser
            comunicada com 90 dias de antecedência, período de carência para
            encerramento do contrato, sem ônus adicionais para a Contratante.
          </li>
        </ul>
      </div>
      <h4 className={styles.topic}>6 - PREÇO E CONDIÇÕES DE PAGAMENTO</h4>
      <p className={styles.view}>
        <strong>6.1</strong> - O preço certo e ajustado a ser pago mensalmente
        pelo Contratante a Contratada, será de R$<span>{sumTotal}</span>
      </p>
      <p className={styles.view}>
        <strong>6.2</strong> - Na ﬁxação do preço não se incluem os tributos,
        impostos ou taxas Federais, Estaduais ou Municipais. A inclusão dos
        impostos será realizada no ato do faturamento e quaisquer alterações de
        alíquotas ou novos tributos, impostos ou taxas que venham a ser criadas,
        incidentes sobre os serviços objetivo deste contrato, constituirão
        encargos do Contratante e calculados sobre os preços então vigentes.
        Este item será objeto de renegociação, no caso de alteração na
        legislação.
      </p>
      <p className={styles.view}>
        <strong>6.3</strong> - Os preços objeto do presente contrato serão
        revisados anualmente, conforme permite a legislação, ou em períodos
        inferiores, de acordo com a variação do Índice Geral de Preços - Mercado
        divulgado pela Fundação Getúlio Vargas (IGPM/FVG), em conformidade com a
        legislação, e na sua falta ou impossibilidade de aplicação, por outro
        que venha a substituí-lo e que reﬂita a real inﬂação ocorrida no período
        ou, ainda, por qualquer outro determinado pelo Governo Federal, a ﬁm de
        manter o equilíbrio econômico e ﬁnanceiro desta prestação de serviços.
      </p>
      <p className={styles.view}>
        <strong>6.4</strong> - Todo equipamento adicional que for adquirido
        durante a vigência deste instrumento, deverá ser informado à contratada
        para que seja incorporado ao presente contrato, assim como reajustado o
        valor do contrato nos itens contratados por usuário ou dispositivo
        conform tabela de deﬁnição de investimento.
      </p>
      <div>
        <h4 className={styles.topic}>7 - DAS CLÁUSULAS PENAIS</h4>
        <p className={styles.view}>
          <strong>7.1</strong> - A falta de pagamento de qualquer fatura em seu
          respectivo vencimento acarretará acréscimo de multa de 2% (dois por
          cento) sobre seu valor, acrescido de juros de 1% ao mês.
        </p>
        <p className={styles.view}>
          <strong>7.2</strong> - A contratada poderá acumular os encargos
          moratórios do item 7.1, com cessação da prestação dos serviços, objeto
          deste contrato até efetiva regularização dos pagamentos,
          independentemente de qualquer notiﬁcação judicial ou extrajudicial.
          Fica eleito o fórum da Comarca da Capital do Estado de São Paulo, com
          exclusão de qualquer outro pôr mais privilegiado que seja, para
          dirimir quaisquer dívidas ou dúvidas decorrentes do presente contrato.
          E, por estarem assim ajustadas as partes assinam o presente contrato
          em duas vias de igual teor e para um só ﬁm, na presença de duas
          testemunhas de tudo ciente.
        </p>
      </div>*/}
      <div className={styles.quebrarPage}>
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
