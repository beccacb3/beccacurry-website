import React from 'react';
import '../scss/main.scss';


const Experience=(props)=>
{
  return(
    <div  id="Experience" className="Experience">
        <div>
            <button>Advanced Micro Devices</button>
            <button>Drifting Creatives</button>
            <button>TAMU Research</button>
            <button>Freelance</button>
        </div>
        <div>
            <div>
                <div>
                    <h3>Company</h3>
                    <p>Description</p>
                    <button>Resume <span>icon down</span></button>
                </div>
                <button><span>side arrow</span></button>
                <button><span>side arrow</span></button>
            </div>
        </div>
    </div>);
}
 
export default Experience;