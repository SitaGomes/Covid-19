import styled from "styled-components";
import {animated, useSpring} from "react-spring"

const Div = styled(animated.div)`
    width: 25px;

`

export function ArrowDown() {

    const props = useSpring({
        loop: {reverse: true},
        from: {y: 0},
        to: {y: -7},
    })

    return(
        <Div
            style={props}
        >
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.25 24C47.25 36.8438 36.8438 47.25 24 47.25C11.1562 47.25 0.75 36.8438 0.75 24C0.75 11.1562 11.1562 0.75 24 0.75C36.8438 0.75 47.25 11.1562 47.25 24ZM33.7875 21.2906L27 28.3688V11.25C27 10.0031 25.9969 9 24.75 9H23.25C22.0031 9 21 10.0031 21 11.25V28.3688L14.2125 21.2906C13.3406 20.3813 11.8875 20.3625 10.9969 21.2531L9.975 22.2844C9.09375 23.1656 9.09375 24.5906 9.975 25.4625L22.4062 37.9031C23.2875 38.7844 24.7125 38.7844 25.5844 37.9031L38.025 25.4625C38.9063 24.5813 38.9063 23.1562 38.025 22.2844L37.0031 21.2531C36.1125 20.3625 34.6594 20.3813 33.7875 21.2906V21.2906Z" fill="currentColor"/>
            </svg>
        </Div>
    )
}