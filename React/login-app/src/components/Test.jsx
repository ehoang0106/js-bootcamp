import { useState } from "react";

const Test = () => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    function updateFName(event) {
        const firstName = event.target.value;
        setFName(firstName);
    }

    function updateLName(event) {
        const lastName = event.target.value;
        setLName(lastName);
    }

    
    return (  
        <div className="container">
            <h1>Hello {fName} {lName}</h1>
            <form>
                <input type="fName" placeholder="First Name" value={fName} onChange={updateFName}/>
                <input type="lName" placeholder="Last Name" value={lName} onChange={updateLName} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Test;