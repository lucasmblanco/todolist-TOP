import form from '../../form/form-functionality.js';

const buttonNewTask = (function(){
    const buttonAddNewTask = document.querySelector('button#new-task'); 

    const buttonAddNewTaskFunctionality = function() {
        buttonAddNewTask.addEventListener('click',  displayForm);
    }


    function displayForm() {
        form.initialDisplayValues(); 
        form.initialDefaultParameters();
        form.formButtonsFunctionality(); 
    }

    return { buttonAddNewTaskFunctionality }

})(); 

export default buttonNewTask