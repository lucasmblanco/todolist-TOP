import mainWindow from "../../main-panel/main-panel-components/main-window";
import pageFrameElement from "../../main-panel/main-panel-components/page-frame";
import inputData from "../../data-managment/components/data-catcher";

const homeButtonFunctionality = (function(){
    const homeButton = document.querySelector('a#button-home');
    const mainPage = document.querySelector('div#main-window');

    const buttonHomeAction = function() {
    homeButton.addEventListener('click', buttonFunctionality); 
    }

    function buttonFunctionality(){
        if(mainPage.classList.contains('main-window-home')) return
        pageFrameElement.pageFrameStyleHome();
        mainWindow.mainWindowStyleHome();
        showTasks();
    }
    
   
   

    function showTasks(){
        while(mainPage.firstChild && mainPage.removeChild(mainPage.firstChild));
        inputData.displayAllObjects(); 
    }

    return { buttonHomeAction }
})();

export default homeButtonFunctionality