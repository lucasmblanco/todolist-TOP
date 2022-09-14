import form from "../form-functionality";

const actionCloseForm = (function(){
    const cancelButton = document.querySelector('#button-cancel-form'); 

    const cancelButtonFunctionality = function(){
         cancelButton.addEventListener('click', closeForm); 
    }

    function closeForm(e){
        e.preventDefault();
        form.initialDefaultParameters();
        form.deactivateDisplayValues();  
        form.enableSecondaryForm();
    }

    return { cancelButtonFunctionality }
})(); 


// -- PROJECT FORM --

const actionCloseFormProject = (function(){

    const cancelButton = document.querySelector('#button-cancel-form-project');
    const formProject = document.querySelector('form#form-projects');

    const cancelButtonFunctionality = function(){
        cancelButton.addEventListener('click', closeForm); 
    }

    function closeForm(e){
        e.preventDefault();
        formProject.reset(); 
        form.deactivateDisplayValues();
        form.activateMainForm(); 
    }

    return { cancelButtonFunctionality }

})()


export {actionCloseForm, actionCloseFormProject} 