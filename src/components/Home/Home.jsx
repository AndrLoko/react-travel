import React from 'react'
import './home.scss'
import video from '../../assets/video.mp4'

export default function Home() {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
    
      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            Our Packages
          </span>

          <h1 className="homeTitle">
            Search your Holidays
          </h1>

        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <input type="input text" placeholder='Enter name here...' />
          </div>
        </div>
      </div> 
    </section>
  )
}
