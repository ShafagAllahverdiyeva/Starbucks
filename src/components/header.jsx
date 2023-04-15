import React from 'react'
import Button from './Button'
import "../styles/components/header.scss"
import { Link } from 'react-router-dom'
import LocationIcon from '../Svg/index'
const Header = () => {
  return (
    <div>
      <header>
    <div className="container">
        <div className="header">
            <div className="header-left">
                <ul>
                    <li className='header-logo'>  <Link to="/"> <img 
            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
            alt=''
          /></Link></li>
                    <li> <Link to="/menu">Menu</Link> </li>
                    <li><Link to="/rewards">Rewards</Link></li>
                    <li> <Link to="/giftcards"> GIFT CARDS </Link> </li>
                </ul>
            </div>
            <div className="header-right">
                <ul>
                    <li><Link><LocationIcon/>Find a store</Link> </li>
                    <li> <Link to="/sign-in"><Button className="sign-in" text="Sign-in"/></Link></li>
                    <li> <Link to="/join-now"><Button className="join-now" text=" Join now"/></Link></li>
                </ul>
            </div>
        </div>

    </div>
      </header>
    </div>
  )
}

export default Header
