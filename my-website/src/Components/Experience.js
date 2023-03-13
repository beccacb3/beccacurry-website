import React from 'react';
import '../scss/main.scss';


const Experience=(props)=>
{
  return(
    <div  id="Experience" className="Experience">
        <div className="background-image">
        <div className="left">
            <div className="experience-container">
                <button>Advanced Micro Devices</button>
                <button>Drifting Creatives</button>
                <button>TAMU Research</button>
                <button>Freelance</button>
            </div>
        </div>
        
        <div className="right">
            <div className="right-content">
                    <h3>Advanced Micro Devices</h3>
                    <div className="job-description">
                        <button><span>side arrow</span></button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button><span>side arrow</span></button>
                    </div>
                    <button className="resume">Resume <span>icon down</span></button>
            </div>
        </div>
        </div>
    </div>);
}
 
export default Experience;