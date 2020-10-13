import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

import './Knowledge.scss'

export function Knowledge() {
    const [flipped, set] = useState(false)
        const { transform, opacity } = useSpring({
          opacity: flipped ? 1 : 0,
          transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
          config: { mass: 5, tension: 500, friction: 80 }
        })

        return (
          <div onClick={() => set(state => !state)} class='containerKnow'>
            <a.div class="c backKnow" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
           <h2>Conocimientos</h2>
           
            </a.div>
            <a.div class="c frontKnow" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
            <div>
                <h2 className='letters'>
                    JavaScript
                    Html5
                    CSS
                    React
                    Angular
                    Python
                    NodeJS
                    PHP
                </h2>

                <h4>
                    Git
                    MySQL
                    MongoDB
                    Docker
                    Ubuntu, Linux
                    Lua
                    POO
                    Visual Studio Code
                </h4>
            </div>
      
            </a.div>
          </div>
      
        )
       
    
}
