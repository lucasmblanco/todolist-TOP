import { inputData }  from "./data-managment.js";
import { storageData } from "./data-managment.js";
import { format, addDays, eachDayOfInterval, } from 'date-fns';

const containerForm = document.querySelector('div.page-dimmer'); 
const formItem = document.querySelector('form#formAddTask');


// --- ADD TASK BUTTON --- 

/*
const defaultBehaviorFormButtons = function(e) {
    e.preventDefault();
    containerForm.classList.remove('page-dimmer-activated');
    containerForm.classList.add('page-dimmer');
}

const actionAddTask = (function(){
   const addTaskButtonFunctionality = function() {
        formItem.addEventListener('submit', addNewTask); 
    }

    function addNewTask(e){
        if(actionDueDateButton.dueDateInput.disabled) {
            inputData.getAndCreate(); 
        } else {
            inputData.getAndCreateWithDate();
        }
       defaultBehaviorFormButtons(e);  
       formItem.reset();   
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


const actionDueDateButton = (function(){
    const dueDateOptions = document.querySelectorAll('input[name="dueDateElection"]'); // input "yes" and "no" 
    const dueDateContainer = document.querySelector('div.dueDateElection'); // container of input "yes/no"
    const dueDateInput = document.querySelector('input[name="dueDate"]'); // input date 
    const today = new Date().toISOString().split('T')[0];
   
    const buttonFunctionality = function() {
    dueDateOptions.forEach(option => option.addEventListener('click', displayDueDate))

    }

    function displayDueDate(e){
        if (e.target.value === 'Yes'){
            dueDateContainer.style.visibility = 'visible';
            dueDateInput.setAttribute('min', today);
            dueDateInput.disabled = false; 

        } else {
            dueDateContainer.style.visibility = 'hidden'; 
            dueDateInput.disabled = true; 
            dueDateInput.value = ''; 
        }

    }


    return  { buttonFunctionality, dueDateInput }
})();



const formFunctionality = (function() {
    const buttonAddNewTask = document.querySelector('button#new-task'); 
    const dueDateContainer = document.querySelector('div.dueDateElection'); 
    const readyToShowForm = function() {
        buttonAddNewTask.addEventListener('click',  activateForm);
    }

    function activateForm() {
        containerForm.classList.remove('page-dimmer');
        containerForm.classList.add('page-dimmer-activated');
       // dueDateContainer.style.visibility = 'hidden'; 
        formItem.reset();
        actionDueDateButton.buttonFunctionality(); 
        actionAddTask.addTaskButtonFunctionality();
        actionCloseForm.cancelButtonFunctionality(); 
    }

    return { readyToShowForm }
})(); 


*/ 



/*
// --- HOME BUTTON ---

const homeButtonFunctionality = (function(){
    const homeButton = document.querySelector('a#button-home');
    const pageFrame = document.querySelector('div#page-frame'); 
    const mainPage = document.querySelector('div#main-window');

    const buttonHomeAction = function() {
    homeButton.addEventListener('click', buttonFunctionality); 
    }

    function buttonFunctionality(){
        if(mainPage.classList.contains('main-window-home')) return
        setHomeStyle();
        showTasks();
    }
    
    function setHomeStyle(){
        pageFrame.textContent = 'HOME';
        pageFrame.classList.remove('page-frame-today');
        mainPage.classList.remove('main-window-today');
        pageFrame.classList.add('page-frame-home');
        mainPage.classList.add('main-window-home');
    }

    function showTasks(){
        while(mainPage.firstChild && mainPage.removeChild(mainPage.firstChild));
        const allTasksArray = storageData.tasks.concat(storageData.tasksWithDueDate);
        for(let i = 0; i < allTasksArray.length; i++){
            if(allTasksArray[i].hasOwnProperty('_dueDate')){
                allTasksArray[i].createTaskPanelWithDate(); 
            } else {
                allTasksArray[i].createTaskPanel(); 
            }
        }
    }

    return { buttonHomeAction }
})();

*/

