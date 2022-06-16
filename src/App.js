
import Header from './pages/Header/Header';
import "./App.css"
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ThemeContextProvider, {ThemeContext} from './Context/ThemeContext'
import { useContext } from 'react';
import BtnToggle from './BtnToggle/BtnToggle';

  
 
function App() {

  const {theme} = useContext(ThemeContext)
  return (
      <div className={theme ? "Dark" :"Light"}>
    <div className='container overflow-hidden'>
      
      <Header/>
     
       
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/portfolio' element={<Portfolio/>}/>
       <Route path='/Blog' element={<Blog/>}/>

     </Routes>
     <Footer/>
    
    </div>
    </div>
  );
}

export default App;
