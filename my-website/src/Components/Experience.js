import React, { useEffect, useState, useRef }  from 'react';
import Job from './Job.js';
import '../scss/main.scss';
import Jobs from '../Data/Jobs.txt';
import { ListItemSecondaryAction } from '@mui/material';
import Counter from "../Hooks/Counter";

function ReadTextFile(){
    const [content, setContent] = useState('');
    useEffect(() => {
        async function fetchTextFile() {
          const response = await fetch(Jobs);
          const content = await response.text();
          setContent(content);
          console.log(content)
        }
    
        fetchTextFile();
      }, []);
      return(content)
}

function JsonList(){
    const content = ReadTextFile()
    const [jsonObject, setJsonObject] = useState([]);
    const parseTextToJson = (content) => {
        try {
          const json = JSON.parse(content);
          setJsonObject(json);
        } catch (error) {
          console.error("Error parsing JSON: ", error);
        }
      };
    parseTextToJson(content)
    console.log(jsonObject)
}


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
                {/* <button id="0">Advanced Micro Devices</button>
                <button id="1">Drifting Creatives</button>
                <button id="2">TAMU Research</button>
                <button id="3">Freelance</button> */}
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

        {/* {false && <Job title="Advanced Micro Devices" content={<p>Temp</p>}/>}
        {false && <Job title="Drifting Creatives" content={<p>Temp</p>}/>}
        {false && <Job title="TAMU Research" content={<p>Temp</p>}/>}
        {true && <Job title="Freelance" content={<p>Temp</p>}/>} */}

        </div>
    </div>);
}
 
export default Experience;