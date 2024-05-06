/* eslint-disable no-irregular-whitespace */
import styles from "../StylesTeamplates.module.css";
import logomulti from "../../../assets/logo_multipoint.png";
import logoVarejo from "../../../assets/logoVarejo.png";
import logoEasy from "../../../assets/logoEasy.png";
import { InputUser } from "../../../Context/InputUserContext";
import { add } from "date-fns";
import TableHiper from "../../Tables/FirstTableHiper";
import { SecondTableHiper } from "../../Tables/SecondTableHiper";
import { ThirdTableHiper } from "../../Tables/ThirdTableHiper";

export function TemplateSistemas() {
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
            <img
              src={logomulti}
              className={styles.logo}
              alt="Logo MultiPoint"
            />
            <div className={styles.logoEasyVarejo}>
              <img src={logoVarejo} alt="Logo Hiper" />
              <img src={logoEasy} alt="Logo EasyAssist" />
            </div>
            <div className={styles.boxTextHeader}>
              <p>Multipoint It Services & Consulting</p>
              <p>CNPJ 19.322.719/0001-77</p>
              <p>(11) 2578-0699</p>
            </div>
          </div>
        </section>
        <div className={styles.view}>
          <h4 className={styles.title}>CONTRATO VAREJO FÁCIL / EASY @SSIST</h4>{" "}
          <br />
        </div>
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

        <p className={styles.view}>
          <strong>CONTRATANTE:</strong> Pessoa jurídica que adquiriu o software
          EASY ASSIST, inscrito no CNPJ sob o nº <span>{cnpjUser}</span>, Razão
          Social
          <span>{userInfo}</span> com sede na cidade de <span>{city}</span> ,
          Estado de <span>{estado}</span>,na rua <span>{street}</span>, nº{" "}
          <span>{numberHouse}</span> bairro <span>{neighborhood}</span>, CEP{" "}
          <span>{cep}</span>, Brasil, doravante denominada simplesmente de
          CONTRATANTE. om
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
          do USUÁRIO, cujo endereço eletrônico é o seguinte:
          https://easyassistweb.com.br;
        </p>
        <h4 className={styles.topic}>APLICATIVO:</h4>
        <p className={styles.view}>
          significa o software de propriedade exclusiva do Easy Assist, cujas
          funcionalidades e serviços estão disponibilizados no Portal.
        </p>
        <h4 className={styles.topic}>IMPLANTA:</h4>
        <p className={styles.view}>
          processo de parametrização e treinamento para uso do aplicativo
          detalhado na PROPOSTA COMERCIAL.
        </p>
      </div>
      <div>
        <div className={styles.quebrarPage}>
          <h4 className={styles.topic}>INFORMAÇÕES:</h4>
        </div>
        <p className={styles.view}>
          qualquer informação disponibilizada pelo <strong>CONTRATANTE</strong>{" "}
          que o identifique junto a <strong>Casa Magalhães</strong>, tais como:
          razão social/nome, CNPJ/CPF, endereço, número de telefone, fax,
          e-mail, número de documentos, etc.
        </p>
        <h4 className={styles.topic}>PARCEIRO:</h4>
        <p className={styles.view}>
          pessoa jurídica responsável pela implantação, atendimento e
          treinamento do CONTRATANTE.
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

        <h4 className={styles.topic}>1 - DECLARAÇÃO DE VONTADE</h4>
        <p className={styles.view}>
          1.1. O contratante declara ter ciência dos direitos e obrigações
          decorrentes do presente termo, constituindo este instrumento o acordo
          completo entre as partes. Declara, ainda, ter lido, compreendido e
          aceito todos os termos e condições deste instrumento.
        </p>
        <p className={styles.view}>
          1.2. A partir do momento em que o CONTRATANTE aceitar este TERMO, as
          disposições aqui constantes regerão a relação entre a CONTRATADO, o
          CONTRATANTE, razão pela qual é recomendável que o CONTRATANTE imprima
          uma cópia deste documento para futura referência.
        </p>
        <p className={styles.view}>
          1.3. O contratante se declara ciente de que as operações que
          corresponderem à aceitação de determinadas opções serão registradas
          nos bancos de dados da CONTRATADA, juntamente com a data e hora em que
          o aceite foi manifestado pelo CONTRATANTE, podendo tal informação ser
          utilizada como prova da aceitação da opção pelo CONTRATANTE
          independentemente de outra formalidade.
        </p>
        <p className={styles.view}>
          1.4. As informações referentes à data e hora de acesso e ao endereço
          de protocolo de internet utilizado pelo <strong>CONTRATANTE</strong>{" "}
          para acessar o Portal ou o Aplicativo permanecerão armazenadas pela{" "}
          <strong>HIPER</strong> por, no mínimo, 6 (meses) a contar da data de
          cada acesso realizado, independentemente do término da relação
          jurídica e comercial entre a <strong>HIPER</strong> e o{" "}
          <strong>CONTRATANTE</strong>, em cumprimento ao disposto no Artigo 15
          da Lei nº 12.965/2014.
        </p>
        <h4 className={styles.topic}> 2 - RAZÕES DO CONTRATO:</h4>
        <p className={styles.view}>
          <strong>CONSIDERANDO</strong>, que a empresa{" "}
          <strong>PROABAKUS</strong> deseja comercializar em todo território
          nacional, por meio de Parceiro Comercial devidamente credenciado, a
          licença de uso do programa de informática denominado “Sistema Easy
          Assist”, o qual foi criado como solução empresarial que une automação
          comercial com ferramenta de gestão, direcionada a estabelecimentos
          varejistas de pequeno e médio porte;
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
          <strong>I - PROGRAMA: </strong>programa/sistema de informática
          denominado “Sistema Easy Assist”, integralmente desenvolvido pela UNI4
          para o uso de clientes finais – empresas de pequeno e médio porte de
          que desejam aumentar sua produtividade e segurança na execução dos
          trabalhos -, bem como o manual de usuário, manuais de operações,
          informações técnicas complementares e materiais diversos, tais como
          cartões de referências, folders, etc.
        </p>
        <p className={styles.view}>
          <strong>II - INSTALAÇÃO: </strong>forma técnica profissional de
          preparar bases de dados, testar, preparar os módulos existentes do
          programa para funcionar e realizar as necessárias conexões e acionar
          os necessários comandos para deixar o <strong>PROGRAMA</strong> em
          estado de funcionamento no equipamento de informática.
        </p>
        <p className={styles.view}>
          <strong>III – TREINAR/TREINAMENTO: </strong> orientar o cliente a usar
          corretamente o <strong>PROGRAMA</strong>:
        </p>
        <p className={styles.view}>
          <strong>IV – MANUTENÇÃO: </strong> compreende-se como manutenção os
          serviços consistentes em manter atualizadas as funções existentes nos
          módulos do <strong>PROGRAMA</strong>, com relação às variáveis
          normalmente alteradas por legislação ou quaisquer outras causas
          externas exigidas por determinação governamental, bem como fornecer as
          novas versões dos “Sistema Easy Assist” que venham a ser liberadas,
          desde que contenham alterações, acréscimos de rotina ou melhoria de
          desempenho..
        </p>
        <p className={styles.view}>
          <strong> V – SUPORTE: </strong> Compreende-se como suporte os serviços
          de apoio e orientação exclusivamente sobre os módulos do{" "}
          <strong>PROGRAMA</strong>, quanto ao funcionamento dos seus módulos
          objetivando seu melhor aproveitamento, esclarecendo dúvidas
          operacionais através de ligações telefônicas, e-mails e demais
          modalidades de contato virtual.
        </p>
        <h4 className={styles.topic}>4 - DO OBJETO CONTRATUAL</h4>
        <p className={styles.view}>
          Cláusula primeira: Pelo presente instrumento, a{" "}
          <strong>CONTRATADA</strong> formaliza a cessão da licença de uso do{" "}
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
          <strong>Cláusula segunda:</strong> Constitui obrigação restrita do{" "}
          <strong>Parceiro Comercial</strong> a prestação de serviços de{" "}
          <strong>INSTALAÇÃO</strong> e <strong>SUPORTE</strong>{" "}
          <strong>PROGRAMA</strong>, O <strong>TREINAMENTO</strong> ao{" "}
          <strong>Cliente</strong>, será considerado Serviço Adicional, e
          formalizada em proposta comercial.
        </p>
        <p className={styles.view}>
          <strong>Cláusula terceira:</strong> Constitui obrigação do Cliente o
          pagamento integral do valor exigido para ativação da licença do
          <strong>PROGRAMA</strong>, o valor referente treinamento, implantação
          bem como um valor mensal, fixado em tabela, para prestação de suporte
          técnico, quando o cliente optar por este último.
        </p>
        <p className={styles.view}>
          <strong>Cláusula quarta:</strong> O <strong>Cliente</strong> se
          compromete ainda a não ceder à licença do <strong>PROGRAMA</strong>,
          bem como sublicenciar, vender, dar em locação ou em garantia, doar,
          alienar de qualquer forma, transferir, total ou parcialmente, gratuita
          ou onerosamente, provisória ou permanente, assim como seus manuais ou
          quaisquer informações.
        </p>

        <h1>SOBRE O SERVIÇO DE IMPLANTAÇÃO E SUPORTE</h1>
        <h4 className={styles.topic}> Implantação:</h4>
        <p className={styles.view}>
          - A ERPPOINT promoverá a parametrização do sistema, conforme
          necessidades do cliente e regras fiscais necessárias a fim de preparar
          o ambiente de gestão e torná-lo apto às etapas de cadastramento e
          outras cargas de dados.
        </p>
        <p className={styles.view}>
          - O cadastramento de produtos, cardápios, tabelas de preço, fichas
          técnicas, fornecedores e quaisquer outras informações serão de
          responsabilidade do cliente. O mesmo poderá solicitar orçamento para a
          execução destes cadastros.
        </p>
        <p className={styles.view}>
          - O cliente deverá providenciar o apoio de seu departamento contábil
          ou empresa de contabilidade para a execução das parametrizações
          fiscais do sistema.
        </p>
        <p className={styles.view}>
          - Fará a capacitação dos operadores do sistema, conforme escopo de
          implantação, contemplando consultoria online para instalação e
          treinamento operacional.
        </p>
        <p className={styles.view}>
          - Se o escopo definido não for suficiente o cliente deverá contratar
          horas adicionais para a execução de tarefas pendentes ou revisão do
          conteúdo, salvo dúvidas operacionais que serão atendidas pelo suporte
          técnico.
        </p>
        <p className={styles.view}>
          - No caso de visitas adicionais não previstas, os custos com
          deslocamento, hospedagem (se houver), e alimentação de nossos técnicos
          serão de responsabilidade do cliente, e orçados de acordo com a
          distância e a quantidade de tempo necessário para conclusão do
          projeto.
        </p>
        <h4 className={styles.topic}>Suporte:</h4>
        <p className={styles.view}>
          - Os serviços de suporte e atualização de sistemas serão realizados
          através de ferramentas de acesso remoto, via internet ou por telefone,
          conforme as cláusulas estabelecidas no contrato de licenciamento de
          uso do sistema.
        </p>
        <p className={styles.view}>
          - Os canais de atendimento do suporte técnico disponíveis são Chat On
          Line, Telefone e Sistema de Abertura de Chamados.
        </p>
        <p className={styles.view}>
          - Também disponibilizamos atendimentos presenciais, que poderão ser
          contratados pelo cliente de acordo com a nossa tabela de prestação de
          serviço vigente.
        </p>
        <p className={styles.view}>
          - O suporte Técnico Padrão funciona de Segunda a Sábado, em horário
          comercial das 09 às 18 horas.
        </p>
        <p className={styles.view}>
          - Contamos também com a opção de contratação adicional do serviço de
          plantão de segunda à sábado, das 18h às 23 horas e aos domingos e
          feriados, das 11 às 20 horas.
        </p>
        <p className={styles.view}>
          <strong>
            {" "}
            5.2 - Do valor e forma de pagamento da ATIVAÇÃO DO PROGRAMA e dos
            encargos contratuais para o caso de inadimplemento: Cláusula quinta:{" "}
          </strong>
          Os valores totais da ativação do programa, bem como a forma de
          pagamento e data de vencimento, devem obedecer ao descrito na seguinte
          tabela:
        </p>
        <div>
          <TableHiper />
        </div>

        <h1 className={styles.quebrarPage}>
          Tabela de Treinamentos Easy Assist R$ 75,00/h
        </h1>

        <div className={styles.TTEasy}>
          <p className={styles.view}>
            <strong> SETUP EASY ASSIST</strong> R$ 75,00 / hora SETUP BÁSICO - 8
            horas (R$ 600,00)
          </p>
          <p className={styles.view}>
            2 horas de parametrização e instalação do sistema (sem interação com
            o cliente)
          </p>
          <p className={styles.view}>
            2 horas de customizações e ajustes de cardápio / PDV
          </p>
          <p className={styles.view}>
            2 horas de treinamento operacional do PDV
          </p>
          <p className={styles.view}>
            2 horas de treinamento operacional da Retaguarda Local e Web.
          </p>
          <h4 className={styles.topic}>Módulos Complementares:</h4>
          <p className={styles.view}>
            <strong> EA GARÇOM (X2)</strong> – 01:20 horas (R$ 100,00)
          </p>
          <p className={styles.view}>
            1 hora para configuração do app Ea Garçom e treinamento, mais 20
            minutos por dispositivo adicional
          </p>{" "}
          <p className={styles.view}>
            <strong>EA TERMINAL</strong>
          </p>
          <p className={styles.view}>
            2 horas para configuração do dispositivo e treinamento, mais 30
            minutos por dispositivo adicional
          </p>
          <p className={styles.view}>
            <strong>EA CLIENTE</strong>
          </p>{" "}
          <p className={styles.view}>
            2 horas para configuração e treinamento.
          </p>{" "}
          <p className={styles.view}>
            <strong>EA TOTEM</strong>
          </p>{" "}
          <p className={styles.view}>Sob Consulta - projeto Customizado</p>
          <p className={styles.view}>
            {" "}
            <strong>EA DELIVERY</strong>
          </p>{" "}
          <p className={styles.view}>Sob Consulta - Projeto Customizado</p>
          <p className={styles.view}>
            <strong>OPÇÕES DELIVERY</strong>
          </p>{" "}
          <p className={styles.view}>integração Ifood </p>
          <p className={styles.view}>integração uber </p>
          <p className={styles.view}>configuração aplicativo web da loja</p>
          <p className={styles.view}>Automação via Whatsapp</p>
        </div>

        <h1 className={styles.quebrarPage}>
          Tabela de Treinamentos VAREJO FÁCIL R$ 100,00/h
        </h1>

        <div className={styles.TTEasy}>
          <p className={styles.view}>
            <strong> SETUP BÁSICO VF</strong> - R$ 900,00
          </p>
          <p className={styles.view}>
            09 horas de consultoria e treinamento do Varejo Fácil, distribuídos
            em:
          </p>
          <p className={styles.view}>01h - Reajuste de preços</p>
          <p className={styles.view}>01h – Gerenciamento de Vendas</p>
          <p className={styles.view}>02h - Importação de Nota Fiscal</p>
          <p className={styles.view}>02h - Inventário e Ajustes de Estoque</p>
          <p className={styles.view}>
            01h – Relatórios de Caixa no Varejo Facil
          </p>
          <p className={styles.view}>01h – Relatórios de Venda</p>
          <h4 className={styles.topic}>Setup Intermediário - R$ 800,00 :</h4>
          <p className={styles.view}>
            02 horas de parametrização financeira (conta caixa, contas
            bancárias, espécies de documentos)
          </p>
          <p className={styles.view}>
            02 horas de Treinamento do Módulo Tesouraria (conciliações
            financeiras e conciliação de caixa)
          </p>
          <p className={styles.view}>02 horas de Treinamento Fluxo de Caixa</p>
          <p className={styles.view}>
            02 horas de Treinamento em Relatórios Financeiros
          </p>
          <p className={styles.view}>
            <strong>Treinamentos adicionais – R$ 100,00 p/ hora</strong>
          </p>
          <p className={styles.view}>Rotina de Compras</p>
          <p className={styles.view}>Fluxo de Caixa</p>{" "}
          <p className={styles.view}>Balancete</p>{" "}
          <p className={styles.view}>DRE</p>{" "}
          <p className={styles.view}>Relatórios Adicionais</p>
          <p className={styles.view}>
            <strong>
              OBSERVAÇÃO: Os treinamentos serão realizados na modalidade on-line
            </strong>
          </p>
        </div>

        <div>
          <h1>Mensalidade Módulos Contratados</h1>
          <table className={styles.TableMMC}>
            <thead>
              <td>Produto</td>
              <td>Descrição</td>
              <td>Qtd</td>
              <td>R$</td>
            </thead>
            <tbody>
              <td>
                <tr>EA PDV</tr>
                <tr>EA GARÇOM</tr>
                <tr>Usuário Varejo Facil</tr>
                <tr>Nuvem Varejo Facil</tr>
              </td>
              <td>
                <tr>Aplicação para emissão de NFC-e | SAT | PAF-ECF</tr>
                <tr>Aplicativo para garçom, cobrado por dispositivo</tr>
                <tr>01 usuário Admin Varejo Facil</tr>
                <tr>Armazenamento Filial</tr>
              </td>
              <td>
                <tr>1</tr>
                <tr>1</tr>
                <tr>1</tr>
                <tr>1</tr>
              </td>
              <td>
                <tr>
                  <textarea
                    name=""
                    className={styles.TextAreaMMC}
                    value={"R$ 135,00"}
                  />
                </tr>
                <tr>R$50,00</tr>
                <tr>R$ 75,00</tr>
                <tr>R$ 120,00</tr>
              </td>
            </tbody>
          </table>
        </div>

        <p className={styles.view}>
          <strong>Parágrafo primeiro:</strong> Incidirá sobre os pagamentos
          efetuados após a data de vencimento correção monetária, multa
          moratória de 2% (dois por cento) calculada sobre o valor inadimplido,
          acrescido de juros de 1% ao mês.
        </p>
        <p className={styles.view}>
          <strong>
            Parágrafo segundo: A falta de pagamento de qualquer parcela, por um
            prazo superior a 15 dias, acarretará na rescisão do presente
            contrato e o imediato bloqueio de acesso e funcionamento do
            PROGRAMA, bem ainda a cobrança de eventual valor inadimplido de
            forma administrativa ou judicial, independente de prévia comunicação
            judicial ou extrajudicial.{" "}
          </strong>
        </p>
        <p className={styles.view}>
          <strong>Parágrafo terceiro:</strong> A forma de pagamento - se por
          meio de Boleto, Depósito Bancário ou de forma direta -, serão
          convencionados entre as partes no ato da assinatura do presente
          instrumento, devendo ser formalizada a escolha de pagamento em
          documento próprio e anexado ao presente.
        </p>
        <h4 className={styles.topic}>
          5.3 - Do valor e forma de pagamento para aluguel do PROGRAMA,
          manutenção e suporte técnico e dos encargos contratuais para o caso de
          inadimplemento:
        </h4>
        <p>
          <strong>Cláusula sexta:</strong> A CONTRATANTE confirma o plano de
          prestação de Suporte e o aluguel da licença do PROGRAMA, e deverá
          arcar com o pagamento de uma mensalidade, observando-se o valor e data
          de vencimento descrita na seguinte tabela:
        </p>
        <p className={styles.view}>
          <SecondTableHiper />
        </p>
      </div>
      <div>
        <p className={styles.view}>
          <strong>Parágrafo primeiro:</strong> Incidirá sobre os pagamentos
          efetuados após a data de vencimento, correção monetária, multa
          moratória de 2% (dois por cento) a ser calculada sobre o valor
          inadimplido mais juros de 0,33% ao DIA.
        </p>
        <p className={styles.view}>
          Parágrafo segundo: A falta de pagamento de duas parcelas, consecutivas
          ou aleatórias, acarretará na imediata rescisão do presente contrato,
          com o imediato cancelamento da prestação dos serviços de Suporte e,
          principalmente, imediato bloqueio da licença, bem ainda a cobrança de
          eventual valor inadimplido de forma administrativa ou judicial,
          independente de prévia comunicação judicial ou extrajudicial​
        </p>
        <p className={styles.view}>
          <strong>Parágrafo terceiro:</strong> A forma de pagamento será por
          meio de Boleto Bancário.
        </p>
        <p className={styles.view}>
          <strong>Parágrafo quarto:</strong> Os valores fixados para prestação
          mensal de <strong>Suporte e Aluguel do PROGRAMA</strong> serão
          revisados anualmente, conforme permite a legislação, ou em períodos
          inferiores, de acordo com a variação do Índice Geral de Preços –
          Mercado divulgado pela Fundação Getúlio Vargas (IGPM/FGV), em
          conformidade com a legislação, e na sua falta ou impossibilidade de
          aplicação, por outro que venha a substituí-lo e que reflita a real
          inflação ocorrida no período ou, ainda, por qualquer outro determinado
          pelo Governo Federal, a fim de manter o equilíbrio econômico e
          financeiro desta prestação de serviços.
        </p>
        <p className={styles.view}>
          <strong>Parágrafo quinto:</strong> A Contratada deverá prestar suporte
          técnico telefônico, com apoio de ferramentas para atendimento remoto
          sempre que o cliente solicitar, de segunda a sábado, das 9:00 as
          18:00. O suporte refere-se exclusivamente ao Sistema Hiper e não
          estende-se a equipamentos, infra estrutura, sistemas operacionais ou
          softwares de terceiros.
        </p>
      </div>
      <p className={styles.view}>
        <ThirdTableHiper />
      </p>
      <div>
        <h4 className={styles.topic}>5.4 Da Rescisão deste contrato:</h4>
        <p className={styles.view}>
          <strong>Parágrafo único:</strong> Pelo presente instrumento, a
          <strong>CONTRATANTE</strong> se compromete a respeitar os prazos de
          vigência do contrato, de 12 meses, e em caso de cancelamento
          antecipado, deverá arcar com os custos de 60% do valor das
          mensalidades a vencer.
        </p>
        <h4 className={styles.topic}>
          5.5 Do relacionamento das partes com a UNI4 e das obrigações e
          direitos desta:
        </h4>
        <p className={styles.view}>
          <strong> Cláusula sétima:</strong> Sem embargo das condições
          constantes no Parágrafo único da Cláusula primeira, as partes ora
          Contratantes – <strong>Parceiro Comercial</strong> e{" "}
          <strong>Cliente</strong> – declaram ter pleno conhecimento de que a
          <strong>UNI4</strong> não se responsabilizará por eventuais desacordos
          comerciais, financeiros ou danos de qualquer natureza ocorridos entre
          ambas, ressaltando que está última trata-se apenas da fabricante e
          titular dos direitos autorais do objeto da venda, responsável somente
          por promover as atualizações e condições legais necessárias para o uso
          do
          <strong>PROGRAMA</strong>, de acordo com a sua versão fabricada.
        </p>
        <p className={styles.view}>
          <strong> Parágrafo primeiro:</strong> A atualização mencionada nesta
          cláusula é restrita a versão adquirida pelo{" "}
          <strong>Parceiro Comercial</strong> e <strong>Cliente</strong>, não se
          estendendo a obrigação para as novas versões lançadas, caso em que
          estes deverão adquirir novas licenças para as versões posteriores e
          eventualmente mais atualizadas em relação a que foi adquirida.​
        </p>
        <p className={styles.view}>
          <strong> Parágrafo segundo:</strong> Independente de prévia
          notificação judicial ou extrajudicial de ambas as partes contratantes,
          a <strong>UNI4</strong> reserva-se no direito de bloquear
          integralmente o acesso da <strong>Cliente</strong> ao{" "}
          <strong>PROGRAMA</strong>, caso constatado uso indevido, pirataria,
          alterações ilegais, falta ou atraso – de duas parcelas consecutivas ou
          aleatórias – dos valores cobrados pelo Parceiro Comercial para venda,
          Suporte do objeto de venda.
        </p>
        <p className={styles.view}>
          <strong> Cláusula oitava: </strong>As partes elegem o foro da Comarca
          de São Caetano do Sul, São Paulo, com renúncia de qualquer outro por
          mais privilegiado que seja, para nele dirimirem quaisquer dúvidas ou
          controvérsias oriundas da execução, cumprimento ou interpretações
          deste contrato.
        </p>
        <p className={styles.view}>
          Estando juntos e contratados, assinam as partes às duas vias deste
          instrumento, de igual teor e forma para o mesmo efeito, na presença
          das testemunhas ao final assinadas.
        </p>
      </div>

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
