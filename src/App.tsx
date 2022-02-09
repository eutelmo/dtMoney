import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/newTrasactionModal';
import { TransactionsProvider } from './hook/useTransactions';

import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTranslationModal={ handleOpenNewTransactionModal }/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen }
        onRequestClose={ handleCloseNewTransactionModal }
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

