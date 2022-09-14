import form from '../../form/form-functionality.js';
import mainWindow from '../../main-panel/main-panel-components/main-window.js';
import pageFrameElement from '../../main-panel/main-panel-components/page-frame.js';
import { inputData } from '../../data-managment/components/data-catcher.js';

const buttonNewTask = (function() {
    const buttonAddNewTask = document.querySelector('button#new-task'); 
    const mainPage = document.querySelector('div#main-window');


    const buttonAddNewTaskFunctionality = function() {
        buttonAddNewTask.addEventListener('click',  displayForm);
    }


    function displayForm() {

        form.disableSecondaryForm();
        form.initialDisplayValues(); 
        form.initialDefaultParameters();
        form.formButtonsFunctionality(); 
        stylingHome();
        showTasks(); 
    }

    function stylingHome(){
        
        mainWindow.mainWindowStyleHome();
        pageFrameElement.pageFrameStyleHome();
    }

    function showTasks(){

        while(mainPage.firstChild && mainPage.removeChild(mainPage.firstChild));
        inputData.displayAllObjects(); 
    }


    return { buttonAddNewTaskFunctionality }

})(); 

export default buttonNewTask