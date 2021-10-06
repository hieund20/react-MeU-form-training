import React from "react";
import Grid from "./Grid";

//Container component
function FormContainer() {
    return(
        <div className="container">
            <form noValidate id="detailsForm">
                <Grid />
            </form>
        </div>
    )
}
    

export default FormContainer;