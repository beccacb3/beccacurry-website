import React from 'react';
import '../scss/main.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Landing=(props)=>
{
  return(
    <>
        <div  id="Landing" className="Landing">
            <div className="max_width">
                <h1>Hello World!</h1>
                <h3>My name is Becca Curry</h3>
                <h3>I'm a computer scientist and an artist</h3>
            </div>
        </div>
        <div className="blackBar">
            <AnchorLink href="#Experience"><KeyboardArrowDownIcon className="downArrow"/></AnchorLink>
        </div>
    </>);
}
 
export default Landing;