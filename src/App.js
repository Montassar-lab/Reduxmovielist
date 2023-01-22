import { Route, Routes } from 'react-router-dom';
import './App.css';
import Afficherlist from './Components/Afficherlist';
import Contact from './Components/Contact';
import Heading from './Components/Heading';
import Home from './Components/Home';
import Moviedetail from './Components/Moviedetail';

function App() {
  return (
    <div>
      <Heading/>
      <br/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Listmovies' element={<Afficherlist/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Descriptionpage/:ID' element={<Moviedetail/>}/> 
      </Routes>

      
      
    </div>
  );
}

export default App;
