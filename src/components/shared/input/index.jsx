import React, { useState } from 'react'
import { InputBox } from './styles'

function Input({ placeholder, value, onChange, size }) {
  const defaultPlaceholder = placeholder;
  const [placeholderText, setPlaceholderText] = useState(defaultPlaceholder);
  
  return (
    <div>
      <InputBox
        type="text"
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        onFocus={() => setPlaceholderText("")}
        onBlur={() => setPlaceholderText(defaultPlaceholder)}
        size={size}
      />
    </div>
  )
}

export default Input