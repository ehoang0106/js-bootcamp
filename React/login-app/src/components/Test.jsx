import { useState } from "react";

const Test = () => {

    const [name, setName] = useState("");
    const [headingText, setHeadtingText] = useState("");



    function handleClick(event) {
        setHeadtingText(name);
        event.preventDefault();
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    return (  
        <div className="container">
            <h1>Hello {headingText}</h1>
            <form onSubmit={handleClick}>
                <input onChange={handleChange} type="text" placeholder="What's your name?"/>
                <button 
                //onClick={handleClick} 
                type="submit">
                Submit
                </button>
            </form>
        </div>
    );
}

export default Test;