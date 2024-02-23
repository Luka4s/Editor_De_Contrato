import { FaCashRegister, FaServer } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import styles from "./Navegation.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";


export function Navegation(){

  const [activeRoute, setActiveRoute] = useState('');

  const navigate = useNavigate();
  const location = useLocation();


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
                    <NavLink to="/infra" className={`${styles.NavLink} ${location.pathname === "/infra" ? styles.active : ""}`} onClick={()=>{
                      navigate("/infra"); 
                      setActiveRoute('infra')}}>
                    <span >
                      <FaServer />
                    </span>
                      INFRAESTRUTURA
                    </NavLink>
                  </div>

            <div className={styles.buttons}>
              <NavLink to="/hiper" className={`${styles.NavLink} ${location.pathname === "/hiper" ? styles.active : ""}`} onClick={()=>{
                    navigate("/hiper"); 
                    setActiveRoute('hiper')}}>
                <span>
                  <FaCashRegister />
                </span>
                HIPER
              </NavLink>
            </div>

            <div className={styles.buttons}>
              <NavLink to="/sistemas" className={`${styles.NavLink} ${location.pathname === "/sistemas" ? styles.active : ""}`} onClick={()=>{
                  navigate("/sistemas"); 
                  setActiveRoute('sistemas')}}>
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
  );
}
