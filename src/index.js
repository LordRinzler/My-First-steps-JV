import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyComponent } from './MyComponent';
import { AnotherComponent } from './MyComponent';


const names = ['Gabriel', 'Gabriel', 'Rodrigo']

const Passo0 = () => {
  return <div style={{height: '500px', backgroundColor: 'blue'}}>'Este e o passo 0'</div>
}

const Passo1 = () => {
  return <div style={{height: '500px', backgroundColor: 'red'}}>'este e o passo 1'</div>
}

function App () {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('Gabriel')
  
  const [counter, setCounter] = useState(0)
  function countUp () {
      setCounter(counter + 1)
  }

/*njofgwojwrfgonjwerfnjiowerfnujiofwe*/

  function countDown () {
      setCounter(counter - 1)
  }

  const nextHandler = () => {
    setStep(step + 1)
  }

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  return <div>
    <h1>Titulo</h1>
    {names.map(name => <p>{name}</p>)}
    
    {step === 0 && <Passo0 />}
    {step === 1 && <Passo1 />}
  
   <AnotherComponent currentCount={counter} countDown={countDown} countUp={countUp}/>


   Inserir Nome: <input type="text" value={name} onChange={handleNameChange}></input>

    <button onClick={nextHandler}>Next</button>

  </div>
}

//const App = () => {
//}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
