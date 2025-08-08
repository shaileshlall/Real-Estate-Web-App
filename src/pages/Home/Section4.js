import React, { useState } from 'react'
import "../../styles/HomeStyle.css";
import ValueImg from "../../assets/Home/Section4/value.png"

// Icons---->
import { MdOutlineArrowDropDown } from "react-icons/md";
// Data From utils accordionjsx file---->
import data from "../../utils/accordian";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function Section4() {
  const [className, setClassName] = useState(null);
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left-Side */}
        <div className="v-left">
          <div className="image-container">
            <img src={ValueImg} alt="" />
          </div>
        </div>

        {/* Right-Side */}

        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we Give to You</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Corrupti iusto voluptatem doloremque.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Section4