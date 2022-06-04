import buttonNewTask from "./components/add-new-task-button";
import homeButtonFunctionality from "./components/home-button";
import todayButtonFunctionality from "./components/today-button";
import upComingButtonFunctionality from "./components/upcoming-button";

const asidePanel = (function(){ 
    const asidePanelButtonsFunctionality = function(){
        buttonNewTask.buttonAddNewTaskFunctionality(); 
        homeButtonFunctionality.buttonHomeAction(); 
        todayButtonFunctionality.buttonTodayAction(); 
        upComingButtonFunctionality.buttonUpcomingAction();
    }


    return { asidePanelButtonsFunctionality }
})(); 

export default asidePanel 