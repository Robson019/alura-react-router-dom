import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './components/paginaPadrao';
import Inicio from "./pages/Inicio";
import Cardapio from "./pages/Cardapio";
import Menu from "./components/menu";
import Sobre from "./pages/sobre";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import Prato from "./pages/prato";

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<Cardapio/>}/>
                        <Route path='sobre' element={<Sobre/>}/>
                    </Route>
                    <Route path='prato/:id' element={<Prato/>} />
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        </main>
    )
}