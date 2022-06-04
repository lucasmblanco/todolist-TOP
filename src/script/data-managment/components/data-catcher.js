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
        (mainList.allItems()).forEach(function(item, idx, array){ 
            if(idx === array.length - 1) mainList.showItemn(item);
        }); 
    }


    const displayAllObjects = function(){
        (mainList.allItems()).forEach(function(item){ 
            mainList.showItemn(item)
            mainList.addDataNumberToElements();
            mainList.addButtonFuntionality();
        }); 
    }

    const displayAllObjectWithTodayDate = function(){
        (mainList.allItems()).forEach(function(item){
            if(item._date === todayInfoDate) {
                mainList.showItemn(item);
            }
        })
    }

   
    function displayObjectInElement(date, containerElement) {
        (mainList.allItems()).forEach(function(item){
            if (item._date === date) 
            mainList.appendItemWithDate(item, containerElement); 
        })
    }

    function deleteItems(task){
        mainList.deleteItems(task); 
    }

    const grabNewInformationAndSave = function(containerNumber){
        getPriorityStatus();
        getElectionDueDate(); 
        updateInformation(containerNumber); 
        taskPanel.refreshInfo(_title.value, _details.value, _dueDate.value, _priorityVal, containerNumber); 
    } 


    const updateInformation = function(containerNumber){
        (mainList.allItems())[containerNumber].title = _title.value;
        (mainList.allItems())[containerNumber].details = _details.value;
        (mainList.allItems())[containerNumber]._dueDate = _dueDateElectionVal;
        (mainList.allItems())[containerNumber].date = _dueDate.value;
        (mainList.allItems())[containerNumber].priority = _priorityVal; 
    }
    return { grabInputDataAndDisplay, displayAllObjects, displayAllObjectWithTodayDate, displayObjectInElement, deleteItems, mainList, grabNewInformationAndSave }

})(); 


export default inputData