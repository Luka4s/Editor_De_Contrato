import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./DefaultLayout";
import { ViewInfra } from "../../pages/ViewInfra";
import { ViewSistemas } from "../../pages/ViewSistemas";
import { ViewHiper } from "../../pages/ViewHiper";
import { Home } from "../../pages/Home";
import { ViewCplug } from "../../pages/ViewCplug";
import { ViewLocacaoImpressoras } from "../../pages/ViewLocacaoImpre";

export function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/infra" element={<ViewInfra />} />
        <Route path="/sistemas" element={<ViewSistemas />} />
        <Route path="/hiper" element={<ViewHiper />} />
        <Route path="/cplug" element={<ViewCplug />} />
        <Route
          path="/locacaoimpressoras"
          element={<ViewLocacaoImpressoras />}
        />
      </Route>
    </Routes>
  );
}
