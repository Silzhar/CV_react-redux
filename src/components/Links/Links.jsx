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
                 <a href='https://www.linkedin.com/in/luisruizfer/' target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                </p>
                <p>
                  <a href='https://github.com/Silzhar' target="_blank" rel="noopener noreferrer">GITHUB</a>
                </p>
                <p>
                  <a href='https://gitlab.com/Silzhar' target="_blank" rel="noopener noreferrer">GITLAB</a>
                </p>
                <p>
                  <a href='https://awesome-knuth-558093.netlify.app/' target="_blank" rel="noopener noreferrer">CODIANT</a>
                </p>
            </div>
      
            </a.div>
          </div>
      
        
       
    )
}
