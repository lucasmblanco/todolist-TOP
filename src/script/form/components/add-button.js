import {inputData, inputDataProject} from "../../data-managment/components/data-catcher";
import form from "../form-functionality";
import projectsPanel from "../../aside-panel/components/projects-panel";
import panelsButtonsFunctionality from "../../main-panel/main-panel-components/task-panel-functionality";

const actionAddTask = (function(){
    const formElement = document.querySelector('form#formAddTask');
   

    const addTaskButtonFunctionality = function() {
        formElement.removeEventListener('submit', updateTaskInProject);
        formElement.removeEventListener('submit', updateTask);
        formElement.removeEventListener('submit', addTaskToProject); 
        formElement.addEventListener('submit', addNewTask); 
     }
 
     function addNewTask(e){
        inputData.grabInputDataAndDisplay(); 
        e.preventDefault();
        form.initialDefaultParameters(); 
        form.deactivateDisplayValues();
        form.enableSecondaryForm();
     }

     const updateTaskButtonFunctionality = function(){
        formElement.removeEventListener('submit', updateTaskInProject);
        formElement.removeEventListener('submit', addTaskToProject); 
        formElement.removeEventListener('submit', addNewTask); 
        formElement.addEventListener('submit', updateTask);
     }

     function updateTask(e){
        const mainPage = document.querySelector('div#main-window'); 
        inputData.grabNewInformationAndSave(e.target.dataset.numberContainerEdit);
        if(mainPage.classList.contains('main-window-today')) {
            inputData.displayAllObjectWithTodayDate();
        }
        if(mainPage.classList.contains('main-window-upcoming')){ 
            inputData.displayObjectInElement();
        }
        e.preventDefault();
        form.initialDefaultParameters(); 
        form.deactivateDisplayValues();
        form.enableSecondaryForm();
     }
 
     // -- function que vuelve a estado original el form original y crea el panel en el window correcto   
     const addTaskToProjectFunctionality = function(){ 
        //console.log(e.target.dataset.numberProject); 
      //  e.preventDefault();
        formElement.removeEventListener('submit', updateTask);
        formElement.removeEventListener('submit', addNewTask); ///////////// remover los otros listeneeeeeeeeeeeeer\
        formElement.removeEventListener('submit', updateTaskInProject);
        formElement.addEventListener('submit', addTaskToProject); 
    }

     function addTaskToProject(e){
        e.preventDefault();
      //  console.log(e.target); 
        inputDataProject.createTaskOfProject(e.target.dataset.numberProject); 
        //form.de
        form.initialDefaultParameters(); 
        form.deactivateDisplayValues(); 
        form.enableSecondaryForm();
        
     }

     const numberProjectAddTask = function(number){
        const formId = document.querySelector('form#formAddTask'); 
        formId.setAttribute('data-number-project', number)
       // addButton.classList.add(number); 
     }

     const updateTaskButtonFunctionalityInProject = function(){
        formElement.removeEventListener('submit', updateTask);
        formElement.removeEventListener('submit', addNewTask); 
        formElement.removeEventListener('submit', addTaskToProject); 
        formElement.addEventListener('submit', updateTaskInProject);
     }

     function updateTaskInProject(e){
        inputDataProject.grabNewInformationAndSaveInProject(e.target.dataset.numberProject, e.target.dataset.numberContainerEdit);
        e.preventDefault();
        form.initialDefaultParameters(); 
        form.deactivateDisplayValues();
        form.enableSecondaryForm();
     }

     
     return { addTaskButtonFunctionality, updateTaskButtonFunctionality, addTaskToProjectFunctionality, numberProjectAddTask, updateTaskButtonFunctionalityInProject,  }
 })();


// -- PROJECT FORM -- 


const actionAddProject = (function(){
    const formElement = document.querySelector('form#form-projects');
    const mainPage = document.querySelector('div#main-window');
   // const formPanel = document.querySelectorAll('li.project-element'); 
   

    const addProjectToList = function(){
      formElement.removeEventListener('submit', updateProject);
      formElement.addEventListener('submit', addNewProject)
    }

    function addNewProject(e){
        
        while(mainPage.firstChild && mainPage.removeChild(mainPage.firstChild));
        e.preventDefault();
        form.deactivateDisplayValues(); 
        form.activateMainForm(); 
        const newProject = inputDataProject.createNewList();
       
        projectsPanel.createPanel(newProject) // creo que el panel del project en aside
        projectsPanel.addDataNumberToProjects()
        projectsPanel.addDataNumberOfProject(); 
        projectsPanel.panelOnClickFunctionality(); // agrega accion al click en el panel para cambiar de estilos
        projectsPanel.panelStylingHomeFunctionality(newProject); // -- cambia el estilo segun el panel
        projectsPanel.buttonsFunctionality(); // añade funcionamiento de los botones del panel 
       
        
        
    }

    const updateProjectInformation = function(){
      formElement.removeEventListener('submit', addNewProject); 
      formElement.addEventListener('submit', updateProject);
   }

   function updateProject(e){
      e.preventDefault(); 
      const editedProject = inputDataProject.grabNewProjectInfoAndSave(e.target.dataset.numberProjectEdit);
      form.deactivateDisplayValues(); 
      form.activateMainForm(); 

     // projectsPanel.createPanel(editedProject);

      projectsPanel.editPanel(editedProject, e.target.dataset.numberProjectEdit); 
      projectsPanel.buttonsFunctionality();
      projectsPanel.panelStylingHomeFunctionality(editedProject);
      projectsPanel.panelOnClickFunctionality();
      
   }
      
   

    return { addProjectToList, updateProjectInformation }
})();


export {actionAddTask, actionAddProject} 
  