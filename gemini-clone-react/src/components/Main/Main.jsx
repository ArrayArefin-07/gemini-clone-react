import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gimini</p>
        <img src={assets.user_icon} alt="" />
      </div>
    </div>
  )
}

export default Main
