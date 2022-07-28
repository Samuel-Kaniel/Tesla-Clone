import React from 'react';
import styled from 'styled-components';
// import img from '../images/model-s.jpg';
import arro from '../images/down-arrow.svg';


function Section({title, description, LeftBtnText, RightBtnText, backgroundImage}) {
  return (
    <Wrap bgImage={backgroundImage}>
        {/* Under the section component, there is a text, here it's */}
        <ItemtText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemtText>

        {/* Button */}
        <Button>
            <ButtonGroup>
                <LeftButton>
                    { LeftBtnText }
                </LeftButton>
                { RightBtnText && <RightButton>{ RightBtnText }</RightButton> }
            </ButtonGroup>
            {/* An arrow  */}
            {/* <DownArrow src='window.location.origin + "/images/down-arrow.svg"'/> */}
            <DownArrow src={arro} />

        </Button>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content:space-between; //for vertical lines
    align-items: center;
    background-image: ${props => `url("${props.bgImage}")`};   
`

const ItemtText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 40px;
    @media(max-width: 768px){
        flex-direction: column;
    }
    
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transformation: uppercase;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background: #D7D4D4;
    opacity: 0.75;
    color: #474A4E;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`
const Button = styled.div``