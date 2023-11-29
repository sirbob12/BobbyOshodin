import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages';
import { Navbar, Footer, About, Portfolio, Contact } from './Component';
import { Project1, Project2, Project3 } from './Pages';

import './App.css';

function App() {
  return ( 
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path= '/Project1' element={<Project1/>}/>
        <Route path= '/Project2' element={<Project2/>}/>
        <Route path= '/Project3' element={<Project3/>}/>
        <Route path= '/Project3' element={<Project3/>}/>
        <Route path= '/About' element={<About/>}/>
        <Route path= '/Portfolio' element={<Portfolio/>}/>
        <Route path= '/Contact' element={<Contact/>}/>
        
       
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
