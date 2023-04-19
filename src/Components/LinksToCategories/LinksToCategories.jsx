import React from 'react'
import { Link } from 'react-router-dom'

export default function LinksToCategories() {
  return (
    <>
      <div className="">
        <nav className="flex gap-2 md:gap-6 text-white font-bold">
          <Link className='' to="/products/phones">Celulares</Link>
          <Link className='' to="/products/cargadores">Cargadores</Link>
          <Link className='' to="/products/fundas">Fundas</Link>
          <Link className='' to="/products/otros">Otros</Link>
        </nav>
      </div>
    </>
  )
}
