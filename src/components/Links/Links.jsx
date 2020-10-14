import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

import './Links.scss'

export function Links() {
    const [flipped, set] = useState(false)
        const { transform, opacity } = useSpring({
          opacity: flipped ? 1 : 0,
          transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
          config: { mass: 5, tension: 500, friction: 80 }
        })

    return (

        <div onClick={() => set(state => !state)} class='container'>
            <a.div class="c frontLinks" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
           <h2>Enlaces</h2>
           
            </a.div>
            <a.div class="c backLinks " style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
            <div>
                <p>
                 <a href=''>LINKEDIN</a>
                </p>
                <p>
                  <a href=''>GITHUB</a>
                </p>
                <p>
                  <a href=''>GITLAB</a>
                </p>
                <p>
                  <a href=''>CODIANT</a>
                </p>
            </div>
      
            </a.div>
          </div>
      
        
       
    )
}
