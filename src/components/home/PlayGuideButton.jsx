import React from 'react';
import Button from '../shared/button';

function PlayGuideButton({ onClick }) {
  return (
    <Button size="large" color="white" onClick={onClick}>
      플레이 방법
    </Button>
  );
}

export default PlayGuideButton;
