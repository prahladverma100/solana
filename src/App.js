import './App.css';
import Header from './component/Header';
import Preloader from './component/common/Preloader';
import Last_Section from './component/Last_Section';
import BackToTop from './component/common/BackToTop';
import GetStarted from './component/GetStarted';
import DigDeeper from './component/DigDeeper';
import SolanaDos from './component/SolanaDos';
import Aos from 'aos';
import "aos/dist/aos.css"
import {useEffect} from 'react';


function App() {
     useEffect(() => {
       Aos.init({
         duration: 1500,
         once: true,
       });
     }, [])
  return (
    <div className=' overflow-hidden'>
      <Header />
      <GetStarted />
      < DigDeeper />
      < SolanaDos/>
    <Last_Section />
      < Preloader /> 
      <BackToTop/>
    </div>

  );
}

export default App;
