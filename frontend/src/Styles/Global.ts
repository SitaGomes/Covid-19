import {createGlobalStyle} from "styled-components"

export const Global = createGlobalStyle`

    :root {
        --main-color: #DC2F02;
        --background-color: ${props => props.theme.colors.background};
        --text-color: ${props => props.theme.colors.text};
    }


    *{
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    body{
        background: var(--background-color);
        color: var(--text-color);
        font-family: 'Quicksand', sans-serif;
        transition: background 300ms ease-in, color 700ms ease-out;
    }

    .tittle{
        font-family: 'Roboto', sans-serif;
    }

    .icon{
        width: 20px;
    }
`