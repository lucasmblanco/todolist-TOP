import pageFrameElement from '../../main-panel/main-panel-components/page-frame';
import mainWindow from '../../main-panel/main-panel-components/main-window';
import taskPanel from '../../main-panel/main-panel-components/task-panel';
import { inputData } from '../../data-managment/components/data-catcher';

const upComingButtonFunctionality = (function(){
    const upcomingButton = document.querySelector('a#button-upcoming'); 
    const mainPage = document.querySelector('div#main-window'); 

    const buttonUpcomingAction = function(){
        upcomingButton.addEventListener('click', buttonFunctionality); 
    }


    function buttonFunctionality() {
        if(mainPage.classList.contains('main-window-upcoming')) return
        pageFrameElement.pageFrameStyleUpcoming();
        mainWindow.mainWindowStyleUpcoming(); 
        
        taskPanel.panelCreationUpcomingEvents();    
        inputData.displayObjectInElement();

       // mainWindow.refreshStatus(); 
    }



    return { buttonUpcomingAction }
})(); 

export default upComingButtonFunctionality