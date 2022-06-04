import { format, startOfToday, parseISO } from 'date-fns'




const inputData = (function() {
    const wrapper = document.querySelector('div#form-task')
    const form = wrapper.querySelector('form'); 


    const _title = form.querySelector('input[id="title"]'); 
    const _details = form.querySelector('textarea[id="details"]');
    const _dueDate = form.querySelector('input[id="due-date"]'); 
    const _priorityArr = form.querySelectorAll('input[class="priority-task"]'); 
    let _priorityVal; 

    function getPriorityStatus() {
        for(let i = 0; i < _priorityArr.length; i++){
            if(_priorityArr[i].checked) {
                _priorityVal = _priorityArr[i].value; 
            }
        } 
    }

    class Task {
        constructor(title, details, priority){
            this.title = title;
            this.details = details; 
            this.priority = priority;
        }

        createTaskPanel = function(){
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
    }

    const createTaskAndPanelOrder = function(){
        const newTask = new Task(_title.value, _details.value, _priorityVal); 
        newTask.createTaskPanel();
        storageData.tasks.push(newTask);  
    }

    const createTaskAndPanelWithDateOrder = function(){
        const newTaskWithDueDate = new TaskWithDueDate(_title.value, _details.value, _dueDate.value, _priorityVal); 
        newTaskWithDueDate.createTaskPanelWithDate();
        storageData.tasksWithDueDate.push(newTaskWithDueDate);  
    }

  
     class TaskWithDueDate extends Task{
        constructor(title, details, dueDate, priority) {
            super(title, details, priority); 
            this.dueDate = dueDate; 
        }


        get dueDate(){
            return this._dueDate;
        }


        set dueDate(value){
            const newDateFormat = format(new Date(value.split('-')), 'dd/MM/yyyy');
            this._dueDate = newDateFormat; 
        }

        createTaskPanelWithDate = function() {
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

            const containerDueDate = document.createElement('div'); 
            containerDueDate.classList.add('container-duedate'); 
            const dueDateDiv = document.createElement('div'); 
            dueDateDiv.classList.add('due-date'); 
            dueDateDiv.textContent = this.dueDate; 
            containerDueDate.append(dueDateDiv); 

            const containerPriority = document.createElement('div');
            containerPriority.classList.add('container-priority');  
            const priorityDiv = document.createElement('div');
            priorityDiv.classList.add('priority'); 
            priorityDiv.textContent = this.priority; 
            containerPriority.append(priorityDiv); 

            containerPanel.append(containerTitle,containerDetails, containerDueDate, containerPriority); 

            const containerCheckButton = document.createElement('div');
            containerCheckButton.classList.add('container-check'); 
            const checkButton = document.createElement('input'); 
            checkButton.setAttribute('type', 'checkbox');
            checkButton.classList.add('check-button'); 
            containerCheckButton.appendChild(checkButton); 
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
            mainPage.appendChild(containerPanel); 
        }
    }


    const getAndCreate = function(){
        getPriorityStatus(); 
        createTaskAndPanelOrder(); 
    }

    const getAndCreateWithDate = function(){
        getPriorityStatus();
        createTaskAndPanelWithDateOrder()
    }

    return { Task, TaskWithDueDate, getAndCreate, getAndCreateWithDate }

})(); 


const storageData = (function(){
        const tasks = [];
        const tasksWithDueDate = []; 

        return { tasks, tasksWithDueDate }
})(); 



export { inputData, storageData } 