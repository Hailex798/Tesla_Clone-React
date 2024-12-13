import React from 'react';
import { styled } from 'styled-components';
import Button from "../helpers/Button.js";


const HomeSection = (props) => {
  return (
        <Wrapper bgImg={props.backgroundImg} id={props.id}>
            <ItemText data-aos="zoom-in-up">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
            </ItemText>
                <div>
                        <ButtonGroup data-aos="zoom-in-up">
                                <Button color="white" bgColor="#171a20cc" text={props.LeftBtnText} url={props.url} />
                                {props.RightBtnText && 
                                <Button color="black" bgColor="white" text={props.RightBtnText} op="0.65" url={props.url} />
                                }       
                        </ButtonGroup>
                        <DownArrow src="/images/down-arrow.svg" />
                </div>
        </Wrapper>
  )
}

const Wrapper = styled.section`
        z-index: 10;
        width: 100vw;
        height: 100vh;
        background-image: ${(props) => `url("/images/${props.bgImg}")`};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
`;

const ItemText = styled.div`
        padding-top: 10vh;
        text-align: center;
`;

const ButtonGroup = styled.div`
        display: flex;
        margin-bottom: 30px;
        @media(max-width: 768px){
                flex-direction: column;
        }
`;
const DownArrow = styled.img`
        height: 40px;
        animation: animateDown infinite 1.2s;
        overflow-x: hidden;
`;

export default HomeSection;