import React from 'react';
import './App.css';
import Login from './Component/Singup_Login/Login'
import Practice from './Component/Practice'; 

function App() {
  return (
    <div className="App">
     <div className="container">
      <Login />
      <Practice />
     </div>
    </div>
  );
}

export default App;
