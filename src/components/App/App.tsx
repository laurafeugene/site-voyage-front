import { Outlet } from 'react-router';
import Footnote from './Footnote/Footnote';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* permet de faire le rendu des composants enfants de la route */}
      </main>
      <Footnote />
    </>
  );
}

export default App;
