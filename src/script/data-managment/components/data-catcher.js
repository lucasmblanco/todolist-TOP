import { format } from 'date-fns'
import taskPanel from '../../main-panel/main-panel-components/task-panel';
import dataStorage from './data-storage';

const inputData = (function() {
    const todayInfoDate = format(new Date(), 'dd/MM/yyyy');  

    const wrapper = document.querySelector('div#form-task')
    const form = wrapper.querySelector('form'); 


    const _title = form.querySelector('input[id="title"]'); 
    const _details = form.querySelector('textarea[id="details"]');
    const _dueDateElectionArr = form.querySelectorAll('input[class="due-date-election"]'); 
    const _dueDate = form.querySelector('input[id="due-date"]'); 
    const _priorityArr = form.querySelectorAll('input[class="priority-task"]'); 

    let _priorityVal; 
    let _dueDateElectionVal; 

  
    const mainList = new dataStorage.TodoList(); 


    function getPriorityStatus() {
        for(let i = 0; i < _priorityArr.length; i++){
            if(_priorityArr[i].checked) {
                _priorityVal = _priorityArr[i].value; 
            }
        } 
    }

    function getElectionDueDate(){
        for(let i = 0; i < _dueDateElectionArr.length; i++){
            if(_dueDateElectionArr[i].checked) {
                _dueDateElectionVal = _dueDateElectionArr[i].value; 
            }
        } 
    }

    const grabInputDataAndDisplay = function(){
        getPriorityStatus();
        getElectionDueDate(); 
        addObjectToList();
        showLastObject();
        mainList.addDataNumberToElements();
        mainList.addButtonFuntionality();
    }

    const addObjectToList = function(){
        mainList.newItem(_title.value, _details.value, _dueDateElectionVal, _dueDate.value, _priorityVal);
    }

    const showLastObject = function(){
        const mainWindow = document.querySelector('div#main-window'); 
        if(mainWindow.classList.contains('main-window-home')) {  
        (mainList.allItems()).forEach(function(item, idx, array){ 
            if(idx === array.length - 1) mainList.showItemn(item);
        })
        } else if(mainWindow.classList.contains('main-window-upcoming')) {

        }
    }


    const displayAllObjects = function(){
        (mainList.allItems()).forEach(function(item){ 
            
            mainList.showItemn(item)
           // mainList.evaluateStatus(item); 
            mainList.addDataNumberToElements();
            mainList.addButtonFuntionality();
        }); 
    }

    const displayAllObjectWithTodayDate = function(){
        const mainWindow = document.querySelector('div.main-window-today'); 
        const containerPanel = document.querySelectorAll('div.container-panel'); 
        containerPanel.forEach(function(panel){
            panel.classList.remove('panel-disabled'); 
            let date = panel.querySelector('div.due-date'); 
            if(!(date.textContent === todayInfoDate)){
                mainWindow.append(panel); 
                panel.classList.add('panel-disabled'); 
            } else {
                mainWindow.append(panel); 
            }
        })
    }

   
    function displayObjectInElement() {

        const containerPanel = document.querySelectorAll('div.container-panel'); 
        const containerDateInformation = document.querySelectorAll('div.container-date-information');
        containerPanel.forEach(function(panelOfContainer){
            const date = panelOfContainer.querySelector('div.due-date');  
            for(let i = 0; i < containerDateInformation.length; i++){
                const panelWithDate = containerDateInformation[i].querySelector('div.date-information');
                const panelEmpty = containerDateInformation[i].querySelector('div.container-task'); 
                if(!(panelWithDate.textContent === date.textContent)){
                    panelOfContainer.classList.add('panel-disabled');
                } else {
                    panelOfContainer.classList.remove('panel-disabled'); 
                    panelEmpty.append(panelOfContainer);
                    break;
                }
            }}
         )}

    function deleteItems(task){
        mainList.deleteItems(task); 
    }

    const grabNewInformationAndSave = function(containerNumber){
        getPriorityStatus(); // toma volor del form
        getElectionDueDate(); // toma valor del form 
        updateInformation(containerNumber); // updatea el objeto 
        taskPanel.refreshInfo((mainList.allItems())[containerNumber].title, (mainList.allItems())[containerNumber].details, (mainList.allItems())[containerNumber]._date,(mainList.allItems())[containerNumber].priority, containerNumber); 
    } 


    const updateInformation = function(containerNumber){
        (mainList.allItems())[containerNumber].title = _title.value;
        (mainList.allItems())[containerNumber].details = _details.value;
        (mainList.allItems())[containerNumber].dueDate = _dueDateElectionVal; 
        if(_dueDateElectionVal === 'No'){
            delete (mainList.allItems())[containerNumber]._date
        } else {
            (mainList.allItems())[containerNumber].date = _dueDate.value;
        }
        
        (mainList.allItems())[containerNumber].priority = _priorityVal; 
        
    }

    const doneStatus = function(containerNumber, status){
       (mainList.allItems())[containerNumber].complete = status;  
      // console.table((mainList.allItems())[containerNumber]); 
    }

 return { grabInputDataAndDisplay, displayAllObjects, displayAllObjectWithTodayDate, displayObjectInElement, deleteItems, mainList, grabNewInformationAndSave, doneStatus }

})(); 


