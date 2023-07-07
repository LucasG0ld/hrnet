import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Header from './components/organisms/header';

import Accueil from './pages/accueil';
import Create from './pages/create';
import View from './pages/view';
import Test from './pages/test';


/*const Accueil = React.lazy(() => import('./pages/accueil'));
const Create = React.lazy(() => import('./pages/create'));
const View = React.lazy(() => import('./pages/view'));
const Test = React.lazy(() => import('./pages/test'));*/

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/create-employee" element={<Create />} />
        <Route exact path="/view-employee" element={<View />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
