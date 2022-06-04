import formStyle from './components/form-styling.js'
import { formBehaviors } from './components/form-behavior.js';
import actionDueDateButton from './components/due-date-input.js';
import actionAddTask from './components/add-button.js';
import actionCloseForm from './components/close-button.js';



const form = (function(){

    const initialDisplayValues = function(){
        formStyle.initialComponentsStyle(); 
    }

    const initialDefaultParameters = function(){
        formBehaviors.resetForm(); 
    }

    const EditFormParameters = function(containerNumber){
        formBehaviors.loadEditValues(containerNumber);
   }

    const formButtonsFunctionality = function(){
        actionDueDateButton.buttonFunctionality(); 
        actionAddTask.addTaskButtonFunctionality();
        actionCloseForm.cancelButtonFunctionality();
    }

    const formEditButtonsFunctionality = function(){
        actionAddTask.updateTaskButtonFunctionality();
        actionCloseForm.cancelButtonFunctionality();
    }

return { initialDisplayValues, initialDefaultParameters, formButtonsFunctionality, EditFormParameters, formEditButtonsFunctionality }
})()

export default form 