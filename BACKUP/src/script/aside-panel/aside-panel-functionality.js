import buttonNewTask from "./components/add-new-task-button";
import homeButtonFunctionality from "./components/home-button";
import todayButtonFunctionality from "./components/today-button";
import upComingButtonFunctionality from "./components/upcoming-button";
import newProject from "./components/new-projects-button";

const asidePanel = (function(){ 
    const asidePanelButtonsFunctionality = function(){
        buttonNewTask.buttonAddNewTaskFunctionality(); 
        homeButtonFunctionality.buttonHomeAction(); 
        todayButtonFunctionality.buttonTodayAction(); 
        upComingButtonFunctionality.buttonUpcomingAction();
        newProject.buttonAction(); 
    }


    return { asidePanelButtonsFunctionality }
})(); 

export default asidePanel 