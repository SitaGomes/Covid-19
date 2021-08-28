import React from 'react'
import styled from 'styled-components'

import {a, useSpring} from '@react-spring/web'

const Div = styled(a.div)`
    width: 500px;
    height: 350px;

    //box-shadow: 2px 1px 4px ${props => props.theme.tittle === "dark" ? "#F9F9F9" : "#1F1F1F" };
    
    gap: 30px;
    padding: 30px;

    margin: 14px 0;

    display: flex;
    justify-content: center;
    
`


const Blocks = styled(a.div)`
    background: #babbbc;

    padding: 15px;

    width: 100%;

    border-radius: 30px;

`


export const LoadingFirstStep: React.FC = () => {
    
    const FadeDown = useSpring({
        from: {opacity: 0, y: -20},
        to: {opacity: 1, y: 0},
        config: {duration: 700}
    })

    const Loading = useSpring({
        from: {opacity: 0.5},
        to: {opacity: 1},
        loop: {reverse: true},
        reset: true,
        config: {friction: 30, bounce: 5}
    })
    

    return (
        <Div style={FadeDown}>
            <Blocks style={Loading}/>
            <Blocks style={Loading}/>
        </Div>
    )
}

