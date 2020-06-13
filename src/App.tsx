import React from 'react';
import styled from 'styled-components'
import './App.css';

import Header from './Header'

const Title = styled.h1`
`

function App() {

  return (
    <>
    <Header title='Cabeçalho' />
    <Title>Olá Magé</Title>
    </>
  );
}

export default App;
