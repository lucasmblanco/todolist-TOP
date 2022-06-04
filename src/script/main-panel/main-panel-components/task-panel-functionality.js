import inputData from "../../data-managment/components/data-catcher";
import form from "../../form/form-functionality";
import taskPanel from "./task-panel";

const panelsButtonsFunctionality = (function(){

    const buttonsFunctionality = function(){
        const containersPanel = document.getElementsByClassName('container-panel');
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
                } else {
                        containersPanel[e.target.dataset.numberButtonDone].classList.add('task-panel-done'); 
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
                form.EditFormParameters(e.target.dataset.numberButtonEdit); 
                form.formEditButtonsFunctionality(); 
                
            }

            
    }

return { buttonsFunctionality }
})()

export default panelsButtonsFunctionality 