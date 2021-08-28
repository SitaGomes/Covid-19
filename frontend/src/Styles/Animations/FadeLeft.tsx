import React from 'react'
import {useSpring, a} from '@react-spring/web'

export const FadeLeft: React.FC = ({ children }) => {
    
    const value = useSpring({
        from: {opacity: 0, x: -50},
        to: {opacity: 1, x: 0},
        duration: 600,
    })
    
    return (
        <a.div style={value}>
            {children}
        </a.div>
    )
}
