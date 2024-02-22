import { FaCashRegister, FaServer } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import styles from "./Navegation.module.css"
import { NavLink } from "react-router-dom";


export function Navegation(){

  


    return(
        <div>
            <section className={styles.titulo}>
              <div>
                <h3>Editor de contratos</h3>
              </div>
            </section>
        
            <section>
              <div className={styles.containerButtons}>
                <div className={styles.boxButtons}>

                  <div className={styles.buttons}>
                    <NavLink to="/infra" className={styles.NavLink}>
                    <span >
                      <FaServer />
                    </span>
                      INFRAESTRUTURA
                    </NavLink>
                  </div>

                  <div className={styles.buttons}>
                  <NavLink to="/hiper" className={styles.NavLink}>
                  <span>
                    <FaCashRegister />
                  </span>
                    HIPER
                  </NavLink>
                  </div>

                  <div className={styles.buttons}>
                    <NavLink to="/sistemas" className={styles.NavLink}>
                      <span>
                      <GrSystem />
                      </span>
                      SISTEMAS
                     
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}