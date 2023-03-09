import React from 'react';
import '../scss/main.scss';

function Navlist(props){
    let list_content = props.nav_list.map((nav_item)=>
        <li key={nav_item}><a href={"/"+nav_item}>{nav_item}</a></li>
    );
    return(
        <ul>
            {list_content}
        </ul>
    )
}

const Nav=(props)=>
{
  return(
    <div className="navBar">
        <div className="navTitle">
            <h1>{props.title}</h1>
        </div>
        <div className="navContent">
            <Navlist nav_list={props.list}/>
        </div>
    </div>);
}
 
export default Nav;