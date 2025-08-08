import React from 'react'
import "../../styles/HomeStyle.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import ContactImg from "../../assets/Home/Section5/contact.jpg"

function Section5() {
  return (
    <section className="c-wrapper">
          <div className="paddings innerWidth flexCenter c-container">
            {/* {Left Side} */}
            <div className="flexColStart c-left">
              <span className="orangeText">Our Contacts</span>
              <span className="primaryText">Easy to contact us</span>
              <span className="secondaryText">
                We always ready to help by providing the best service for you and
                your family. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </span>
    
              <div className="flexColStart contactModes">
                {/* {First Row} */}
                <div className="flexStart column">
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <MdCall size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Call</span>
                        <span className="secondaryText">023 456 789</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Call Now</div>
                  </div>
    
                  {/* {Second Mode} */}
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Chat</span>
                        <span className="secondaryText">023 456 789</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Chat Now</div>
                  </div>
                </div>
    
                {/* {Second Row} */}
                <div className="flexStart column">
                  {/* {third Mode} */}
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Video Call</span>
                        <span className="secondaryText">023 456 789</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Video Call Now</div>
                  </div>
    
                  {/* {Fourth Mode} */}
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <HiChatBubbleBottomCenter size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Message</span>
                        <span className="secondaryText">023 456 789</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Message Us</div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* {Right Side} */}
            <div className="c-right">
              <div className="image-container">
                <img src={ContactImg} alt="Loading..." />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Section5
