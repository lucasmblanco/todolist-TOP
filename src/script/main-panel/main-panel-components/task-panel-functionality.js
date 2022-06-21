import {inputData, inputDataProject} from "../../data-managment/components/data-catcher";
import form from "../../form/form-functionality";
import taskPanel from "./task-panel";

const panelsButtonsFunctionality = (function(){

    const buttonsFunctionality = function(){
        const containersPanel = document.querySelectorAll('div.container-panel');
        const taskDoneButton = document.querySelectorAll('input.check-button'); 
        const taskEditButton = document.querySelectorAll('button.edit-button');
        const taskDeleteButton = document.querySelectorAll('button.delete-button'); 
            
            taskDeleteButton.forEach(function(button){
                if(!button.getAttribute('listener-delete')){
                        button.setAttribute('listener-delete', 'true'); 
                        button.addEventListener('click', deleteFunctionality);
                }
            })
            
            function deleteFunctionality(e){
                containersPanel[e.target.dataset.numberButton].remove(); 
                inputData.deleteItems(e.target.dataset.numberButton);
                taskPanel.addDataNumber();
        }

            taskDoneButton.forEach(function(button) {
                if(!button.getAttribute('listener-done')){
                        button.setAttribute('listener-done', 'true'); 
                        button.addEventListener('click', doneFunctionality);
                }
            })

            function doneFunctionality(e){
               if(containersPanel[e.target.dataset.numberButtonDone].classList.contains('task-panel-done')) {
                        containersPanel[e.target.dataset.numberButtonDone].classList.remove('task-panel-done'); 
                        inputData.doneStatus(e.target.dataset.numberButtonDone, 'No'); 
                        taskDeleteButton.forEach(button => button.disabled = false); 
                        taskEditButton.forEach(button => button.disabled = false); 
                } else {
                        containersPanel[e.target.dataset.numberButtonDone].classList.add('task-panel-done'); 
                        inputData.doneStatus(e.target.dataset.numberButtonDone, 'Yes'); 
                        taskDeleteButton.forEach(button => button.disabled = true); 
                        taskEditButton.forEach(button => button.disabled = true); 
                        
                }   
        }

            taskEditButton.forEach(function(button){
                    if(!button.getAttribute('listener-edit')) {
                        button.setAttribute('listener-edit', 'true'); 
                        button.addEventListener('click', editFunctionality)
                    }
            })

            function editFunctionality(e){
                form.initialDisplayValues();
                form.EditFormParameters(e.target.dataset.numberButtonEdit); // carga info del panel en el form 
                form.formEditButtonsFunctionality(); // agrega funcionalidad nueva en el form referido a edit 
                form.disableSecondaryForm();
            }

            
    }

return { buttonsFunctionality }
})()


const panelsButtonsFunctionalityTaskProjects = (function(){

    const buttonsFunctionality = function(){
        const containersPanel = document.querySelectorAll('div.container-panel');
        const taskDoneButton = document.querySelectorAll('input.check-button'); 
        const taskEditButton = document.querySelectorAll('button.edit-button');
        const taskDeleteButton = document.querySelectorAll('button.delete-button'); 
            
            taskDeleteButton.forEach(function(button){
                if(!button.getAttribute('listener-delete')){
                        button.setAttribute('listener-delete', 'true'); 
                        button.addEventListener('click', deleteFunctionality);
                }
            })
            
            function deleteFunctionality(e){
                
                containersPanel[e.target.dataset.numberButton].remove(); 

                inputDataProject.deleteItemsOfProject(e.target.dataset.numberProject, e.target.dataset.numberButton);


                taskPanel.addDataNumber();
        }

            taskDoneButton.forEach(function(button) {
                if(!button.getAttribute('listener-done')){
                        button.setAttribute('listener-done', 'true'); 
                        button.addEventListener('click', doneFunctionality);
                }
            })

            function doneFunctionality(e){
               if(containersPanel[e.target.dataset.numberButtonDone].classList.contains('task-panel-done')) {
                        containersPanel[e.target.dataset.numberButtonDone].classList.remove('task-panel-done');
                        inputDataProject.doneStatusInProject(e.target.dataset.numberProject, e.target.dataset.numberButtonDone, 'No')
                        taskDeleteButton[e.target.dataset.numberButtonDone].disabled = false; 
                        taskEditButton[e.target.dataset.numberButtonDone].disabled = false;  

                } else {
                        containersPanel[e.target.dataset.numberButtonDone].classList.add('task-panel-done'); 
                        inputDataProject.doneStatusInProject(e.target.dataset.numberProject, e.target.dataset.numberButtonDone, 'Yes')
                        taskDeleteButton[e.target.dataset.numberButtonDone].disabled = true; 
                        taskEditButton[e.target.dataset.numberButtonDone].disabled = true; 
                }
        }

            taskEditButton.forEach(function(button){
                    if(!button.getAttribute('listener-edit')) {
                        button.setAttribute('listener-edit', 'true'); 
                        button.addEventListener('click', editFunctionality)
                    }
            })

            function editFunctionality(e){
                form.disableSecondaryForm();
                form.initialDisplayValues();
                form.EditFormParametersTaskProjects(e.target.dataset.numberProject, e.target.dataset.numberButtonEdit); // carga info del panel en el form 
                form.formEditButtonsFunctionalityOfProjects(); // agrega funcionalidad nueva en el form referido a edit 
               
            }

            
    }

return { buttonsFunctionality }

})();



export { panelsButtonsFunctionality, panelsButtonsFunctionalityTaskProjects }  