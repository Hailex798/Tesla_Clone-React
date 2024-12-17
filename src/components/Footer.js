import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
            <ul>
                <li><a href="https://www.tesla.com/about" target="_blank" rel="noopener noreferrer">Tesla © 2024</a></li>
                <li><a href="https://www.tesla.com/legal" target="_blank" rel="noopener noreferrer">Privacy & Legal</a></li>
                <li><a href="https://www.tesla.com/vin-recall-search" target="_blank" rel="noopener noreferrer">Vehicle Recalls</a></li>
                <li><a href="https://www.tesla.com/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><a href="https://www.tesla.com/blog" target="_blank" rel="noopener noreferrer">News</a></li>
                <li><a href="https://www.tesla.com/updates" target="_blank" rel="noopener noreferrer">Get Updates</a></li>
                <li><a href="https://www.tesla.com/findus/list" target="_blank" rel="noopener noreferrer">Locations</a></li>
            </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        //background: black;
        height: 4vh;
        margin: 20px 0;
        padding: 17px 0;

        ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 35vw;
        }

        li {
                list-style: none;
                font-size: 12px;
        }
        a{
                //color: white;

        }
`;

export default Footer