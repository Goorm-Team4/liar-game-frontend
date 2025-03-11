import React from 'react';
import Button from '@/components/shared/button';
import { Backdrop, ModalContainer, TitleContainer, ButtonContainer } from './styles';

function Modal({ onClose, title, buttons = []}) {
  return (
    <>
      <Backdrop onClick={onClose}>
      <ModalContainer>
        <TitleContainer>{title}</TitleContainer>
        <ButtonContainer>
          {buttons.map((btn, index) => (
            <Button 
              key={index}
              size={btn.size || "medium"}
              color={btn.color || "gray"}
              onClick={btn.onClick}
            >
                {btn.label}
            </Button>
          ))}
        </ButtonContainer>
      </ModalContainer>
      </Backdrop>
    </>
  );
}

export default Modal;