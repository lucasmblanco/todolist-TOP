import {inputData, inputDataProject} from "../../data-managment/components/data-catcher";
import actionDueDateButton from "./due-date-input";
import { format } from 'date-fns'
import priorityInputBehavior from "./priority-input";


const formBehaviors = (function(){
    const form = document.querySelector('form#formAddTask');
    const formProjects = document.querySelector('form#form-projects'); 

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
    if(!((inputData.mainList.allItems())[containerNumber].dueDate === 'No')) {
    dateInput.value = format(new Date(inputData.mainList.allItems()[containerNumber].date.split('/').reverse().join("-") + "T00:00:00"), 'yyyy-MM-dd'); 
    }
    priorityInputBehavior.EditStatus((inputData.mainList.allItems())[containerNumber].priority); 
  };


   const loadEditValuesTaskProjects = function(containerNumber, taskNumber){
      const titleInput = document.querySelector('input#title'); 
      const detailsTextarea = document.querySelector('textarea#details'); 
      const dateInput = document.querySelector('input#due-date'); 

     // console.log(containerNumber); 
     // console.log(inputDataProject.projects); 

      //console.log(inputDataProject.projects[containerNumber]); 

      form.setAttribute('data-number-container-edit', taskNumber);

      titleInput.value = (inputDataProject.projects[containerNumber].allItems())[taskNumber].title;
      detailsTextarea.value = (inputDataProject.projects[containerNumber].allItems())[taskNumber].details;
      actionDueDateButton.displayDueDateEdit((inputDataProject.projects[containerNumber].allItems())[taskNumber].dueDate); 
      if(!((inputDataProject.projects[containerNumber].allItems())[taskNumber].dueDate === 'No')) {
      dateInput.value = format(new Date(inputDataProject.projects[containerNumber].allItems()[taskNumber].date.split('/').reverse().join("-") + "T00:00:00"), 'yyyy-MM-dd'); 
      }
      priorityInputBehavior.EditStatus((inputDataProject.projects[containerNumber].allItems())[taskNumber].priority); 
   }

   const loadEditValuesProjects = function(projectNumber){
     
    const titleProject = document.querySelector('input#title-project'); 
    const allInputColors = document.querySelectorAll('div.input-checkbox-color'); 
    const containerColorPicker = document.querySelector('div.button-container-color-picker');
    const containerColorPickerLastChild = containerColorPicker.lastChild; 
    const colorPickerParent = containerColorPickerLastChild.parentNode; 

    formProjects.setAttribute('data-number-project-edit', projectNumber);

    titleProject.value = inputDataProject.projects[projectNumber]._listName;
    allInputColors.forEach(function(input){
      if(input.value === inputDataProject.projects[projectNumber]._themeColor){
        colorPickerParent.replaceChild(input.parentNode, containerColorPickerLastChild); 
      }

    })



   }
    return { resetForm, loadEditValues, loadEditValuesTaskProjects, loadEditValuesProjects }
})();

export { formBehaviors } 