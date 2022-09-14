import { format, addDays, eachDayOfInterval, } from 'date-fns';

const taskPanel = (function(){
    const panelCreation = function(title, details, date, priority, doneStatus){
            const mainPage = document.querySelector('div#main-window'); 
            const containerPanel = document.createElement('div');
            containerPanel.classList.add('container-panel'); 

            const containerTitle = document.createElement('div'); 
            containerTitle.classList.add('container-title'); 
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('title'); 
            titleDiv.textContent = title; 
            containerTitle.append(titleDiv);

            const containerDetails = document.createElement('div');
            containerDetails.classList.add('container-details');
            const detailsDiv = document.createElement('div'); 
            detailsDiv.classList.add('details');
            detailsDiv.textContent = details; 
            containerDetails.append(detailsDiv); 

            const containerDueDate = document.createElement('div'); 
            containerDueDate.classList.add('container-duedate'); 
            const dueDateDiv = document.createElement('div'); 
            dueDateDiv.classList.add('due-date'); 
            dueDateDiv.textContent = date;   
            containerDueDate.append(dueDateDiv);

            const containerPriority = document.createElement('div');
            containerPriority.classList.add('container-priority');  
            const priorityDiv = document.createElement('div');
            priorityDiv.classList.add('priority'); 
            priorityDiv.textContent = priority; 
            containerPriority.append(priorityDiv); 

            containerPanel.append(containerTitle, containerDetails, containerDueDate, containerPriority); 

            if(!(mainPage.classList.contains('main-window-today'))) mainPage.appendChild(containerPanel);
            if(mainPage.getAttribute('data-date') === date) mainPage.appendChild(containerPanel); 
               
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
            editButton.classList.add('edit-button');  
            const iElementEditButton = document.createElement('i'); 
        
            iElementEditButton.classList.add('edit-button-icon'); 
            editButton.append(iElementEditButton); 
            containerEditButton.appendChild(editButton)
        
        
            const containerDeleteButton = document.createElement('div');
            containerDeleteButton.classList.add('container-delete');
        
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            const iElementDeleteButton = document.createElement('i');
        
            iElementDeleteButton.classList.add('delete-button-icon');
            deleteButton.append(iElementDeleteButton);
            containerDeleteButton.appendChild(deleteButton); 
        

            if(doneStatus === 'Yes') {
                containerPanel.classList.add('task-panel-done'); 
                checkButton.checked = true; 
                editButton.disabled = true;
                deleteButton.disabled = true; 
            } 

            containerPanel.append(containerEditButton, containerDeleteButton); 

    }

    const panelCreationUpcomingEvents = function(){
         const mainPage = document.querySelector('div#main-window');
                if(!(mainPage.classList.contains('main-window-upcoming'))); {
                const arrayWeek = (eachDayOfInterval({start: new Date(), end: addDays(new Date(), 7)})).map(date => format(date, 'dd/MM/yyyy'));
                for(let i = 0; i < arrayWeek.length; i++) {
                    const containerDateInformation = document.createElement('div');
                    containerDateInformation.setAttribute('class', 'container-date-information');
         
                    const dateInformation = document.createElement('div'); 
                    dateInformation.setAttribute('class', 'date-information'); 
                    dateInformation.textContent = arrayWeek[i];
                    
                    const containerTasks = document.createElement('div'); 
                    containerTasks.setAttribute('class', 'container-task'); 

                    containerDateInformation.append(dateInformation, containerTasks);
                    mainPage.appendChild(containerDateInformation); 

                 }
                     
                }
    }

    

    const addDataNumber = function(projectNumber){
            const deleteButtons = document.querySelectorAll('button.delete-button'); 
            const doneButtons = document.querySelectorAll('input.check-button'); 
            const editButtons = document.querySelectorAll('button.edit-button');
        

        deleteButtons.forEach((button, index)=> {
                button.setAttribute('data-number-project', projectNumber);
                button.setAttribute('data-number-button', index);

        })

        doneButtons.forEach((button, index) => {
                button.setAttribute('data-number-project', projectNumber);
                button.setAttribute('data-number-button-done', index); 
        })

        editButtons.forEach((button, index)=> {
                button.setAttribute('data-number-project', projectNumber);
                button.setAttribute('data-number-button-edit', index); 
        })

    }

    const refreshInfo = function(title, details, date, priority, elementIndex){
        const titleDiv = document.querySelectorAll('div.title');
        const detailsDiv = document.querySelectorAll('div.details');
        const dateDiv = document.querySelectorAll('div.due-date');
        const priorityDiv = document.querySelectorAll('div.priority'); 


        titleDiv[elementIndex].textContent = title;
        detailsDiv[elementIndex].textContent = details;
        dateDiv[elementIndex].textContent = date;
        priorityDiv[elementIndex].textContent = priority; 
    }

    return { panelCreation, panelCreationUpcomingEvents, addDataNumber, refreshInfo }
})();


export default taskPanel