import taskPanel from "../../main-panel/main-panel-components/task-panel";
import panelsButtonsFunctionality from "../../main-panel/main-panel-components/task-panel-functionality";
import { format } from 'date-fns'

const dataStorage = (function(){

    class TodoList {
        constructor(){
            this.list = [];
        }

        newItem(title,details,dueDate, date, priority){
        const task = new Task(title,details, dueDate, date, priority); 
            this.list.push(task); 
            return task 
        }

        showItemn(task){
            taskPanel.panelCreation(task.title,task.details,task.date,task.priority);
        }

        addDataNumberToElements(){
            taskPanel.addDataNumber();
        }

        addButtonFuntionality(){
           panelsButtonsFunctionality.buttonsFunctionality();  
        }

        appendItemWithDate(task, elementWithDate){
            taskPanel.panelCreationInDate(task.title,task.details,task.date,task.priority, elementWithDate); 
        }

        allItems(){
            return this.list
        }

        deleteItems(taskDataNumber){
            this.list.splice(taskDataNumber,1); 
        }

        updateTask(task){
            
        }

    }


    class Task {
        constructor(title, details, dueDate, date, priority){
            this.title = title;
            this.details = details; 
            this.dueDate = dueDate; 
            this.date = date;
            this.priority = priority;
        } 


        get date(){
            return this._date;
        }
    
        set date(value){
            if(value === '') {  
                return; 
            }
            const newDateFormat = format(new Date(value.split('-')), 'dd/MM/yyyy');
            this._date = newDateFormat; 
        }
}
    return { TodoList }
})(); 



export default dataStorage 