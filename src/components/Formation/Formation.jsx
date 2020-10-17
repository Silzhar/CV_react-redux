import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

import './Formation.scss';

export function Formation() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set(state => !state)} class='containerFormation'>
    <a.div class="c backForm" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
    <h2>Formación</h2>
    </a.div>


    <a.div class="c frontForm" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
      <p>FullStack (Upgrade-Hub) Noviembre 2019 - Julio 2020</p>
      <p>Aprende a programar desde cero (KeepCoding) Julio - Septiembre 2019</p>
      <p>Fundamentos de la Programación de Python (KeepCoding) Marzo - Junio 2019</p>
      <p>Programación moderna con Python (KeepCoding) Enero - Marzo 2019</p>
      <p>Lua (KeepCoding) Noviembre - Diciembre 2018</p>
    </a.div>
  </div>
  );
}
