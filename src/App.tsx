import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {Header,Balance,IncoandExp,TransactionHistory,AddTransaction} from './Components/index'
import {UseContext} from './Context/UseContext'

function App() {
  return (
    <div className="App">
   <h1>Helo world moiz</h1>
   <Header/>
   <div>
     <UseContext>
   <Balance/>  
   <IncoandExp/>
   <TransactionHistory/>
   <AddTransaction/>
   </UseContext>
   </div>
    </div>
  );
}

export default App;
