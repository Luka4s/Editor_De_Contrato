import { InputUser } from "../../Context/InputUserContext"
import { TemplateInfra } from "../Templates/Infraestrutura/Template-infra"
import { TemplateSistemas } from "../Templates/Sistemas/Template-sistemas"


export function Switcher(){

    const {switchInfra} = InputUser()

    return !switchInfra ?(<TemplateInfra/>):(<div><TemplateSistemas/></div>)
}