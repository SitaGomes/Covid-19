import { useState } from "react";
import Swicth from "react-switch";

import { useThemeContext } from "Hooks/useThemeContext";

import styled from "styled-components"

import { BarsIcon } from "Components/Bars";
import {Logo} from "Components/Logo"
import { Times } from "Components/Times";

import { useHistory} from "react-router-dom"

const MenuContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1000px;
    width: 100%;

    padding: 50px 30px;

    margin: 0 auto;

    @media only screen and (max-width: 430px) {
        flex-direction: column;
        justify-content: center;

        padding: 20px;
        gap: 20px;
    }
`
const Bars = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`

const ContentContainer = styled.nav`
    position: fixed;
    left: 0;
    height: 100vh;
    z-index: 1000;

    background: ${props => props.theme.tittle === "dark" ? "#F9F9F9" : "#1F1F1F" };
    color: ${props => props.theme.tittle === "dark" ? "#333" : "#EEEEEE"};
    
    transition: ease-out 0.5s;
    
    display: flex;
    flex-direction: column;

    text-align: center;

`

const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 25px;
`

const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MenuLinks = styled.a`
    cursor: pointer;
    transition: ease-in-out 0.4s;
    margin-top: 20px;

    text-decoration: none;
    color: inherit;
    display: inline-block;
    padding: calc(1rem / 2) 1rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.7rem;
`

const H2 = styled.h2`
    ::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 1rem;
        right: 1rem;
        height: 1px;
        background: var(--main-color);
        transform: scaleX(0);
        transition: transform 350ms ease-in-out;
    }

    :hover:after {
        transform: scaleX(1);
    }
`


export function Menu () {
    const [openMenu, setOpenMenu] = useState(false as boolean)

    const {ToogleTheme, theme} = useThemeContext()

    const history = useHistory()

    return(
        <>
            <MenuContainer>
                <Logo />

                <Bars
                    onClick={() => setOpenMenu(true)}
                >
                    <BarsIcon />
                </Bars>

            </MenuContainer>
            <ContentContainer
                className={openMenu ? "open" : "closed"}
            >
                <MenuHeader>
                    <Swicth 
                        onChange={ToogleTheme}
                        checked={theme.tittle === "light"}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        offColor={theme.colors.icon}
                        onColor={theme.colors.icon}
                        height={30}
                        width={60}
                        handleDiameter={35}
                    />
                    
                    <div
                        onClick={() => setOpenMenu(false)}
                        className="cursor-pointer"
                    >
                        <Times />
                    </div>
                </MenuHeader>

                <MenuContent>
                    
                    <MenuLinks
                        onClick={() => history.push("/")}
                        className="cursor-pointer"
                    >
                        <H2>Home</H2>
                    </MenuLinks>

                    <MenuLinks
                        onClick={() => history.push("/mmm")}
                        className="cursor-pointer"
                    >
                        <H2>Média Móvel de Mortes</H2>
                    </MenuLinks>

                </MenuContent>

            </ContentContainer>
        </>
    )
}