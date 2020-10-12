import React from 'react'
import { Redirect } from 'react-router'
import { Link } from "react-router-dom"

import './Header.scss'

export function Header() {
    return (
        <div  className='Header'>
            
            <h1>Luis Ruiz Fernández</h1>
            <p>Desde que descubrí la programación dedico todo el tiempo posible a aprender, 
                es algo que me resulta a la par interesante y entretenido. 
                Mi intención es formarme y realizarme en esta profesión.</p>

            <div className='links'>
                <Redirect to='/'>
                    <Link to='' className='links__route'>FORMACION</Link>
                    <Link to='' className='links__route'>CONOCIMIENTOS</Link>
                    <Link to='' className='links__route'>ENLACES</Link>
                </Redirect>
                
            </div>
            
        </div>
    )
}
