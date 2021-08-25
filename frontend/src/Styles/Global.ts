import {createGlobalStyle} from "styled-components"

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&family=Roboto:wght@700&display=swap');
    
    *{
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    body{
        font-family: 'Quicksand', sans-serif;
    }

    .tittle{
        font-family: 'Roboto', sans-serif;
    }

`