import React from 'react'
import {database} from '../firebase/init'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'


export default function Home() {
    const history = useNavigate()

const handleClick = () => {
    signOut(database).then(val => {
        console.log(val, 'val')
        history('/')
    })
}

  return (
    <>
    <h1>Home</h1>
    <button onClick={handleClick}>SignOut</button>
    </>
  )
}
