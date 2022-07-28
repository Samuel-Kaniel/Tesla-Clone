import React from 'react';
import Section from './Section'
import styled from 'styled-components';
import img1 from '../images/model-s.jpg';
import img2 from '../images/model-3.jpg';
import img3 from '../images/model-y.jpg';
import img4 from '../images/model-x.jpg';
import panel from '../images/solar-panel.jpg';
import roof from '../images/solar-roof.jpg';
import accessory from '../images/accessories.jpg';


function Home() {
  return (
    <Container>
        <Section 
          title= "Model S"
          description= "Order online for the touchless delivery"
          backgroundImage= {img1}
          LeftBtnText= "Custome Order"
          RightBtnText= "Existing Inventory"
        />
        <Section 
          title= "Model 3"
          description= "Order online for the touchless delivery"
          backgroundImage= {img3}
          LeftBtnText= "Custome Order"
          RightBtnText= "Existing Inventory"
        />
        <Section 
          title= "Model X"
          description= "Order online for the touchless delivery"
          backgroundImage= {img2}
          LeftBtnText= "Custome Order"
          RightBtnText= "Existing Inventory"
        />
        <Section 
          title= "Model Y"
          description= "Order online for the touchless delivery"
          backgroundImage= {img4}
          LeftBtnText= "Custome Order"
          RightBtnText= "Existing Inventory"
        />

        <Section 
          title= "Lowest cost Solar Panels in America"
          description= "Money Back gurantee"
          backgroundImage= {panel}
          LeftBtnText= "Order now"
          RightBtnText= "Learn more"
        />
        <Section 
          title= "Solar Roof"
          description= "Produce clean Energy from your roof"
          backgroundImage= {roof}
          LeftBtnText= "Order now"
          RightBtnText= "Learn more"
        />
        <Section 
          title= "Accessories"
          backgroundImage= {accessory}
          LeftBtnText= "Shop now"
        />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`