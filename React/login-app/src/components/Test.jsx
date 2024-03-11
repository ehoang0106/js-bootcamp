import { useState } from "react";


const Test = () => {

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;


        setContact((prevValue) => {
            if(name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }
            } else if (name === "lName") {
                return {
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email

                }
            } else if (name === "email") {
                return {
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value
                }
            }
        })
    }
    
    return (  
        <div className="container">
            <h1>Hi {contact.fName} {contact.lName} </h1>
            <p>{contact.email}</p>
            <form>
                <input name="fName" placeholder="First Name" value={contact.fName} onChange={handleChange}/>
                <input name="lName" placeholder="Last Name" value={contact.lName} onChange={handleChange}/>
                <input name="email" placeholder="Email" value={contact.email} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
}


export default Test;