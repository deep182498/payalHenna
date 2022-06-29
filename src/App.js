import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import SocialFollow from './components/SocialFollow';

function App() {
   return (
      <div className='App'>
         <Header />
         <div style={{ 'max-height': '100vh', overflow: 'hidden' }}>
            <Home />
         </div>
         <Gallery />
         <Services className='mt-2' />
         <About />
         <SocialFollow />
         <Footer />
      </div>
   );
}

export default App;
