import {Header} from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import { Navegation } from "../Navegation/Navegation"


export function DefaultLayout() {

    return(
        <div>
            <Header/>
            <Navegation/>
            <Outlet/>
            <Footer/>
        </div>
    )
}