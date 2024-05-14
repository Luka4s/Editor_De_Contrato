import { InputUser } from "../../Context/InputUserContext";
import { TemplateCplug } from "../Templates/Cplug";
import { TemplatePropostaCplug } from "../Templates/PropostaCPlug";
//import { TemplatePropostaCplug } from "../Templates/PropostaCPlug";

export function SwitcherCplug() {
  const { switchInfra } = InputUser();

  return !switchInfra ? (
    <div>
      <TemplateCplug />
    </div>
  ) : (
    <div>
      <TemplatePropostaCplug />
    </div>
  );
}
