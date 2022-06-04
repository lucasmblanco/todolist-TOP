import {formBehaviors} from "./form-behavior";
import formStyle from "./form-styling";
import inputData from "../../data-managment/components/data-catcher";

const actionAddTask = (function(){
    const formElement = document.querySelector('form#formAddTask');
   // const dueDateInput = document.querySelector('input[name="dueDate"]'); 

    const addTaskButtonFunctionality = function() {
        formElement.removeEventListener('submit', updateTask)
         formElement.addEventListener('submit', addNewTask); 
     }
 
     function addNewTask(e){
         inputData.grabInputDataAndDisplay(); 
         e.preventDefault();
        formBehaviors.resetForm();
        formStyle.deactivateInitialComponentsStyle();
        
     }

     const updateTaskButtonFunctionality = function(){
        formElement.removeEventListener('submit', addNewTask); 
         formElement.addEventListener('submit', updateTask)
     }

     function updateTask(e){
         inputData.grabNewInformationAndSave(e.target.dataset.numberContainerEdit);
         e.preventDefault();
         formBehaviors.resetForm();
        formStyle.deactivateInitialComponentsStyle();
     }
 
     return { addTaskButtonFunctionality, updateTaskButtonFunctionality }
 })();

export default actionAddTask
  