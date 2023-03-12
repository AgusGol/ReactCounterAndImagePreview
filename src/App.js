import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Countdown from './components/Countdown';
import Upload from './components/Upload';

function App() {
  return (
    <div className='contentWrapper'>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/countdown' element={<Countdown/>} />
      <Route path='/upload' element={<Upload/>} />
    </Routes>
    
    </div>  
    );
}

export default App;
