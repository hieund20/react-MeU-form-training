import React from "react";
import Grid from "./Grid";

//Container nam trong header
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