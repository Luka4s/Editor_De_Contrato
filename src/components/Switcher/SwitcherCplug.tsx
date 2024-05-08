import { InputUser } from "../../Context/InputUserContext";
import { TemplateCplug } from "../Templates/Cplug";
import { TemplateSistemas } from "../Templates/Sistemas/Template-sistemas";

export function SwitcherCplug() {
  const { switchInfra } = InputUser();

  return !switchInfra ? (
    <TemplateCplug />
  ) : (
    <div>
      <TemplateSistemas />
    </div>
  );
}
