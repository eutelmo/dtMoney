import { useState } from 'react'
import { Container, Content } from './styles'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTranslationModal: () => void;
}

export function Header({ onOpenNewTranslationModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="tpmoney"/>
        <button type="button" onClick={ onOpenNewTranslationModal }>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}