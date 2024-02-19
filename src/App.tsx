import "./global.css";
import { InputUserProvider } from "./Context/InputUserContext";
import { BrowserRouter } from "react-router-dom";
import { MyRouter } from "./components/Route/Route";

export function App() {
  return (
    <InputUserProvider>
      <div>
        <BrowserRouter>
          <MyRouter/>
        </BrowserRouter>
      </div>
    </InputUserProvider>
  );
}
