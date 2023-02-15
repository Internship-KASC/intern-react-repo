import './App.css';
import Header from './componet/Header';
import Navgation from './componet/Navgation';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Navgation/>
      <Routes>
      <Route path="/nagation" element={<Navgation/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;