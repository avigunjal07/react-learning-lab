import './userCard.css'

import React from 'react'
import avishkar_img from '../assets/avishkar.jpeg'
import ajay_img from '../assets/ajay.jpeg'
import yash_img from '../assets/yash.jpeg'
import rohit_img from '../assets/rohit.jpeg'


const UserCard = (props) => {
  return (
    <div className='cards'>
      <p id='username'>{props.username}</p>
      <img src={props.userImg} id='userimage' alt="" />
      <p id='userDesc'>{props.userdesc}</p>
    </div>
  )
}

export default UserCard
