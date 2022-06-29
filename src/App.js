import ReactWhatsapp from 'react-whatsapp';
import './App.css';
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
         <div style={{ 'max-height': '85vh', overflow: 'hidden' }}>
            <Home />
         </div>
         <br />
         <Gallery />
         <div className='container'>
            <Services />
         </div>
         <Footer />
         <SocialFollow />
      </div>
   );
}

export default App;