import React, { useState } from "react";

function TextAreaElement(props) {
    const [value, setValue] = useState(
    'Lorem ipsum dolor sit amet,' 
    + 'consectetur adipisicing elit,'
    + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
    + 'nisi ut aliquip ex ea commodo consequat.'
    + 'Duis aute irure dolor in reprehenderit in voluptate'
    + 'velit esse cillum dolore eu fugiat nulla pariatur.'
    + 'Excepteur sint occaecat cupidatat non proident,'
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.');

    let inputContent = value;
    let requiredClassName = 'field-error';
    let fieldClassName = 'field';


    //Handle event when input from keyboard on input element
    function handleChange(e){
        setValue(e.target.value);
        notesIsValid();
    }

    //Check valid notes
    function notesIsValid () {
        if(inputContent === ''){       
            requiredClassName += ' active--';
            fieldClassName += ' invalid--';
            props.setValidNotes(0);
        }
        else{
            requiredClassName = 'field-error';
            fieldClassName = 'field';   
            props.setValidNotes(1);
        }
    }

    //Before render, call this function will check input result
    notesIsValid();

    return (
        <div class="grid__block full--">
            <label>
                <div className="field-label">
                    Notes*
                </div>

                <div className="field-value"
                     style={{
                         display: props.displayMode === 'none' ? ' ' : 'none'  
                         }}>
                    {value}
                </div>

                <textarea
                    name="notes"
                    className={fieldClassName}
                    style={{ display: props.displayMode }}
                    id="notes"
                    onChange={function(e) 
                        {handleChange(e)
                    }}>
                    {value}</textarea>

                <div class={requiredClassName} id="notesRequired">
                    Notes is required.
                </div>
            </label>
        </div>
    )
}

export default TextAreaElement;