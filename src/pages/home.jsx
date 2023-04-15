import React from 'react'
import Header from '../components/header'
import Button from '../components/Button'
import Footer from '../components/Footer'
import '../styles/pages/home.scss'
import { Link } from 'react-router-dom'            

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="section-one">
        <div className="container">
            <div className="section-one-left-right">  
        <div className="section-one-left">
        <h2>Your new daily ritual</h2>
        <p>Sip along with brilliant podcast moments from Hark Audio to uplift your day. 
         Find them in the Starbucks® app.</p>
         <Button className="open-app" text="Open the app"/>
        </div>
        <div className="section-one-right">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82923.jpg" alt="" />
        </div>
        </div>

        </div>


      </div>
  {/*//section2-dir  */}
      <div className="section-two">
      <div className="container">
            <div className="section-one-left-right">

        <div className="section-one-left">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82924.jpg" alt="" />
        </div>
            
        <div className="section-one-right">
        <h2>A new way to earn sips and trips
</h2>
        <p>Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:
Double Stars on Delta travel days
1 mile per $1 spent at Starbucks (excludes taxes and gratuities)*
</p>
         <Button className="link-accounts" text="Link accounts"/>
        </div>
        </div>

        </div>


      </div>
     {/* section3 */}
     <div className="section-three">
        <div className="container">
            <div className="section-one-left-right">

            
        <div className="section-one-left">
        <h2>New year, cool new brew</h2>
        <p>Introducing Pistachio Cream Cold Brew—bold, smooth coffee topped with pistachio cream cold foam.</p>
         <Button className="open-app" text="Try it now"/>
        </div>
        <div className="section-one-right">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82556.jpg" alt="" />
        </div>
        </div>

        </div>


      </div>

      {/* section4-dir */}
      <div className="section-four">
      <div className="container">
            <div className="section-one-left-right">

        <div className="section-one-left">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82557.jpg" alt="" />
        </div>
            
        <div className="section-one-right">
        <h2>Long walks with pistachio
</h2>
        <p>Keep it cozy with a Pistachio Latte finished with a brown-buttery topping.
</p>
         <Button className="order-now" text="Order now"/>
        </div>
        </div>

        </div>


      </div>
      {/* section5 */}
      <div className="section-five">
        <div className="container">
            <div className="section-one-left-right">

            
        <div className="section-one-left">
        <h2>Wrap your day</h2>
        <p>Savory ingredients come together in our Bacon, Sausage & Egg Wrap for a satisfying meal on the go.</p>
         <Button className="open-app" text="Try it now"/>
        </div>
        <div className="section-one-right">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82558.jpg" alt="" />
        </div>
        </div>

        </div>
      </div>



      <div className="section">
      <div className="container">
      <div className="section1">
        <h3>Start fresh with Starbucks® Rewards</h3>
        <h4> <Link> Join </Link> today to earn your way to free coffee and treats.* </h4>
      </div>

      </div>
      </div>
      <Footer/>
      </div> 
      
  )
}

export default Home
