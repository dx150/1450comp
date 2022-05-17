import React from 'react'
import Image from '../Img/Anonymous.png'

const ProfilePhoto = () => {
  return (
    <div>
      <img src={Image} width="170" height="170" alt='Profile_Picture' />
    </div>
  )
}

export default ProfilePhoto