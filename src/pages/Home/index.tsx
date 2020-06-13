import React from 'react'
import * as S from './styles'
import { FiLogIn } from 'react-icons/fi'

import logo from '../../assets/logo.svg'

const Home = () => {
  return (
    <S.PageHome>
      <S.Content>
        <S.Header>
          <S.Logo src={logo} alt='Ecoleta' />
        </S.Header>

        <S.Main>
          <S.Title>Seu marketplace de coleta de resíduos.</S.Title>
          <S.Paragraph>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</S.Paragraph>
          <S.Button href='/cadastro'>
            <S.ButtonLogo>
              <FiLogIn />
            </S.ButtonLogo>
            <S.Text>
              Cadastre um ponto de coleta
            </S.Text>
          </S.Button>
        </S.Main>

      </S.Content>
    </S.PageHome>
  )
}

export default Home