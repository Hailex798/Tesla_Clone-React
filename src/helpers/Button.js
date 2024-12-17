import React from 'react';
import styled from "styled-components";

const Button = ({color, bgColor, text, url}) => {

  const handleDivClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return (
    <SButton onClick={handleDivClick} color={color} bgColor={bgColor}>
      {text}
    </SButton>
  )
}

const SButton = styled.div`
        background-color: ${(props) => props.bgColor};
        color: ${(props) => props.color};
        //Random-ass glitch, the prop op is getting read, dw...
        text-transform: uppercase;
        height: 40px;
        width: 256px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        margin: 8px;
`;

export default Button;