import React from 'react';
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from 'react-redux';

const Header = () => {
    const [hamBStat, setHamBStat] = React.useState(false);
    const cars = useSelector(selectCars);

    const [isVisible, setIsVisible] = React.useState(true); // State to control visibility
    const [lastScrollY, setLastScrollY] = React.useState(0); // Track last scroll position
    const [transparent, setTransparent] = React.useState(true); // State to control background

    // Effect to handle scroll event
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if we're at the top to toggle transparency
            setTransparent(currentScrollY <= 10);

            // Check if scrolling down or up
            if (currentScrollY > lastScrollY) {
                setIsVisible(false); // Hide navbar when scrolling down
            } else {
                setIsVisible(true); // Show navbar when scrolling up
            }

            setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY); // Update last scroll position
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Container isVisible={isVisible} transparent={transparent}>
            <a href="/">
                <img src="/images/logo.svg" alt="Tesla Logo" style={{ width: '130px', height: '16px' }} />
            </a>
            <Menu data-aos="fade-in-up">
                {cars && cars.map((car, index) => (
                    <a href="#" key={index}>{car}</a>
                ))}
            </Menu>
            <RightMenu data-aos="zoom-in-left">
                <a href="https://shop.tesla.com/" target="_blank" rel="noreferrer">Shop</a>
                <a href="https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US" target="_blank" rel="noreferrer">Tesla Account</a>
                <CustomMenu onClick={() => { setHamBStat(true) }} />
            </RightMenu>
            <BurgerNav show={hamBStat} id="burger">
                <CloseWrapper>
                    <TfiClose onClick={() => { setHamBStat(false) }} style={{ strokeWidth: '1', fontSize: '15px' }} />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Account</a></li>
            </BurgerNav>
        </Container>
    );
};

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
    background: ${props => props.transparent ? 'transparent' : 'white'};
    box-shadow: ${props => props.transparent ? 'none' : '0 2px 5px rgba(0, 0, 0, 0.1)'};
    transition: transform 0.8s ease, opacity 0.5s ease, background 1s ease;
    
    //transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${props => props.isVisible ? '1' : '0'};

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    #burger{
            background: white;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        margin-right: 10px;
    }
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white !important;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    border-left: 1px solid rgba(0, 0, 0, .2);

    li {
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

export default Header;
