import React from 'react';
import styled from 'styled-components';
import arro from '../images/down-arrow.svg';
import Fade from 'react-reveal/Fade';


function Section({title, description, LeftBtnText, RightBtnText, backgroundImage}) {
  return (
    <Wrap bgImage={backgroundImage}>
        {/* Under the section component, there is a text, here it's */}
        <Fade top>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
        </Fade>
        {/* Button */}
        <Fade top>
         <Buttons>
            <ButtonGroup>
                <LeftButton>
                    { LeftBtnText }
                </LeftButton>
                { RightBtnText && <RightButton>{ RightBtnText }</RightButton> }
            </ButtonGroup>
            {/* An arrow  */}
            {/* <DownArrow src='window.location.origin + "/images/down-arrow.svg"'/> */}
            <DownArrow src={arro} />
         </Buttons>
        </Fade>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div `
	width: 100vw;
	height: 100vh;
	background-size: cover; /* set size to cover */
	background-position: center; /* center the image */
	background-repeat: no-repeat; /* dont repeat the background */

	display: flex;
	flex-direction: column; /* switch to vertical */
	justify-content: space-between; /* horizontal alignment */
	align-items: center; /* vertical alignment */

	background-image: ${props => `url("${props.bgImage}")`};
`

const ItemText = styled.div `
	padding-top: 15vh;
	text-align: center;

`
const ButtonGroup = styled.div `
	display: flex;
	margin-bottom: 30px;

	@media (max-width: 768px){
		flex-direction: column;
	}

`

const LeftButton = styled.div `
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 600;
	cursor: pointer;
	letter-spacing: 1px;
	margin: 8px;
    
    
`
const RightButton = styled(LeftButton) `
	background-color: white;
	opacity: 0.65;
	color: black;	
`


const DownArrow = styled.img `
	height: 40px;
	animation: animationDown infinite 1.5s;
    cursor: pointer;
	overflow-x: hidden;
`
const Buttons = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`