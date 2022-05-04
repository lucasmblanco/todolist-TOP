import getDataForm from "./data-managment.js";

const containerForm = document.querySelector('div.page-dimmer'); 
const formItem = document.querySelector('form#formAddTask');

const defaultBehaviorFormButtons = function(e) {
    e.preventDefault();
    containerForm.style.display = 'none';
}

const actionAddTask = (function(){
   const addTaskButtonFunctionality = function() {
        formItem.addEventListener('submit', addNewTask); 
    }

    function addNewTask(e){
       getDataForm(); 
       defaultBehaviorFormButtons(e);    
    }

    return { addTaskButtonFunctionality }
})();

const actionCloseForm = (function(){
    const cancelButton = document.querySelector('#button-cancel-form'); 
    const cancelButtonFunctionality = function(){
         cancelButton.addEventListener('click', closeForm); 
    }

    function closeForm(e){
        defaultBehaviorFormButtons(e);
        formItem.reset(); 
    }

    return { cancelButtonFunctionality }
})(); 

const formFunctionality = (function() {
    const buttonAddNewTask = document.querySelector('button#new-task'); 
    const readyToShowForm = function() {
        buttonAddNewTask.addEventListener('click',  activateForm);
    }

    function activateForm() {
        containerForm.style.display = 'block';
        actionAddTask.addTaskButtonFunctionality();
        actionCloseForm.cancelButtonFunctionality(); 
    }

    return { readyToShowForm }
})(); 




export { formFunctionality }


