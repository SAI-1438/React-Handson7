import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Students from './Components/Students';
import Error from './Components/Error';
import Nav from './Components/Nav';
import Update from './Components/Update';
import Submit from './Components/Submit';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Students' element={<Students/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/Submit' element={<Submit/>}></Route>
        <Route path='/*' element={<Error/>}/> 
      </Routes>
    </div>
  );
}

export default App;
