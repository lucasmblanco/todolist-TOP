import inputData from "../../data-managment/components/data-catcher";
import actionDueDateButton from "./due-date-input";
import { format } from 'date-fns'
import priorityInputBehavior from "./priority-input";


const formBehaviors = (function(){
    const form = document.querySelector('form#formAddTask');

    const resetForm = function(){
        form.reset();
    }

   const loadEditValues = function(containerNumber){
  
    const titleInput = document.querySelector('input#title'); 
    const detailsTextarea = document.querySelector('textarea#details'); 
    const dateInput = document.querySelector('input#due-date'); 


    form.setAttribute('data-number-container-edit', containerNumber);

    titleInput.value = (inputData.mainList.allItems())[containerNumber].title;
    detailsTextarea.value = (inputData.mainList.allItems())[containerNumber].details;
    actionDueDateButton.displayDueDateEdit((inputData.mainList.allItems())[containerNumber].dueDate); 
    dateInput.value = format(new Date(inputData.mainList.allItems()[containerNumber].date.split('/').reverse().join("-") + "T00:00:00"), 'yyyy-MM-dd'); 
    priorityInputBehavior.EditStatus((inputData.mainList.allItems())[containerNumber].priority); 
  };


    return { resetForm, loadEditValues }
})();

export { formBehaviors } 