import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./DefaultLayout";
import { ViewInfra } from "../../pages/ViewInfra";
import { ViewSistemas } from "../../pages/ViewSistemas";
import { ViewHiper } from "../../pages/ViewHiper";
import { Home } from "../../pages/Home";

export function MyRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/infra" element={<ViewInfra />} />
          <Route path="/sistemas" element={<ViewSistemas />} />
          <Route path="/hiper" element={<ViewHiper />} />
        </Route>
      </Routes>
    </div>
  );
}
