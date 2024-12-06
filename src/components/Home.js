import React from 'react';
import styled from "styled-components";
import HomeSection from './HomeSection';

const Home = () => {
  return (
    <Container>
            <HomeSection 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            />
            <HomeSection 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            />
            <HomeSection 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            />
            <HomeSection 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            />
    </Container>
  )
}

const Container = styled.div`
        height: 100vh;
`;

export default Home;