import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'

export default function PageNav() {
  return (
    <nav>
        <ul className={styles.nav}>
            <li>
                <NavLink to= '/home'> Home </NavLink>
            </li>
            <li>
                <NavLink to= '/pricing'> Pricing </NavLink>
            </li>
            <li>
                <NavLink to= '/product'> Products</NavLink>
            </li>
            <li>
                <NavLink to= '/app'> App</NavLink>
            </li>
        </ul>
    </nav>
  )
}
