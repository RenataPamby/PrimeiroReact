{/*usa no terminal o comando npm i react-router, para que seja possivel 
fazer as rotas de navegação.*/}
{/*vai no site do React Router e leia a documentação para saber mais*/}
import { BrowserRouter, Route, Routes } from "react-router";

import { AppLayout } from "./shared/layout/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Detail } from "./pages/Detail";


//Principal
export function App() {   
  

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<About />}/>
          {/*existem essas possibilidades de erro de rota
            1. Retorna para um tela que vc escolhe
            2. Vai para uma tela de erro*/}
          {/*<Route path="*" element={<Navigate to="/" />}/>*/}         
          <Route path="*" element={<NotFound />}/>
          <Route path="/detalhe/:id" element={<Detail />}/>
        </Routes>
      </AppLayout>    
    </BrowserRouter>      
  )
}

