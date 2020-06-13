import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header``

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) =>  {
  return <StyledHeader>{title}</StyledHeader>
}

export default Header
