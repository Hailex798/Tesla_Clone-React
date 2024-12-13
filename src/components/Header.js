import React from 'react';
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from 'react-redux';

const Header = () => {
        const [hamBStat, setHamBStat] = React.useState(false);
        const cars = useSelector(selectCars);

  return (
        <Container>
            <a href="/">
                    <img src="/images/logo.svg" alt="Tesla Logo" style={{width: '120px', height: '19px'}}/>
            </a>
            <Menu data-aos="fade-in-up" >
                    {cars && cars.map((car, index) => (
                        <a href="#model-s" key={index}>{car}</a>
                    ))}
            </Menu>
            <RightMenu data-aos="zoom-in-left" >
                    <a href="https://shop.tesla.com/" target="_blank" rel="noreferrer">Shop</a>
                    <a href="https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US" target="_blank" rel="noreferrer">Tesla Account</a>
                    <CustomMenu onClick={() => {setHamBStat(true)}} />
            </RightMenu>
            <BurgerNav show={hamBStat}> 
                    <CloseWrapper>
                        <TfiClose onClick={() => {setHamBStat(false)}} style={{ strokeWidth: '1', fontSize: '15px' }}/>
                    </CloseWrapper>
                    {cars && cars.map((car, index) => (
                        <li><a href="#model-s" key={index}>{car}</a></li>
                    ))}
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadaster</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Account</a></li>
            </BurgerNav>
            
        </Container>
  )
}

const Container = styled.div`
        min-height: 60px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;

        a{
                font-weight: 600;
                text-transform: uppercase;
                padding: 0 10px;
                flex-wrap: no-wrap;
        }
`;

const Menu = styled.div`
        display: flex;
        align-item: center;
        justify-content: center;
        flex: 1;
        
        @media(max-width: 768px){
                display: none;
        }
`;

const RightMenu = styled.div`
        display: flex;
        align-items: center;
        a{
                margin-right: 10px;
        }
`;

//HAM-BURGER MENU
const BurgerNav = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: white;
        width: 300px;
        list-style: none;
        padding: 20px;
        display: flex;
        flex-direction: column;
        text-align: start;

        li{
                padding: 15px 0;
                border-bottom: 1px solid rgba(0, 0, 0, .2);

                a {
                        font-weight: 600;
                }
        }

        transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.5s ease-in-out;
`;


const CustomMenu = styled(GiHamburgerMenu)`
        cursor: pointer;
`;
const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;
`;

export default Header