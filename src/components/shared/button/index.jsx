import React from 'react'
import { Button } from './styles'

function baseButton({ size, color, bgColor, text }) {
  return (
    <Button size={size} color={color} bgColor={bgColor}>
      {text}
    </Button>
  )
}

export default baseButton
