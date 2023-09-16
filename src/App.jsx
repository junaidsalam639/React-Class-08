import './App.css';
import tailwindConfig from './tailwind.config';
import Navbar from './Component/Navbar';
import Input from './Component/Input';
import { useState } from 'react';

function App() {
  const [update , setUpdate] = useState('');
  function update1 (e) {
       console.log(e);
  }
  return (
    <div className="App">
     <div className="container">
       <Navbar  />
      <h1>{update}</h1>
       <Input data = {setUpdate} func = {update1} />
     </div>
    </div>
  );
}

export default App;
