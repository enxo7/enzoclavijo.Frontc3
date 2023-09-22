import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { DarkModeProvider } from "./Components/utils/globalContext";
const App = () => {
  return (
    <DarkModeProvider>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/dentist/:id" element={<Detail/>}/>
          <Route path="favs" element={<Favs/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </DarkModeProvider>
  );
}


export default App;