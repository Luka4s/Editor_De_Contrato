import { InputUser } from "../../Context/InputUserContext"
import { TemplateHiper } from "../Templates/Hiper/Template-hiper"



export function SwitcherHiper(){

    const {switchSistema} = InputUser()

    return !switchSistema ?(<TemplateHiper/>):(<div><TemplateHiper/></div>)
}