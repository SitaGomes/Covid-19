import {createGlobalStyle} from "styled-components"
import 'aos/dist/aos.css'

export const Global = createGlobalStyle`

    :root {
        --main-color: #DC2F02;
        --background-color: ${props => props.theme.colors.background};
        --text-color: ${props => props.theme.colors.text};
    }


    *, ::before, ::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
        transition: background 500ms ease-in, color 200ms ease-out;
    }

    body{
        background: var(--background-color);
        color: var(--text-color);
        font-family: 'Quicksand', sans-serif;
    }

    .icon{
        width: 20px;
    }

    .open{
        width: 400px;

        @media only screen and (max-width: 400px) {
            width: 100%;
        }
    }

    .closed{
        width: 0;
        opacity: 0;
    }

`