import styles from "../Infraestrutura/Template-infra.module.css"
import logomulti from "../../../assets/logo_multipoint.png"

export function TemplateSistemas() {

    return(
            <aside>
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
                    CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE SISTEMAS DE TI
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
            </aside>

    )
}