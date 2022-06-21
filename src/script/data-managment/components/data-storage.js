import taskPanel from "../../main-panel/main-panel-components/task-panel";
import {panelsButtonsFunctionality, panelsButtonsFunctionalityTaskProjects}  from "../../main-panel/main-panel-components/task-panel-functionality";
import { format } from 'date-fns'

const dataStorage = (function(){

    class TodoList {
        constructor(listName, themeColor){
            this.list = [];
            this.listName = listName;  
            this.themeColor = themeColor; 
        }

        get listName(){
            return this._listName; 
        }

        get themeColor(){
            return this._themeColor;
        }

        set listName(value){
            if(value === ''){
                this._listName = 'Main List'; 
            } else {
                this._listName = value;
            }
        }

        set themeColor(value){
            if(value === ''){
                this._themeColor = 'None'; 
            } else {
                this._themeColor = value;
            }
        }

        newItem(title,details,dueDate, date, priority){
            const task = new Task(title,details, dueDate, date, priority); 
            task.number = this.list.length;
            this.list.push(task); 
            return task 
        }

        showItemn(task){
            taskPanel.panelCreation(task.title,task.details,task.date,task.priority, task.complete);
        }

        addDataNumberToElements(projectNumber){
            taskPanel.addDataNumber(projectNumber);
        }

        addButtonFuntionality(){
           panelsButtonsFunctionality.buttonsFunctionality();  
        }

        addButtonFuntionalityTaskProjects(){
            panelsButtonsFunctionalityTaskProjects.buttonsFunctionality(); 
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


    }


    class Task {
        constructor(title, details, dueDate, date, priority, number){
            this.title = title;
            this.details = details; 
            this.dueDate = dueDate; 
            this.date = date;
            this.priority = priority;
            this.number = number; 
            this.complete = 'No'; 
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