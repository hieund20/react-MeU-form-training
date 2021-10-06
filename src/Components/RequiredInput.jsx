import React, { useState } from "react";

function RequiredInput(props) {
    const [value, setValue] = useState('John Wicks');
    let inputContent = value;
    let requiredClassName = 'field-error';
    let fieldClassName = 'field';

    //Handle event when input from keyboard on input element
    function handleChange(e){
        setValue(e.target.value);
        inputContent = e.target.value;
    }

    //Check valid name
    function nameIsValid(){
        if(inputContent === ''){       
            requiredClassName += ' active--';
            fieldClassName += ' invalid--';
            props.setValidName(0);
        }
        else{
            requiredClassName = 'field-error';
            fieldClassName = 'field';
            props.setValidName(1);
        }
    }

    //Before render, call this function will check input result
    nameIsValid();

    return (
        <div class="grid__block">
            <label>
                <div className="field-label">
                    Name*
                </div>

                <div className="field-value"
                     style={{ 
                         display: props.displayMode === 'none' ? '' : 'none'
                         }}>
                    {value}
                </div>

                <input type="text"
                    className={fieldClassName}
                    name="name"
                    value={value}
                    style={{ display: props.displayMode}}
                    id="name"
                    onChange={function(e) {
                        handleChange(e)
                    }}/>
                <div className={requiredClassName} id="nameRequired">
                    Name is required.
                </div>
            </label>
        </div>
    )
}


export default RequiredInput;