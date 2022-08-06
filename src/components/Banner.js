import React from 'react'
import './Banner.css'
import './Header.css'
import Header from './Header'


let bannertext={
    header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    info:"lorem"
}



function Banner() {
  return (
    <>
    
        <div className="banner-bg">
        <Header/>
            <div className="container">
                <div className="banner-container">
                    <div className="banner-text">
                        <h1> {bannertext.header}</h1>
                        <div className='group-btn'>
                        <a href="#" className="banner-btn">Get Started</a>
                        
                        <a href="#" className="banner-btn-demo">Try DEMO</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
  )
}

export default Banner