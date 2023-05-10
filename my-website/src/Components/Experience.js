import React, { useEffect, useState, useRef }  from 'react';
import '../scss/main.scss';
import Counter from "../Hooks/Counter";

const Experience=(props)=>
{
  const itemList = [
    "Advanced Micro Devices",
    "Drifting Creatives",
    "TAMU Research",
    "Freelance"
  ]

  const {displayIndex, items, nextButton, backButton, addItem} = Counter(0,itemList)

  const renderList = () =>{
    return itemList.map((item, index)=> (
      <button key={index}>{item}</button>
    ));
  };

  return(
    <div  id="Experience" className="Experience">
        <div className="background-image">
        <div className="left">
            <div className="experience-container">
              {renderList()}
            </div>
        </div>
        <div className="right">
            <div className="right-content">
                    <h3>{items[displayIndex]}</h3>
                    <div className="job-description">
                        <button onClick={backButton}><span>side arrow</span></button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <button onClick={nextButton}><span>side arrow</span></button>
                    </div>
                    <button className="resume">Resume <span>icon down</span></button>
            </div>
        </div>
        </div>
    </div>);
}
 
export default Experience;