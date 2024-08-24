import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DOM from './pages/DOM'
import ALIM from './pages/ALIM'



function App() {

  return (    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DOM />} />
        <Route path='/:id' element={<ALIM />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;

