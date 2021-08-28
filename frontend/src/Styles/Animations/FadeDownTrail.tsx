import { useTrail, a } from '@react-spring/web'
import React from 'react'

export const FadeDownTrail: React.FC = ( {children} ) => {

    const items = React.Children.toArray(children)

    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      from: { opacity: 0, y: -20 },
      to: {opacity: 1, y: 0 },
    })

    return (
      <div>
        {trail.map(({...styles}, index) => (

          <a.div key={index}>

            <a.div style={styles}>{items[index]}</a.div>
          
          </a.div>
        
        ))}
      </div>
    )
  }