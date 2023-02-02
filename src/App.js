import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Form from './component/Form';
import Photo from './component/Photo';
import Team from './component/Team';
import Cumponies from './component/Cumponies';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/Home' element={<Home />}/>
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} >
              <Route path='cumponies' element={<Cumponies/>}/>
              <Route path='team' element={<Team/>}/>
              <Route path='photo' element={<Photo/>}/>
            </Route>                                     
          </Routes>
        
       
        
    </div>
  );
}

export default App;
