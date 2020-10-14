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
            <div class='containerKnow__letters'>
              <div class='containerKnow__priorotary'>
                <p>JavaScript</p>
                <p> Html5</p>
                <p>CSS</p>
                <p>React</p>
                <p>Angular</p>
                <p>Python</p>
                <p>NodeJS</p>
                <p>PHP</p>
              </div>
              
              <div class='containerKnow__relative'>
                <p>Git</p>
                <p>MySQL</p>
                <p>Docker</p>
                <p>Ubuntu, Linux</p>
                <p>Lua</p>
                <p>POO</p>
                <p>Visual Studio Code</p>
              </div>
            </div>
      
            </a.div>
          </div>
      
        )
       
    
}
