import {useState} from "react";

const Counter=(initialIndex, initialItems)=>{
    const [displayIndex, setDisplay] = useState(initialIndex);
    const [items, setList] = useState(initialItems);

    const backButton = () =>{
        displayIndex >= 1 ? setDisplay((displayIndex-1) % items.length) :
        setDisplay((displayIndex-1+items.length) % items.length) ;
    };
    
    const nextButton = () =>{
        setDisplay((displayIndex+1) % items.length);
    };

    const addItem = (item) => {
        setList([...items, item]); 
    };

    return {displayIndex, items, nextButton, backButton, addItem};
}

export default Counter;