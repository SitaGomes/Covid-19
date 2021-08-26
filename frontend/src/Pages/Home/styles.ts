import styled from "styled-components";
import HeroImage from "Assets/SVG/HeroImage.svg";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 100vh;
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 130vh;

`

export const DropDown = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    padding: 20px 0;
    
    gap: 5px;

    color: ${props => props.theme.colors.text};

    border: none;
    background: none;
`


