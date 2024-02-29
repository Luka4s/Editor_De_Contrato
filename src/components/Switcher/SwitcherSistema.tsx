import { InputUser } from "../../Context/InputUserContext";
import { TemplateInfra } from "../Templates/Infraestrutura/Template-infra";
import { TemplateSistemas } from "../Templates/Sistemas/Template-sistemas";

export function SwitcherSistema() {
  const { switchSistema } = InputUser();

  return !switchSistema ? (
    <TemplateSistemas />
  ) : (
    <div>
      <TemplateSistemas />
    </div>
  );
}
