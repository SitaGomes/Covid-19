import styled from "styled-components"
import { ChildrenProps } from "Types";
import {animated} from 'react-spring'

const H1 = styled(animated.h1)`
    text-align: center;

    font-family: "roboto", sans-serif;
    padding-top: 1.2rem;
`

export function Tittle({children, style}: ChildrenProps){

    return(
        <H1
            data-aos
            style={style}
        >
            {children}
        </H1>
    )
}