import React from 'react'
import './header.scss'
import { Button } from 'react-bootstrap'
// import Navbar from './navbar'

export default function Header() {
  return (
    <div className='headerdiv bg-succes'>
      <h1>10 tell-tale signs you need <br /> to get a new startup.</h1>
      <img className='backround-img' src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="" />
    </div>
  )
}
