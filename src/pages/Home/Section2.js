import React from 'react'
import CompImg1 from "../../assets/Home/Section2/C1.png"
import CompImg2 from "../../assets/Home/Section2/C2.png"
import CompImg3 from "../../assets/Home/Section2/C3.png"
import CompImg4 from "../../assets/Home/Section2/C4.png"
import CompImg5 from "../../assets/Home/Section2/C5.png"

function Section2() {
  return (
    <section className="c-wrapper">
      <div className="c-container innerWidth flexCenter paddings">
        <img src={CompImg1} alt="Hello" />
        <img src={CompImg2} alt="Hello" />
        <img src={CompImg3} alt="Hello" />
        <img src={CompImg4} alt="Hello" />
        <img src={CompImg5} alt="Hello" />
      </div>
    </section>
  )
}

export default Section2
