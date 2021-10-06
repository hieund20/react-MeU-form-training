import React, { useState } from "react";
import ComboboxElement from "./ComboboxElement";
import TextAreaElement from "./TextAreaElement";
import RequiredInput from "./RequiredInput";
import RequiredInvalidInput from "./RequiredInvalidInput";
import ButtonElements from "./ButtonElements";

//Container Component
function Grid (){
    //none/'' value of display components
    const [displayMode, setDisplayMode] = useState('none');

    const [validName, setValidName] = useState('1');
    const [validMail, setValidMail] = useState('1');
    const [validContact, setValidContact] = useState('1');
    const [validGender, setValidGender] = useState('1');
    const [validNotes, setValidNotes] = useState('1');

    //View log
    // console.log('value name check ' + validName);
    // console.log('value mail check ' + validMail);
    // console.log('value contact check ' + validContact);
    // console.log('value gender check ' + validGender);
    // console.log('value notes check ' + validNotes);
    // console.log('----------------------------------');

    const validForm = [
        validName, 
        validMail, 
        validContact, 
        validGender, 
        validNotes
    ];

    //Check form is valid
    let formValidState = true;
    for(var i = 0; i < validForm.length; i++){
        if(validForm[i] === 0){
            formValidState = false;
        }    
    }

    return(
        <div className="grid">
            <RequiredInput 
                displayMode={displayMode}
                setValidName={setValidName}
            />
            <RequiredInvalidInput 
                displayMode={displayMode}
                defaultValue='donottake@mydog.com'
                label="E-mail Address*"
                name="email"
                type="email"
                id="email"
                required="emailRequired"
                requiredContent="E-mail Address is required."
                invalid="emailInvalid"
                invalidContent="E-mail Address is invalid."
                setValidMail={setValidMail}           
            />
            <RequiredInvalidInput 
                displayMode={displayMode}
                defaultValue="0123456789" 
                label="Contact Number*"
                name="contact"
                type="contact"
                id="contact"
                required="contactRequired"
                requiredContent="Contact Number is required."
                invalid="contactInvalid"
                invalidContent="Contact Number should consist of 8 to 12 digits only."
                setValidContact={setValidContact}
            />
            <ComboboxElement 
                displayMode={displayMode}
                setValidGender={setValidGender}
            />
            <TextAreaElement 
                displayMode={displayMode}
                setValidNotes={setValidNotes}
            />
            <ButtonElements
                setDisplayMode={setDisplayMode}
                isUpdateForm={formValidState}
            />
        </div>
    )
}

export default Grid;