const inputDataProject = (function(){
    const wrapper = document.querySelector('div#form-task')
    const form = wrapper.querySelector('form'); 
    const inputNameProject = document.querySelector('input#title-project'); 
    const projects = []; 

    const _title_TaskProject = form.querySelector('input[id="title"]'); 
    const _details_TaskProject = form.querySelector('textarea[id="details"]');
    const _dueDateElectionArr_TaskProject = form.querySelectorAll('input[class="due-date-election"]'); 
    const _dueDate_TaskProject = form.querySelector('input[id="due-date"]'); 
    const _priorityArr_TaskProject = form.querySelectorAll('input[class="priority-task"]'); 

    let _priorityVal_TaskProject; 
    let _dueDateElectionVal_TaskProject; 


    function getPriorityStatus() {
        for(let i = 0; i < _priorityArr_TaskProject.length; i++){
            if(_priorityArr_TaskProject[i].checked) {
                _priorityVal_TaskProject = _priorityArr_TaskProject[i].value; 
            }
        } 
    }

    function getElectionDueDate(){
        for(let i = 0; i < _dueDateElectionArr_TaskProject.length; i++){
            if(_dueDateElectionArr_TaskProject[i].checked) {
                _dueDateElectionVal_TaskProject = _dueDateElectionArr_TaskProject[i].value; 
            }
        } 
    }

    const createNewList = function(){
        const inputColorProject = document.querySelector('input.checkbox-color');
        const newProject = new dataStorage.TodoList(inputNameProject.value, inputColorProject.value); 
        projects.push(newProject); 
        return newProject 
    }

    const showLastObjectOfList = function(list){
        (list.allItems()).forEach(function(item, idx, array){ 
            if(idx === array.length - 1) list.showItemn(item);
        }); 
    }


    const addTaskToList = function(list){
        list.newItem(_title_TaskProject.value, _details_TaskProject.value, _dueDateElectionVal_TaskProject, _dueDate_TaskProject.value, _priorityVal_TaskProject);
    }

    const displayAllObjectsOfList = function(elementNumber){
        (projects[elementNumber].allItems()).forEach(function(item){ 
            projects[elementNumber].showItemn(item)
            projects[elementNumber].addDataNumberToElements(elementNumber);
            projects[elementNumber].addButtonFuntionalityTaskProjects();
          //  console.log('bro'); 
        }); 
    }


    const createTaskOfProject = function(elementNumber){
        //console.log(elementNumber); 
        getPriorityStatus();
        getElectionDueDate();
       
        addTaskToList(projects[elementNumber])
      // console.log(projects[elementNumber].allItems()); 
        showLastObjectOfList(projects[elementNumber]);
        projects[elementNumber].addDataNumberToElements(elementNumber);
        projects[elementNumber].addButtonFuntionalityTaskProjects(); 
        //- Lista que lo llamó, cree task y la agregue 
        // - visualizar esa task en el correcto window 

    }


    const grabNewInformationAndSaveInProject = function(elementNumber, taskNumber){
        
        getPriorityStatus(); // toma volor del form
        getElectionDueDate(); // toma valor del form 
        updateInformation(elementNumber, taskNumber); // updatea el objeto 
        taskPanel.refreshInfo((projects[elementNumber].allItems())[taskNumber].title, (projects[elementNumber].allItems())[taskNumber].details, (projects[elementNumber].allItems())[taskNumber]._date,(projects[elementNumber].allItems())[taskNumber].priority, taskNumber); 
    } 


    const updateInformation = function(containerNumber, taskNumber){
        (projects[containerNumber].allItems())[taskNumber].title = _title_TaskProject.value;
        (projects[containerNumber].allItems())[taskNumber].details =_details_TaskProject.value;
        (projects[containerNumber].allItems())[taskNumber].dueDate = _dueDateElectionVal_TaskProject; 
        if(_dueDateElectionVal_TaskProject === 'No'){
            delete (projects[containerNumber].allItems())[taskNumber]._date
        } else {
            (projects[containerNumber].allItems())[taskNumber].date = _dueDate_TaskProject.value;
        }
        
        (projects[containerNumber].allItems())[taskNumber].priority = _priorityVal_TaskProject; 
        
    }



    function deleteItemsOfProject(containerNumber, taskNumber){
    	projects[containerNumber].deleteItems(taskNumber); 
    }

    const doneStatusInProject = function(containerNumber, taskNumber, status){
        (projects[containerNumber].allItems())[taskNumber].complete = status;  
       // console.table((mainList.allItems())[containerNumber]); 
     }

     const grabNewProjectInfoAndSave = function(projectNumber){
        const inputColorProject = document.querySelector('input.checkbox-color');
       // console.table(projectNumber); 
       // console.table(projects)
       // console.table(projects[projectNumber]); 
        projects[projectNumber]._listName = inputNameProject.value; 
        projects[projectNumber]._themeColor = inputColorProject.value; 

        return projects[projectNumber] 

     }
return { createNewList, projects, createTaskOfProject, displayAllObjectsOfList, grabNewInformationAndSaveInProject,  deleteItemsOfProject, doneStatusInProject, grabNewProjectInfoAndSave}

})();


export { inputData, inputDataProject } 