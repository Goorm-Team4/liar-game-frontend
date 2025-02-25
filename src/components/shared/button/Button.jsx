import React from 'react'
import { ButtonBox } from './styles'

function Button({ size, color, bgColor, text }) {
  return (
    <ButtonBox size={size} color={color} bgColor={bgColor}>
      {text}
    </ButtonBox>
  )
}

export default Button;
