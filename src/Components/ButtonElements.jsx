import React, { useState } from "react";

function ButtonElements(props) { 
    const [showButton, setShowButton] = useState(true);

    //Handle event when click EDIT button
    function handleEdit(e) {
        e.preventDefault();
        setShowButton(false);
        props.setDisplayMode('');
    }

    //Handle event when click SAVE button
    function handleSave(e) {
        e.preventDefault();
        if(props.isUpdateForm === true){   
            //Save the change
            setShowButton(true);
            props.setDisplayMode('none');
        }
        else{
            //Do note something
        }  
    }    

    return (
        <div className="grid__block full--   ta-c">
            {showButton ?
                <button type="button"
                    className="button secondary--"
                    id="edit"
                    onClick={function(e){
                        handleEdit(e)
                    }}>
                    EDIT
                </button>
                :
                <button type="submit"
                    className="button"
                    id="submit"
                    style={{ display: '' }}
                    onClick={function(e){
                        handleSave(e)
                    }}>
                    SAVE
                </button>
            }
        </div>
    )
}

export default ButtonElements; 