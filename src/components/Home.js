import React from 'react';
import styled from "styled-components";
import HomeSection from './HomeSection';
import Footer from './Footer';

const Home = () => {
  return (
    <Container>
            <HomeSection 
            id="model-s"
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            url="https://www.tesla.com/models/design#overview"
            />
            <HomeSection 
            id="model-y"
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            url="https://www.tesla.com/modely/design#overview"
            />
            <HomeSection 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            url="https://www.tesla.com/model3/design#overview"
            />
            <HomeSection 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            LeftBtnText="Custom Order"
            RightBtnText="Existing Inventory"
            url="https://www.tesla.com/modelx/design#overview"
            />
            <HomeSection 
            title="Cybertruck"
            description="Lease Starting at $899/mo5"
            backgroundImg="cybertruck.png"
            LeftBtnText="Order now"
            RightBtnText="Learn more"
            url="https://www.tesla.com/energy/design"
            fcolor="white"
            />
            <HomeSection 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.png"
            LeftBtnText="Order now"
            RightBtnText="Learn more"
            url="https://www.tesla.com/energy/design"
            fcolor="white"
            />
            <HomeSection 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            LeftBtnText="Order now"
            RightBtnText="Learn more"
            url="https://www.tesla.com/energy/design"
            />
            <HomeSection 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            LeftBtnText="Shop now"
            url="https://shop.tesla.com/"
            last={true}
            height="92.5vh"
            />
            <Footer />
    </Container>
  )
}

const Container = styled.div`
        height: 100vh;
`;

export default Home;