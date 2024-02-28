import styles from "../Infraestrutura/Template-infra.module.css";
import logomulti from "../../../assets/logo_multipoint.png";
import { InputUser } from "../../../Context/InputUserContext";
import { CreateTableP } from "../../CreateTable/Proposta/CreateTableP";

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
    // date,
    // itenTable,
    // valueIten,
    // sumTotal,
    // totalContractValue,
    itenTable,
    setItenTable,
  } = InputUser();

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
          <h4 className={styles.title}>Proposta comercial EasyAssist</h4> <br />
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
          sociais, ora denomidadas <strong>CONTRATANTE</strong> e Contratada,
          ajustam entre si, a prestação de serviços de manutenção de
          microcomputadores e periféricos, que se regerá pela legislação
          pertinente e pelas cláusulas a segui aduzidas:
        </p>
        <h4 className={styles.topic}>DAS DEFINIÇÕES</h4>
        <p className={styles.view}>
          Os termos a seguir constantes neste TERMO terão o significado
          estabelecido abaixo, seja no plural ou no singular, sempre que usados
          em letras maiúsculas: Portal: significa o local onde o Aplicativo será
          disponibilizado para acesso do USUÁRIO, cujo endereço eletrônico é o
          seguinte: https://easyassistweb.com.br/; Aplicativo: significa o
          software de propriedade exclusiva do Easy Assist, cujas
          funcionalidades e serviços estão disponibilizados no Portal.
          Implantação: processo de parametrização e treinamento para uso do
          aplicativo detalhado na PROPOSTA COMERCIAL.
        </p>
        {/* <h4 className={styles.topic}>2 - ESCOPO</h4> */}
        <p className={styles.view}>
          Informações: qualquer informação disponibilizada pelo{" "}
          <strong>CONTRATANTE</strong> que o identifique junto a Casa Magalhães,
          tais como: razão social/nome, CNPJ/CPF, endereço, número de telefone,
          fax, e-mail, número de documentos, etc. Parceiro: pessoa jurídica
          responsável pela implantação, atendimento e treinamento do{" "}
          <strong>CONTRATANTE</strong>. Horário Comercial: Compreendido de
          segundas às quintas-feiras, das 8:00h as 18:00h e sextas-feiras das 8h
          às 17h, horário de Brasília, exceto feriados nacionais ou municipais
          do local da sede da CONTRATADO ou do PARCEIRO. Proposta comercial:
          documento enviado ao <strong>CONTRATANTE</strong> com preços,
          condições de pagamento, detalhamento do produto contratado e
          implantação que faz parte do presente TERMO DE USO. Em caso de
          contradição entre a proposta comercial e o presente termo, prevalece
          as disposições da proposta comercial.
        </p>
      </div>
      <div id="view">
        <h4 className={styles.topic}>1 - DECLARAÇÃO DE VONTADE:</h4>
        <p className={styles.view}>
          Informações: qualquer informação disponibilizada pelo{" "}
          <strong>CONTRATANTE</strong> que o identifique junto a Casa Magalhães,
          tais como: razão social/nome, CNPJ/CPF, endereço, número de telefone,
          fax, e-mail, número de documentos, etc. Parceiro: pessoa jurídica
          responsável pela implantação, atendimento e treinamento do{" "}
          <strong>CONTRATANTE</strong>. Horário Comercial: Compreendido de
          segundas às quintas-feiras, das 8:00h as 18:00h e sextas-feiras das 8h
          às 17h, horário de Brasília, exceto feriados nacionais ou municipais
          do local da sede da CONTRATADO ou do PARCEIRO. Proposta comercial:
          documento enviado ao <strong>CONTRATANTE</strong> com preços,
          condições de pagamento, detalhamento do produto contratado e
          implantação que faz parte do presente TERMO DE USO. Em caso de
          contradição entre a proposta comercial e o presente termo, prevalece
          as disposições da proposta comercial.
        </p>
      </div>

      <div id="view">
        <h4 className={styles.topic}>1.1:</h4>
        <p className={styles.view}>
          Informações: qualquer informação disponibilizada pelo{" "}
          <strong>CONTRATANTE</strong> que o identifique junto a Casa Magalhães,
          tais como: razão social/nome, CNPJ/CPF, endereço, número de telefone,
          fax, e-mail, número de documentos, etc. Parceiro: pessoa jurídica
          responsável pela implantação, atendimento e treinamento do{" "}
          <strong>CONTRATANTE</strong>. Horário Comercial: Compreendido de
          segundas às quintas-feiras, das 8:00h as 18:00h e sextas-feiras das 8h
          às 17h, horário de Brasília, exceto feriados nacionais ou municipais
          do local da sede da CONTRATADO ou do PARCEIRO. Proposta comercial:
          documento enviado ao <strong>CONTRATANTE</strong> com preços,
          condições de pagamento, detalhamento do produto contratado e
          implantação que faz parte do presente TERMO DE USO. Em caso de
          contradição entre a proposta comercial e o presente termo, prevalece
          as disposições da proposta comercial.
        </p>
      </div>

      <div id="view">
        <h4 className={styles.topic}>1.2:</h4>
        <p className={styles.view}>
          A partir do momento em que o <strong>CONTRATANTE</strong> aceitar este
          TERMO, as disposições aqui constantes regerão a relação entre a
          CONTRATADO, o <strong>CONTRATANTE</strong> e o PARCEIRO, razão pela
          qual é recomendável que o<strong>CONTRATANTE</strong> imprima uma
          cópia deste documento para futura referência.
        </p>
      </div>

      <div id="view">
        <h4 className={styles.topic}>1.3:</h4>
        <p className={styles.view}>
          O <strong>CONTRATANTE</strong>CONTRATANTE se declara ciente de que as
          operações que corresponderem à aceitação de determinadas opções serão
          registradas nos bancos de dados da CONTRATADO, juntamente com a data e
          hora em que o aceite foi manifestado pelo <strong>CONTRATANTE</strong>
          , podendo tal informação ser utilizada como prova da aceitação da
          opção pelo <strong>CONTRATANTE</strong> independentemente de outra
          formalidade.
        </p>
      </div>

      <div id="view">
        <h4 className={styles.topic}>1.4:</h4>
        <p className={styles.view}>
          As informações referentes à data e hora de acesso e ao endereço de
          protocolo de internet utilizado pelo <strong>CONTRATANTE</strong> para
          acessar o Portal ou o Aplicativo permanecerão armazenadas pela
          Proabakus por, no mínimo, 6 (meses) a contar da data de cada acesso
          realizado, independentemente do término da relação jurídica e
          comercial entre a Casa Magalhães e o <strong>CONTRATANTE</strong>, em
          cumprimento ao disposto no Artigo 15 da Lei nº 12.965/2014.
        </p>
      </div>

      <div id="view">
        <h4 className={styles.topic}>1.4:</h4>
        <p className={styles.view}>
          As informações referentes à data e hora de acesso e ao endereço de
          protocolo de internet utilizado pelo <strong>CONTRATANTE</strong> para
          acessar o Portal ou o Aplicativo permanecerão armazenadas pela
          Proabakus por, no mínimo, 6 (meses) a contar da data de cada acesso
          realizado, independentemente do término da relação jurídica e
          comercial entre a Casa Magalhães e o <strong>CONTRATANTE</strong>, em
          cumprimento ao disposto no Artigo 15 da Lei nº 12.965/2014.
        </p>
      </div>

      <div id="view">
        <h4 className={styles.topic}>2 - RAZÕES DO CONTRATO:</h4>
        <p className={styles.view}>
          CONSIDERANDO, que o CONTRATADO se trata de parceiro credenciado para
          promover a comercialização da licença de uso do referido sistema, bem
          como, por meio de profissionais devidamente habilitados, oferecer
          diretamente aos clientes finais serviços de suporte e manutenção do
          objeto de venda;
        </p>
      </div>

      <div id="view">
        <p className={styles.view}>
          CONSIDERANDO, que o CONTRATADO se trata de parceiro credenciado para
          promover a comercialização da licença de uso do referido sistema, bem
          como, por meio de profissionais devidamente habilitados, oferecer
          diretamente aos clientes finais serviços de suporte e manutenção do
          objeto de venda;
        </p>
      </div>

      <div id="view">
        <p className={styles.view}>
          CONSIDERANDO, que a ora <strong>CONTRATANTE</strong> deseja adquirir a
          licença de uso do “Sistema Hiper”, bem ainda, que lhe seja oferecido
          suporte técnico e manutenção do objeto de venda por parte do
          CONTRATADO, por meio de profissionais devidamente habilitados, firmam
          as partes o presente instrumento, sob as condições descritas adiante:
        </p>
      </div>

      <div id="view">
        <h4 className={styles.topic}>3 - NOMENCLATURAS:</h4>
        <p className={styles.view}>
          <strong>I – PROGRAMA:</strong> programa/sistema de informática
          denominado “Sistema Easy Assist”, integralmente desenvolvido pela Casa
          Magalhães para o uso de clientes finais – empresas de pequeno e médio
          porte de que desejam aumentar sua produtividade e segurança na
          execução dos trabalhos -, bem como o manual de usuário, manuais de
          operações, informações técnicas complementares e materiais diversos,
          tais como cartões de referências, folders, etc.{" "}
        </p>
        <p className={styles.view}>
          <strong>II – INSTALAÇÃO:</strong> forma técnica profissional de
          preparar bases de dados, testar, preparar os módulos existentes do
          programa para funcionar e realizar as necessárias conexões e acionar
          os necessários comandos para deixar o PROGRAMA em estado de
          funcionamento no equipamento de informática.
        </p>

        <p className={styles.view}>
          <strong>III – TREINAR/TREINAMENTO:</strong> orientar o cliente a usar
          corretamente o PROGRAMA:
        </p>

        <p className={styles.view}>
          <strong>IV – MANUTENÇÃO:</strong> compreende-se como manutenção os
          serviços consistentes em manter atualizadas as funções existentes nos
          módulos do PROGRAMA, com relação às variáveis normalmente alteradas
          por legislação ou quaisquer outras causas externas exigidas por
          determinação governamental, bem como fornecer as novas versões dos
          “Sistema Easy Assist” que venham a ser liberadas, desde que contenham
          alterações, acréscimos de rotina ou melhoria de desempenho.
        </p>
      </div>
      <p className={styles.view}>
        <strong>5.2 - </strong> Do valor e forma de pagamento da ATIVAÇÃO DO
        PROGRAMA e dos encargos contratuais para o caso de inadimplemento:
        Cláusula quinta: Os valores totais da ativação do PROGRAMA, bem como a
        forma de pagamento e data de vencimento, devem obedecer ao descrito na
        seguinte tabela:
      </p>

      <p className={styles.view}>
        <strong>Mensalidade de módulos contratados:</strong>
      </p>
      <table>
        <thead className={styles.headerTable}>
          <tr className={styles.tr}>
            <td className={styles.borderRB}>Produto</td>
            <td className={styles.borderRB}>Descrição</td>
            <td className={styles.borderRB}>Quantidade</td>
            <td className={styles.borderB}>R$</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {itenTable.map((item, index) => {
              return (
                <CreateTableP
                  key={index}
                  content={item.quantity}
                  quantity={item.content}
                  value={item.value}
                  product={item.product}
                />
              );
            })}
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
