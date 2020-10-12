 
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { Links } from '../Links'
import { Formation } from '../Formation'

import './Card.scss'


export function CardOne({childen}) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
  
    <div onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
      { childen === <Links /> ? <Links /> : <h2>enlaces 2</h2>}
     
      </a.div>
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
      { childen === <Links /> ? <h2>enlaces front!</h2> : <h2>enlaces 1</h2>}


      </a.div>
    </div>
  )
}

export function Card({childen}) {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
     
      <div onClick={() => set(state => !state)}>
        <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        { childen === <Formation /> ? <Formation /> : <h2>Formation 2</h2>}
        </a.div>
        <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        { childen === <Formation /> ? <h2>enlaces front!</h2> : <h2>enlaces 1</h2>}
    
        </a.div>
      </div>
  
    )
  }

  export function Card({childen}) {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
      <div onClick={() => set(state => !state)}>
        <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        { childen === <Knowledge /> ? <Knowledge /> : <h2>enlaces 2</h2>}
       
        </a.div>
        <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        { childen === <Knowledge /> ? <h2>enlaces front!</h2> : <h2>enlaces 1</h2>}
  
        </a.div>
      </div>
  
    )
  }