import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Details from './components/Details'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
   <div className='header'>
     <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details' element={<Details />}/>
     </Routes>
     <Footer />
   </div>
  );
}

export default App;