// --- TODAY BUTTON ---

const todayButtonFunctionality = (function(){
    const buttonToday = document.querySelector('a#button-today'); 
    const pageFrame = document.querySelector('div#page-frame'); 
    const mainPage = document.querySelector('div#main-window'); 
    const todayInfoDate = format(new Date(), 'dd/MM/yyyy'); 

    const buttonTodayAction = function() {
        buttonToday.addEventListener('click', buttonFunctionality); 
    }

    function buttonFunctionality(){
        if(mainPage.classList.contains('main-window-today')) return
        addStyleToday();
        displayTodayTasks(); 

    }


    const displayTodayTasks = function(){
       while(mainPage.firstChild && mainPage.removeChild(mainPage.firstChild));

        for(let i = 0; i < storageData.tasksWithDueDate.length; i++){
            if(storageData.tasksWithDueDate[i]._dueDate === todayInfoDate) {
                 storageData.tasksWithDueDate[i].createTaskPanelWithDate(); 
           }
        }

    }

    function addStyleToday(){
        pageFrame.textContent = `TODAY (${todayInfoDate})`;
        mainPage.classList.remove('main-window-home') 
        mainPage.classList.add('main-window-today'); 
        pageFrame.classList.remove('page-frame-home');
        pageFrame.classList.add('page-frame-today'); 
    }

    return { buttonTodayAction }
})();


// --- UPCOMING BUTTON --- 





// --- PANEL CREATION ---

const taskPanel = (function(){

    const createTaskPanel = function(){
            const mainPage = document.querySelector('div#main-window'); 
            const containerPanel = document.createElement('div');
            containerPanel.classList.add('container-panel'); 

            const containerTitle = document.createElement('div'); 
            containerTitle.classList.add('container-title'); 
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('title'); 
            titleDiv.textContent = this.title; 
            containerTitle.append(titleDiv);

            const containerDetails = document.createElement('div');
            containerDetails.classList.add('container-details');
            const detailsDiv = document.createElement('div'); 
            detailsDiv.classList.add('details');
            detailsDiv.textContent = this.details; 
            containerDetails.append(detailsDiv); 

            const containerPriority = document.createElement('div');
            containerPriority.classList.add('container-priority');  
            const priorityDiv = document.createElement('div');
            priorityDiv.classList.add('priority'); 
            priorityDiv.textContent = this.priority; 
            containerPriority.append(priorityDiv); 

            containerPanel.append(containerTitle, containerDetails, containerPriority); 
            mainPage.appendChild(containerPanel); 

            const containerCheckButton = document.createElement('div');
            containerCheckButton.classList.add('container-check'); 
        
            const checkButton = document.createElement('input'); 
            checkButton.setAttribute('type', 'checkbox');
            checkButton.classList.add('check-button'); 
            containerCheckButton.append(checkButton); 
        
            containerPanel.insertBefore(containerCheckButton, containerTitle); 
        
        
            const containerEditButton = document.createElement('div'); 
            containerEditButton.classList.add('container-edit');
        
            const editButton = document.createElement('button'); 
            const iElementEditButton = document.createElement('i'); 
        
            iElementEditButton.classList.add('edit-button-icon'); 
            editButton.append(iElementEditButton); 
            containerEditButton.appendChild(editButton)
        
        
            const containerDeleteButton = document.createElement('div');
            containerDeleteButton.classList.add('container-delete');
        
            const deleteButton = document.createElement('button');
            const iElementDeleteButton = document.createElement('i');
        
            iElementDeleteButton.classList.add('delete-button-icon');
            deleteButton.append(iElementDeleteButton);
            containerDeleteButton.appendChild(deleteButton); 
        
            containerPanel.append(containerEditButton, containerDeleteButton); 
    }

})()


//export { formFunctionality, homeButtonFunctionality, todayButtonFunctionality, upcomingButtonFunctionality }

  
