import React, { useEffect, useState }  from 'react';
import Job from './Job.js';
import '../scss/main.scss';
import Jobs from '../Data/Jobs.txt';


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
    const [jsonObject, setJsonObject] = useState(null);
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

        {false && <Job title="Advanced Micro Devices" content="temp"/>}
        {false && <Job title="Drifting Creatives" content="temp"/>}
        {false && <Job title="TAMU Research" content="temp"/>}
        {true && <Job title="Freelance" content="temp"/>}

        <JsonList />

        </div>
    </div>);
}
 
export default Experience;