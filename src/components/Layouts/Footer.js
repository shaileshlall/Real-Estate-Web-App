import React from 'react'
import "../../styles/FooterStyle.css"

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings flexCenter innerWidth f-container">
        {/* {Left Side} */}
        <div className="flexColStart f-left">
          <span className="flexCenter f-logo-text">
            BlueCraft
            <em>
              <img src="./Title-Icon.png" alt="Em-Logo" width={20} />
            </em>
          </span>
          <span className="secondaryText">Our Verison is to make all people happy by providing <br /> The best place to live for them.</span>
        </div>

        {/* {Right Side} */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span><a href="/">Property</a></span>
            <span><a href="/">Services</a></span>
            <span><a href="/">Product</a></span>
            <span><a href="/">About Us</a></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
