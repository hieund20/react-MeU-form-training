import React, { useState } from "react";

function RequiredInvalidInput(props){
    const [value, setValue] = useState(props.defaultValue);
    const [inputContent, setInputContent] = useState(props.defaultValue);
    const [clickedElement, setClickedElement] = useState("");

    //eslint-disable-next-line
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var contactRegex = /^\d{8,12}$/;


    //Handle event when input from keyboard on input element
    function handleChange(e){
        setValue(e.target.value);
        setInputContent(e.target.value);
    }

    //Handle event when click on input element
    function handleClick(e){
        if(e.target.name === 'email'){
            setClickedElement('email');
        }        
        else if(e.target.name === 'contact')
            setClickedElement('contact');
    }
    
    //Check valid mail and contact 
    function mailAndContactIsValid(){
        if(clickedElement === 'email'){
            if(inputContent === ''){  
                document.getElementById(props.id).classList.add('invalid--');  
                document.getElementById(props.required).classList.add('active--');
                document.getElementById(props.invalid).classList.remove('active--');   
                props.setValidMail(0);
                return;
            }
            else if (!emailRegex.test(inputContent)){
                document.getElementById(props.id).classList.add('invalid--');  
                document.getElementById(props.required).classList.remove('active--');
                document.getElementById(props.invalid).classList.add('active--');
                props.setValidMail(0);
                return;
            }
            else{
                document.getElementById(props.id).classList.remove('invalid--');  
                document.getElementById(props.required).classList.remove('active--');
                document.getElementById(props.invalid).classList.remove('active--');
                
                props.setValidMail(1);
            }
        }  
        else if(clickedElement === 'contact'){
            if(inputContent === ''){  
                document.getElementById(props.id).classList.add('invalid--');  
                document.getElementById(props.required).classList.add('active--');
                document.getElementById(props.invalid).classList.remove('active--'); 
                props.setValidContact(0); 
                return; 
            }
            else if (!contactRegex.test(inputContent)){
                document.getElementById(props.id).classList.add('invalid--');  
                document.getElementById(props.required).classList.remove('active--');
                document.getElementById(props.invalid).classList.add('active--');
                props.setValidContact(0);
                return;
            }
            else{
                document.getElementById(props.id).classList.remove('invalid--');  
                document.getElementById(props.required).classList.remove('active--');
                document.getElementById(props.invalid).classList.remove('active--');
                
                props.setValidContact(1);
            }
        }          
    }

    //Before render, call this function will check input result
    mailAndContactIsValid();
  
    return (
        <div className="grid__block">
            <label>
                <div className="field-label">
                    {props.label}
                </div>

                <div className="field-value"
                     style={{
                         display: props.displayMode === 'none' ? ' ' : 'none' 
                         }}>
                    {value}
                </div>

                <input type={props.type}
                    className="field"
                    name={props.name}
                    value={value}
                    style={{ display: props.displayMode }}
                    id={props.id} 
                    onChange={function(e){
                        handleChange(e)
                    }}
                    onClick={function(e){
                        handleClick(e)
                    }}/>
                <div className="field-error" 
                     id={props.required}>
                    {props.requiredContent}
                </div>

                <div className="field-error" 
                     id={props.invalid}>
                    {props.invalidContent}
                </div>
            </label>
        </div>
    )
}

export default RequiredInvalidInput;
