import React from 'react';
import '../scss/main.scss';


const Job=(props)=>
{
  return(
        <div className="right">
            <div className="right-content">
                    <h3>{props.title}</h3>
                    <div className="job-description">
                        <button><span>side arrow</span></button>
                        {props.content}
                        <button><span>side arrow</span></button>
                    </div>
                    <button className="resume">Resume <span>icon down</span></button>
            </div>
        </div>);
}
 
export default Job;

//add in the description from a file IO