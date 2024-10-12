import './App.css';
import Entry from './pages/Entry';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Redirect from './pages/Redirect';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Entry/>}/>
        <Route path='/:id' element={<Redirect/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
