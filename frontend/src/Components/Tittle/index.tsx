import styled from "styled-components"
import { ChildrenProps } from "Types";

const H1 = styled.h1`
    font-family: "roboto", sans-serif;
    padding-top: 1.2rem;
`

export function Tittle({children}: ChildrenProps){

    return(
        <H1>
            {children}
        </H1>
    )
}