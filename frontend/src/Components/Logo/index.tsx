import styled from "styled-components"
import WhiteLogo from "Assets/Images/WhiteLogo.png"
import BlackLogo from "Assets/Images/BlackLogo.png"
import { useThemeContext } from "Hooks/useThemeContext"

const Img = styled.img`
    max-width: 200px;
    width: 100%;
`

export function Logo () {

    const {theme} = useThemeContext()

    return(
        <Img 
            src={theme.tittle === "dark" ? WhiteLogo : BlackLogo}
        />
    )
}