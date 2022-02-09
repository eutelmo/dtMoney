import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hook/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) =>{ 
    if (transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{

      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;

    }
    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'EUR'
        }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={ outcomeImg } alt="Saidas" />
        </header>
        <strong>
          -{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'EUR'
        }).format(summary.withdraw)}
        </strong>
      </div>

      <div className='hightlight-backgound'>
        <header>
          <p>Total</p>
          <img src={ totalImg } alt="totalImg" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'EUR'
        }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}