import styled from "styled-components";
import HeroImage from "Assets/SVG/HeroImage.svg";

export const HeroContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 100vh;
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 130vh;

`

export const DropDown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 0;
    
    gap: 5px;

    color: ${props => props.theme.colors.text};

`

export const CovidProtection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 0 30px;

    height: 100vh;

`

export const TextDescription = styled.h3`
    max-width: 300px;
    width: 100%;

    text-align: center;
`


export const SocialDistanceContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    max-width: 1000px;
    width: 100%;

    @media only screen and (max-width: 859px){
        justify-content: center;
    }
`


export const CleanHandsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 50px;

    max-width: 1000px;
    width: 100%;

    @media only screen and (max-width: 859px){
        justify-content: center;
        flex-direction: column-reverse;
    }
`