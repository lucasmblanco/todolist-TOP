import mainWindow from "../../main-panel/main-panel-components/main-window";
import pageFrameElement from "../../main-panel/main-panel-components/page-frame";
import {inputData} from "../../data-managment/components/data-catcher";

const todayButtonFunctionality = (function(){
    const buttonToday = document.querySelector('a#button-today');
    const mainPage = document.querySelector('div#main-window'); 

    const buttonTodayAction = function() {
        buttonToday.addEventListener('click', buttonFunctionality); 
    }

    function buttonFunctionality(){
        if(mainPage.classList.contains('main-window-today')) return
        mainWindow.mainWindowStyleToday();
        pageFrameElement.pageFrameStyleToday(); 
        displayTodayTasks(); 
    }


    const displayTodayTasks = function(){
        inputData.displayAllObjectWithTodayDate(); 
        const panelDates = document.querySelectorAll('div.container-date-information');
        panelDates.forEach(panel => panel.remove()); 
       
        
    }


    return { buttonTodayAction }
})();

export default todayButtonFunctionality