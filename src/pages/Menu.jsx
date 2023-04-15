import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import "../styles/pages/menu.scss"
import AllProduct from './menu/AllProduct'
const Menu = () => {
  return (
    <div>
      <Header/>
      <div className="all-products">
        <ul>
            <li className='first_li'>All products</li>
            <Link to="./featured">

            <li className="sec_li" style={{color:'black'}}>Featured</li>
            </Link>
           <Link to="./previous"> <li className='third_li' style={{color:'black'}}> Previous Orders</li></Link>
           <Link to="./favorite"> <li className='four_li' style={{color:'black'}}> Favorite Products</li></Link>
        </ul>
      </div>
      <AllProduct/>
    </div>
  )
}

export default Menu