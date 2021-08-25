import styled from "styled-components";
import HeroImage from "Assets/SVG/HeroImage.svg";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 100vh;
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 110vh;

`

export const MenuContainer = styled.nav`
    max-width: 1000px;
    width: 100%; 
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    padding: 30px ;
`

export const DropDown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 0;

    gap: 5px;
`


