import { format, addDays, eachDayOfInterval, } from 'date-fns';
import pageFrameElement from '../../main-panel/main-panel-components/page-frame';
import mainWindow from '../../main-panel/main-panel-components/main-window';
import taskPanel from '../../main-panel/main-panel-components/task-panel';

const upComingButtonFunctionality = (function(){
    const upcomingButton = document.querySelector('a#button-upcoming'); 
    const mainPage = document.querySelector('div#main-window'); 

    const buttonUpcomingAction = function(){
        upcomingButton.addEventListener('click', buttonFunctionality); 
    }


    function buttonFunctionality() {
        pageFrameElement.pageFrameStyleUpcoming();
        mainWindow.mainWindowStyleUpcoming(); 
        deleteOldContent();
        taskPanel.panelCreationUpcomingEvents();
    }

    function deleteOldContent(){
        while(mainPage.firstChild && mainPage.removeChild(mainPage.firstChild)); 
    }


    return { buttonUpcomingAction }
})(); 

export default upComingButtonFunctionality