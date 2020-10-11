import React from 'react'
import './Header.scss'

export function Header() {
    return (
        <div  className='Header'>
            <h1>Luis Ruiz Fernández</h1>
            <p>Desde que descubrí la programación dedico todo el tiempo posible a aprender, 
                es algo que me resulta a la par interesante y entretenido. 
                Mi intención es formarme y realizarme en esta profesión.</p>

            <div className='links'>
                <h3 className='links__route'>FORMACION</h3>
                <h3 className='links__route'>CONOCIMIENTOS</h3>
                <h3 className='links__route'>ENLACES</h3>
            </div>
            
        </div>
    )
}
