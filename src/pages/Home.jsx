import React from 'react'
import PageNav from '../components/PageNav'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <PageNav/>
    <h1>Home</h1>

    <Link to='/app'>Go to App</Link>
    </>
    
  )
}
