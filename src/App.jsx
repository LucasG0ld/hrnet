import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/organisms/header';

import Accueil from './pages/accueil';
import Create from './pages/create';
import View from './pages/view';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/create-employee" element={<Create />} />
        <Route exact path="/view-employee" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
