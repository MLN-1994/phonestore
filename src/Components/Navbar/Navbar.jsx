import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="">
        <nav className="">
          <Link className='' to="/products/phones">Celulares</Link>
          <Link className='' to="/products/cargadores">Cargadores</Link>
          <Link className='' to="/products/fundas">Fundas</Link>
          <Link className='' to="/products/otros">Otros</Link>
        </nav>
      </div>
    </>
  )
}
