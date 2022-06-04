import {formBehaviors} from "./form-behavior";
import formStyle from "./form-styling";

const actionCloseForm = (function(){
    const cancelButton = document.querySelector('#button-cancel-form'); 
    const cancelButtonFunctionality = function(){
         cancelButton.addEventListener('click', closeForm); 
    }

    function closeForm(e){
        e.preventDefault();
        formBehaviors.resetForm();
        formStyle.deactivateInitialComponentsStyle(); 
        
    }

    return { cancelButtonFunctionality }
})(); 

export default actionCloseForm