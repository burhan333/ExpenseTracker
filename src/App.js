import React from 'react';
import Header from './components/header'
import Balance from './components/balance'
import IncomExpense from './components/incomExpense'
import TransactionList from './components/transactionList'
import { AddTransaction } from './components/addTransaction'
import { GlobalProvider }  from './context/globalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
