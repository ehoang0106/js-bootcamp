import React from "react";
import Input from "./Input";

function Form(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            
            {props.isRegistered ? <Input type="password" placeholder="Confirm Password"/>: null}

            
            <button type="submit">
                {props.isRegistered ? "Register" : "Login"}
            </button>
        </form>
    );
}

export default Form;
