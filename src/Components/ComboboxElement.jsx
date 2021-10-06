import React, { useState } from "react";

function ComboboxElement(props) {
    const [value, setValue] = useState('Male');
    const [checkedValue, setCheckedValue] = useState("-1");
    let requiredClassName = 'field-error';
    let fieldClassName = 'field';

    //Handle event when click on option of select component
    function handleClick(e){
        let contentValue = "";

        if (e.target.value === "")
            contentValue = "- Select -";
        else if (e.target.value === "1")
            contentValue = "Male";
        else if (e.target.value === "2")
            contentValue = "Female";
        else if (e.target.value === "3")
            contentValue = "Others";
        else 
            contentValue = "I do not wish to say";

        setCheckedValue(e.target.value);
        setValue(contentValue);
    }

    //Check valid gender
    function genderIsValid(){
        if(checkedValue === ""){       
            requiredClassName += ' active--';
            fieldClassName += ' invalid--';
            props.setValidGender(0);
        }
        else{
            requiredClassName = 'field-error';
            fieldClassName = 'field';
            props.setValidGender(1);
        }
    }

    //Before render, call this function will check option result
    genderIsValid();

    return (
        <div class="grid__block">
            <label>
                <div className="field-label">
                    Gender*
                </div>

                <div className="field-value"
                     style={{
                         display: props.displayMode === 'none' ? ' ' : 'none'
                         }}>
                    {value}
                </div>

                <select className={fieldClassName}
                        name="gender"
                        style={{ display: props.displayMode }}
                        id="gender"
                        onClick={function(e) {
                            handleClick(e);
                        }}>
                    <option value="">- Select -</option>
                    <option value="1" selected>Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                    <option value="4">I do not wish to say</option>
                </select>

                <div className={requiredClassName} id="genderRequired">
                    Gender is required.
                </div>
            </label>
        </div>
    )
}

export default ComboboxElement;