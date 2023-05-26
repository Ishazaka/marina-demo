
import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

;
function App() {
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
  

 {
  login ? <HomePage setLogin={setLogin}/> :  <LoginPage setLogin={setLogin}/>
 }
      
 

    </div>
  );
}

export default App;
