import styled from "styled-components"

const FooterContainer = styled.footer`
    position: relative;

    width: 99vw;
    min-height: 100px;

    margin-top: 40px;
    padding-top: 30px;

    text-align: center;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    background: ${props => props.theme.tittle === "dark" ? "#f9f9f9" : "#1f1f1f"};
    color: ${props => props.theme.tittle === "dark" ? '#1f1f1f' : '#f9f9f9'};
`

const BorderRadius = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 30px;
    background: var(--background-color);
    border-radius: 0px 0px 20px 20px;
`

export function Footer() {
    
    return(
        <FooterContainer>

            <BorderRadius />

            Created with ♥ by Arthur Gomes

        </FooterContainer>
    )
}