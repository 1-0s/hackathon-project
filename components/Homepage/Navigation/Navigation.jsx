import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/Lyful.svg'
import { MainButton, PrimaryButton } from '../../Misc/Buttons'

const Navigation = () => {
  return (
    <nav className="navbar flex justify-between px-5 md:px-12 mt-5">
     
      <Image src={Logo} alt="Mind optimiser logo" width="121" height="40"/>
     

      <div className="nav_buttons flex gap-4">
        <MainButton link="/register" text="Sign up" />
        <PrimaryButton link="/login" text="Log in" />
      </div>
    </nav>
  )
}


export default Navigation