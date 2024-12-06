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
            <HomeSection 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            LeftBtnText="Order now"
            RightBtnText="Learn more"
            />
            <HomeSection 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            LeftBtnText="Order now"
            RightBtnText="Learn more"
            />
            <HomeSection 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            LeftBtnText="Shop now"
            />
    </Container>
  )
}

const Container = styled.div`
        height: 100vh;
`;

export default Home;