import React from 'react'
import { LogoBox } from './styles';
import logo from '../../../assets/images/LiarTalk_logo.jpg'

function LogoImg({ size }) {
  return (
    <LogoBox size={size}>
      <img src={logo} />
    </LogoBox>
  )
}

export default LogoBox