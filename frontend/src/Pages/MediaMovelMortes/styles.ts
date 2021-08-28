import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    padding: 0 30px 30px 30px;
`

export const WeeksDataContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding: 30px;
    gap: 30px;

`

export const SecondStepContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin: 10px;
    gap: 10px;
`

export const Comparition = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;
    
    gap: 10px;

    @media only screen and (max-width: 587px) {

        flex-direction: column;

    }

`

export const StyledExample = styled.div`
    background-color: ${props => props.theme.tittle === "dark" ? "#F9F9F9" : "#1F1F1F"};
    color: ${props => props.theme.tittle === "dark" ? "#1F1F1F" : "#F9F9F9"};
    
    padding: 0 10px;

    border-radius: 10px;
`

export const ExampleTittle = styled.h3`
    font-size: 1rem;
`