import React from "react";
import Login from "./Login";
import Form from "./Form";

var userIsRegistered = false;




function App() {
    return (
        <div className="container">
            <Form isRegistered={userIsRegistered}/>
            

        </div>
    );
}

export default App;
