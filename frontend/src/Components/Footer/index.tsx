import styled from "styled-components"

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background: ${props => props.theme.tittle === "dark" ? "#f9f9f9" : "#1f1f1f"};
    color: ${props => props.theme.tittle === "dark" ? '#1f1f1f' : '#f9f9f9'};

    width: 100vw;
    padding: 0.5em;
`

export function Footer() {
    
    return(
        <FooterContainer>
            Created with ♥ by Arthur Gomes
        </FooterContainer>
    )
}