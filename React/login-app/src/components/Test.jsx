import { useState } from "react";

const Test = () => {

    const [headingText, setHeadtingText] = useState("Hello");

    const [isMousesOver, setMousedOver] = useState(false);


    function handleClick() {
        setHeadtingText("Submitted");
    }

    function handleMouseOver() {
        setMousedOver(true);
    }

    function handleMouseOut() {
        setMousedOver(false);
    }

    function handleChange(event) {
        console.log(event.target.value);
        console.log(event.target.placeholder);
        console.log(event.target.type);


    }

    return (  
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?"/>
            <button 
            style={{backgroundColor: isMousesOver ? "Black" : "White"}}
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
            onClick={handleClick} 
            onChange={handleChange}
            type="submit">
            Submit
            </button>
        </div>
    );
}

export default Test;