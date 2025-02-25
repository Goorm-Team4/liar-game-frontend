import React from 'react'
import { LogoImg } from './styles';
import logo from '../../../assets/images/LiarTalk_logo.jpg'

function LogoBox({size}) {
  return (
    <LogoImg size={size}>
      <img src={logo} />
    </LogoImg>
  )
}

export default LogoBox