
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
 
function App() {
  return (
    <div className="container">
      <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       {/* <Route path='/Home' element={< Service/>}/> */}
     </Routes>
    </div>
  );
}

export default App;
