import React from 'react'
import {useSpring, a} from '@react-spring/web'

export const Fade: React.FC = ({ children }) => {
    
    const value = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        duration: 1000,
    })
    
    return (
        <a.div style={value}>
            {children}
        </a.div>
    )
}
