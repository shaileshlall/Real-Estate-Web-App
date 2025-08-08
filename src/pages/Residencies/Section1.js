import React from "react";
import "../../styles/ResidenciesStyle.css";

function Section1() {
  return (
    <section className="hero page-inner ">
      <container>
        <div className="flexCenter">
          <h1>Properties</h1>
        </div>
        <div className="flexCenter paddings links">
          <a href="/" className="active">Home</a> 
          <span className="disabled-link">/</span>
          <a href="/properties" className="disabled-link">Properties</a>
        </div>
      </container>
    </section>
  );
}

export default Section1;
