import { InputUser } from "../../Context/InputUserContext";
import { TemplateLocacaoImpre } from "../Templates/LocaçãoImpressoras";
import { TemplateSistemas } from "../Templates/Sistemas/Template-sistemas";

export function SwitcherLocacaoImpre() {
  const { switchInfra } = InputUser();

  return !switchInfra ? (
    <TemplateLocacaoImpre />
  ) : (
    <div>
      <TemplateSistemas />
    </div>
  );
}
