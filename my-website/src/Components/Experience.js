import React, { useEffect, useState }  from 'react';
import Job from './Job.js';
import '../scss/main.scss';
import Jobs from '../Data/Jobs.txt';
import { ListItemSecondaryAction } from '@mui/material';


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
    const [displayItem, setDisplay] = useState(0);
    const backButton = () =>{
        displayItem >= 1 ? setDisplay((displayItem-1) % items.length) :
        setDisplay((displayItem-1+items.length) % items.length) ;
    }
    
    const nextButton = () =>{
        setDisplay((displayItem+1) % items.length);
    }
    const items = ["Advanced Micro Devices", "Drifting Creatives", "TAMU Research","Freelance"];

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
                    <h3>{items[displayItem]}</h3>
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