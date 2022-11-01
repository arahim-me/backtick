import './App.css';
import React, {useEffect} from 'react';
import  Home from './Pages/Home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(()=>{
    Aos.init({ duration: 2000});
},[]);
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
