import Rodape from "./components/Rodape";
import Menu from "./components/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PaginaPadrao from "./components/PaginaPadrao";
import ArmazenaPosts from "./components/ArmazenaPosts";
import NaoEncontrada from "./components/NaoEncontrada";


export default function App() { 
    return (
        <BrowserRouter>

            <Menu/>

          <Routes>

              <Route path="/" element={<PaginaPadrao/>}>

              <Route path="/" element={<Inicio/>}/>
              <Route path="/sobremim" element={<SobreMim/>}/>
              

              </Route>
              <Route path="post/:id" element={<ArmazenaPosts/>} />
              <Route path="*" element={<NaoEncontrada/>}/>
          </Routes>

            <Rodape/>
         
        </BrowserRouter>
    )
}