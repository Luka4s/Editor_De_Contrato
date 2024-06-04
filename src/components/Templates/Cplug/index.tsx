import styles from "../StylesTeamplates.module.css";
import logomulti from "../../../assets/logo_multipoint.png";
import logoCplug from "../../../assets/logoCplug.png";
import { InputUser } from "../../../Context/InputUserContext";
import { add } from "date-fns";
import { FirstTableEasy } from "../../TablesEasy/FirstTableEasy";
import { SecondTableCplug } from "../../TableCplug";
import { useState } from "react";

export function TemplateCplug() {
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

  const [TiValue, setTiValue] = useState("R$ ");

  //transformando a string digitada no input para Date()
  const newDateValue = new Date(date);
  const newFormatDate = add(newDateValue, {
    days: 1,
  });
  //criando uma variavel com um ano a frente (pegando o valor da variavel acima)

  return (
    <aside className={styles.boxView} id="content1">
      <div>
        <section className={styles.Header}>
          <div>
            <img src={logomulti} className={styles.logo} />
            <img
              src={logoCplug}
              alt="Logotipo Cplug"
              className={styles.logoCplug}
            />
            <div className={styles.boxTextHeader}>
              <p>Multipoint It Services & Consulting</p>
              <p>CNPJ 19.322.719/0001-77</p>
              <p>(11) 2578-0699</p>
            </div>
          </div>
        </section>
        <div className={styles.view}>
          <h4 className={styles.title}>CONTRATO DE USO DE SOFTWARE CPLUG</h4>{" "}
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
          <strong>CONTRATANTE</strong>.
        </p>

        <h4 className={styles.topic}>Horário Comercial:</h4>
        <p className={styles.view}>
          Compreendido de segundas às sextas-feiras, das 09:00h as 18:00h
          horário de Brasília, exceto feriados nacionais ou municipais do local
          da sede da <strong>CONTRATADO</strong> ou do <strong>PARCEIRO</strong>
          .
        </p>
        <h4 className={styles.topic}>Proposta comercial:</h4>
        <p className={styles.view}>
          documento enviado ao <strong>CONTRATANTE</strong> com preços,
          condições de pagamento, detalhamento do produto contratado e
          implantação que faz parte do presente <strong>TERMO DE USO</strong>.
          Em caso de contradição entre a proposta comercial e o presente termo,
          prevalece as disposições da proposta comercial.
        </p>
      </div>
      <div>
        <h4 className={styles.topic}>1 -DECLARAÇÃO DE VONTADE:</h4>
      </div>
      <div className={styles.view}>
        <p className={styles.view}>
          1.1. O CONTRATADO DECLARA TER CIÊNCIA DOS DIREITOS E OBRIGAÇÕES
          DECORRENTES DO PRESENTE TERMO, CONSTITUINDO ESTE INSTRUMENTO O ACORDO
          COMPLETO ENTRE AS PARTES. DECLARA, AINDA, TER LIDO, COMPREENDIDO E
          ACEITO TODOS OS TERMOS E CONDIÇÕES DESTE INSTRUMENTO.{" "}
        </p>
        <p className={styles.view}>
          1.2. A partir do momento em que o CONTRATANTE aceitar este TERMO, as
          disposições aqui constantes regerão a relação entre a CONTRATADO, o
          CONTRATANTE e o PARCEIRO, razão pela qual é recomendável que o
          CONTRATANTE imprima uma cópia deste documento para futura referência.
        </p>
        <div className={styles.quebrarPage}>
          <p className={styles.view}>
            1.3. O CONTRATANTE se declara ciente de que as operações que
            corresponderem à aceitação de determinadas opções serão registradas
            nos bancos de dados da CONTRATADO,juntamente com a data e hora em
            que o aceite foi manifestado pelo CONTRATANTE, podendo tal
            informação ser utilizada como prova da aceitação da opção pelo
            CONTRATANTE independentemente de outra formalidade.
          </p>
          <p className={styles.view}>
            1.4. As informações referentes à data e hora de acesso e ao endereço
            de protocolo de internet utilizado pelo CONTRATANTE para acessar o
            Portal ou o Aplicativo permanecerão armazenadas pela CPLUG por, no
            mínimo, 6 (meses) a contar da data de cada acesso realizado,
            independentemente do término da relação jurídica e comercial entre a
            Casa Magalhães e o CONTRATANTE, em cumprimento ao disposto no Artigo
            15 da Lei nº 12.965/2014.
          </p>
        </div>
      </div>
      <h4 className={styles.topic}>2 - RAZÕES DO CONTRATO:</h4>
      <div>
        <p className={styles.view}>
          CONSIDERANDO, que a empresa CPLUG deseja comercializar em todo
          território nacional, por meio de Parceiro Comercial devidamente
          credenciado, a licença de uso do programa de informática denominado
          “Sistema CPLUG”, o qual foi criado como solução empresarial que une
          automação comercial com ferramenta de gestão, direcionada a
          estabelecimentos de Food Service de pequeno e médio porte;{" "}
        </p>
        <p className={styles.view}>
          CONSIDERANDO, que o CONTRATADO se trata de parceiro credenciado para
          promover a comercialização da licença de uso do referido sistema, bem
          como, por meio de proﬁssionais devidamente habilitados, oferecer
          diretamente aos clientes ﬁnais serviços de suporte e manutenção do
          objeto de venda;{" "}
        </p>
        <p className={styles.view}>
          CONSIDERANDO, que a ora CONTRATANTE deseja adquirir a licença de uso
          do “ConnectPlug”, bem ainda, que lhe seja oferecido suporte técnico e
          manutenção do objeto de venda por parte do CONTRATADO, por meio de
          proﬁssionais devidamente habilitados, ﬁrmam as partes o presente
          instrumento, sob as condições descritas adiante:{" "}
        </p>
      </div>
      <h4 className={styles.topic}>3 - NOMENCLATURAS:</h4>
      <div>
        <p className={styles.view}>
          I – <strong>PROGRAMA</strong>: programa/sistema de informática
          denominado “Sistema CPLUG”, integralmente desenvolvido pela CPLUG para
          o uso de clientes ﬁnais – empresas de pequeno e médio porte de que
          desejam aumentar sua produtividade e segurança na execução dos
          trabalhos -, bem como o manual de usuário, manuais de operações,
          informações técnicas complementares e materiais diversos, tais como
          cartões de referências, folders, etc.{" "}
        </p>
        <p className={styles.view}>
          II – <strong>INSTALAÇÃO</strong>: forma técnica proﬁssional de
          preparar bases de dados, testar, preparar os módulos existentes do
          programa para funcionar e realizar as necessárias conexões e acionar
          os necessários comandos para deixar o PROGRAMA em estado de
          funcionamento no equipamento de informática.{" "}
        </p>
        <p className={styles.view}>
          III –<strong> TREINAR/TREINAMENTO</strong>: orientar o cliente a usar
          corretamente o PROGRAMA:{" "}
        </p>

        <p className={styles.view}>
          IV – <strong>MANUTENÇÃO</strong>: compreende-se como manutenção os
          serviços consistentes em manter atualizadas as funções existentes nos
          módulos do PROGRAMA, com relação às variáveis normalmente alteradas
          por legislação ou quaisquer outras causas externas exigidas por
          determinação governamental, bem como fornecer as novas versões dos
          “Sistema CPLUG” que venham a ser liberadas, desde que contenham
          alterações, acréscimos de rotina ou melhoria de desempenho.{" "}
        </p>
        <p className={styles.view}>
          V – <strong>SUPORTE</strong>: Compreende-se como suporte os serviços
          de apoio e orientação exclusivamente sobre os módulos do PROGRAMA,
          quanto ao funcionamento dos seus módulos objetivando seu melhor
          aproveitamento, esclarecendo dúvidas operacionais através de ligações
          telefônicas, e-mails e demais modalidades de contato virtual.{" "}
        </p>
      </div>
      <div>
        <div className={styles.quebrarPage}>
          <h4 className={styles.topic}>4 - DO OBJETO CONTRATUAL:</h4>
          <p className={styles.view}>
            Cláusula primeira: Pelo presente instrumento, a{" "}
            <strong>CONTRATADA</strong> formaliza a cessão da licença de uso do
            PROGRAMA em favor do Cliente, bem como demais componentes do
            produto, sob o modelo aluguel, pelo período de 12 meses.
          </p>
          <p className={styles.view}>
            Parágrafo único: As partes acordam que a relação comercial se
            restringe somente entre o Parceiro Comercial e o Cliente , isentando
            a CPLUG de qualquer responsabilidade consumerista, bem como de
            prestação de serviço de suporte e manutenção.{" "}
          </p>
        </div>
      </div>
      <h4 className={styles.topic}>5 - DAS CLÁUSULAS CONTRATUAIS:</h4>
      <h4>5.1 - Da obrigação das partes:</h4>
      <p className={styles.view}>
        Cláusula segunda: Constitui obrigação restrita do Parceiro Comercial a
        prestação de serviços de INSTALAÇÃO e SUPORTE do PROGRAMA, O TREINAMENTO
        ao Cliente, será considerado Serviço Adicional, e formalizada em
        proposta comercial.
      </p>

      <p className={styles.view}>
        <strong>Cláusula terceira:</strong> Constitui obrigação do Cliente o
        pagamento integral do valor exigido para ativação da licença do
        PROGRAMA, o valor referente treinamento, implantação bem como um valor
        mensal, ﬁxado em tabela, para prestação de suporte técnico, quando o
        cliente optar por este último.
      </p>
      <p className={styles.view}>
        <strong>Cláusula quarta:</strong> O Cliente se compromete ainda a não
        ceder à licença do PROGRAMA, bem como sublicenciar, vender, dar em
        locação ou em garantia, doar, alienar de qualquer forma, transferir,
        total ou parcialmente, gratuita ou onerosamente, provisória ou
        permanente, assim como seus manuais ou quaisquer informações.
      </p>
      <p className={styles.view}>
        Do valor e forma de pagamento da ATIVAÇÃO DO PROGRAMA e dos encargos
        contratuais para o caso de inadimplemento: Cláusula quinta: Os valores
        totais da ativação do PROGRAMA, bem como a forma de pagamento e data de
        vencimento, devem obedecer ao descrito na seguinte tabela:
      </p>
      <div className={styles.quebrarPage}>
        <div className={styles.view}>
          {/*Tabela de implementação*/}
          <div className={styles.divImplementation}>
            <strong>TABELA DE IMPLEMENTAÇÃO</strong>
            <div className={styles.inputImplementation}>
              <span>Valor da implementação</span>
              <textarea
                name=""
                id=""
                placeholder="Digite o valor da implementação"
                value={TiValue}
                onChange={(e) => {
                  setTiValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.view}>
          <SecondTableCplug />
        </div>
      </div>
      <p className={styles.view}>
        <strong>Parágrafo primeiro:</strong> Incidirá sobre os pagamentos
        efetuados após a data de vencimento correção monetária, multa moratória
        de 2% (dois por cento) calculada sobre o valor inadimplido, acrescido de
        juros de 1% ao mês.
      </p>
      <div>
        <p className={styles.view}>
          <strong>Parágrafo segundo:</strong> A falta de pagamento de qualquer
          parcela, por um prazo superior a 15 dias, acarretará no imediato
          bloqueio de acesso e funcionamento do PROGRAMA, bem ainda a cobrança
          de eventual valor inadimplido de forma administrativa ou judicial,
          independente de prévia comunicação judicial ou extrajudicial.
        </p>
      </div>
      <p className={styles.view}>
        <strong>parágrafo terceiro:</strong>A forma de pagamento - se por meio
        de Boleto, Depósito Bancário ou de forma direta -, serão convencionados
        entre as partes no ato da assinatura do presente instrumento, devendo
        ser formalizada a escolha de pagamento em documento próprio e anexado ao
        presente.
      </p>
      <div className={styles.quebrarPage}></div>
      <p className={styles.view}>
        <strong>5.3</strong> Do valor e forma de pagamento para aluguel do
        PROGRAMA, manutenção e suporte técnico e dos encargos contratuais para o
        caso de inadimplemento:
      </p>
      <div>
        <p className={styles.view}>
          <strong>Cláusula sexta:</strong> A CONTRATANTE conﬁrma o plano de
          prestação de Suporte e o aluguel da licença do PROGRAMA, e deverá
          arcar com o pagamento de uma mensalidade, observando- se o valor e
          data de vencimento descrita na seguinte tabela:
        </p>
        <div className={styles.view}>
          <FirstTableEasy />
        </div>
        <p className={styles.view}>
          <strong>Parágrafo primeiro:</strong> Incidirá sobre os pagamentos
          efetuados após a data de vencimento, correção monetária, multa
          moratória de 2% (dois por cento) a ser calculada sobre o valor
          inadimplido mais juros de 0,33% ao DIA.
        </p>
        <p className={styles.view}>
          <strong>
            Parágrafo segundo: A falta de pagamento de duas parcelas,
            consecutivas ou aleatórias, acarretará na imediata rescisão do
            presente contrato, com o imediato cancelamento da prestação dos
            serviços de Suporte e, principalmente, imediato bloqueio da licença,
            bem ainda a cobrança de eventual valor inadimplido de forma
            administrativa ou judicial, independente de prévia comunicação
            judicial ou extrajudicial.
          </strong>
        </p>
        <p className={styles.view}>
          <strong>Parágrafo terceiro:</strong> A forma de pagamento será por
          meio de boleto Bancário
        </p>
        <p className={styles.view}>
          <strong>Parágrafo quarto:</strong> Os valores ﬁxados para prestação
          mensal de Suporte e Aluguel do PROGRAMA serão revisados anualmente,
          conforme permite a legislação, ou em períodos inferiores, de acordo
          com a variação do Índice Geral de Preços – Mercado divulgado pela
          Fundação Getúlio Vargas (IGPM/FGV), em conformidade com a legislação,
          e na sua falta ou impossibilidade de aplicação, por outro que venha a
          substituí-lo e que reﬂita a real inﬂação ocorrida no período ou,
          ainda, por qualquer outro determinado pelo Governo Federal, a ﬁm de
          manter o equilíbrio econômico e ﬁnanceiro desta prestação de serviços.
        </p>
        <p className={styles.view}>
          <strong>Parágrafo quinto:</strong> A Contratada deverá prestar suporte
          técnico telefônico, com apoio de ferramentas para atendimento remoto
          sempre que o cliente solicitar, de segunda a sábado, das 9:00 as
          18:00. O suporte refere-se exclusivamente ao Sistema Hiper e não
          estende-se a equipamentos, infraestrutura, sistemas operacionais ou
          softwares de terceiros.
        </p>
        <h4 className={styles.topic}>5.4 Da Rescisão deste contrato:</h4>
        <p className={styles.view}>
          <strong>Parágrafo único:</strong> Pelo presente instrumento, a
          CONTRATANTE se compromete a respeitar os prazos de vigência do
          contrato, que inclui comunicação prévia de 60 dias para suspensão do
          uso do sistema.
        </p>
        <h4 className={styles.topic}>
          5.5 Do relacionamento das partes com a CPLUG e das obrigações e
          direitos desta:
        </h4>
        <div className={styles.quebrarPage}></div>

        <p className={styles.view}>
          <strong>Cláusula sétima:</strong> Sem embargo das condições constantes
          no Parágrafo único da Cláusula primeira, as partes ora Contratantes –
          Parceiro Comercial e Cliente – declaram ter pleno conhecimento de que
          a CPLUG não se responsabilizará por eventuais desacordos comerciais,
          ﬁnanceiros ou danos de qualquer natureza ocorridos entre ambas,
          ressaltando que está última trata-se apenas da fabricante e titular
          dos direitos autorais do objeto da venda, responsável somente por
          promover as atualizações e condições legais necessárias para o uso do
          PROGRAMA, de acordo com a sua versão fabricada.
        </p>

        <p className={styles.view}>
          <strong>Parágrafo primeiro:</strong> A atualização mencionada nesta
          cláusula é restrita a versão adquirida pelo Parceiro Comercial e
          Cliente, não se estendendo a obrigação para as novas versões lançadas,
          caso em que estes deverão adquirir novas licenças para as versões
          posteriores e eventualmente mais atualizadas em relação a que foi
          adquirida.
        </p>
        <p className={styles.view}>
          <strong>Parágrafo segundo:</strong> Independente de prévia notiﬁcação
          judicial ou extrajudicial de ambas as partes contratantes, a CPLUG
          reserva-se no direito de bloquear integralmente o acesso da Cliente ao
          PROGRAMA, caso constatado uso indevido, pirataria, alterações ilegais,
          falta ou atraso – de duas parcelas consecutivas ou aleatórias – dos
          valores cobrados pelo Parceiro Comercial para venda, Suporte do objeto
          de venda.
        </p>
        <p className={styles.view}>
          <strong>Cláusula oitava:</strong> As partes elegem o foro da Comarca
          de São Caetano do Sul, São Paulo, com renúncia de qualquer outro por
          mais privilegiado que seja, para nele dirimirem quaisquer dúvidas ou
          controvérsias oriundas da execução, cumprimento ou interpretações
          deste contrato. Estando juntos e contratados, assinam as partes às
          duas vias deste instrumento, de igual teor e forma para o mesmo
          efeito, na presença das testemunhas ao ﬁnal assinadas.
        </p>
      </div>
      <div>
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
