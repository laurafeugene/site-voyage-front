import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Header />
      </header>

      <main className='flex-grow'>
        <Main/>

      </main>
    
    <footer>
      <Footer/>
    </footer>
    

    </div>
  );
}

export default App;
