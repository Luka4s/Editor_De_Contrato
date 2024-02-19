import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./DefaultLayout";

import { TemplateSistemas } from "../Templates/Sistemas/Template-sistemas"
import { ViewInfra } from "../../pages/ViewInfra";


export function MyRouter(){

    return(
        <div>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route path="/infra" element={<ViewInfra/>}/>
                    <Route path="/sistemas" element={<TemplateSistemas/>}/>
                </Route>

                
            </Routes>
        </div>
    )

}