import { inputDataProject } from "../../data-managment/components/data-catcher";
import form from "../../form/form-functionality";
import mainWindow from "../../main-panel/main-panel-components/main-window";
import pageFrameElement from "../../main-panel/main-panel-components/page-frame";
import buttonNewTask from "./add-new-task-button";

const projectsPanel = (function(){
    const projectsContainer = document.querySelector('div#projects-container');
    const navigationProjects = document.querySelector('nav#navigation-projects');
    const projectsList = document.querySelector('ul#projects-list')


    const createPanel = function(project){
      //  const indexOfProject = inputDataProject.projects.length - 1; 
        const projectElement = document.createElement('li'); 
        projectElement.classList.add('project-element'); 
        projectElement.textContent = project._listName;
        projectElement.style.background = project._themeColor; 
      //  projectElement.setAttribute('data-number-project', indexOfProject);
        projectsList.append(projectElement); 
        createPanelButtons(projectElement);
    }

    function createPanelButtons(element){
       // const indexOfProject = inputDataProject.projects.length - 1; 
        
        const addTasktoProject = document.createElement('button');
        addTasktoProject.classList.add('add-task-project');
        addTasktoProject.textContent = '+';      
     //   addTasktoProject.setAttribute('data-number-project', index); 

        const editProject = document.createElement('button'); 
        editProject.classList.add('edit-project');
        const editProjectIcon = document.createElement('i');
        editProjectIcon.classList.add('edit-project-icon'); 
        editProject.append(editProjectIcon);
      //  editProject.setAttribute('data-number-project', index);

        const deleteProject = document.createElement('button');
        deleteProject.classList.add('delete-project'); 
        const deleteProjectIcon = document.createElement('i');
        deleteProjectIcon.classList.add('delete-project-icon');
        deleteProject.append(deleteProjectIcon); 
       // deleteProject.setAttribute('data-number-project', index);


        element.append(addTasktoProject, editProject, deleteProject)
    }

    function addDataNumberToProjects(){
        const projects = inputDataProject.projects;
        const projectElement = document.querySelectorAll('li.project-element'); 

        for(let i = 0; i < projects.length; i++){
            projectElement[i].setAttribute('data-number-project', i); 
        }
    }

    function addDataNumberOfProject(){
        const projects = inputDataProject.projects;
        const addTasktoProject = document.querySelectorAll('button.add-task-project');
        const editProject = document.querySelectorAll('button.edit-project');
        const deleteProject = document.querySelectorAll('button.delete-project'); 

        for(let i = 0; i < projects.length; i++){
            addTasktoProject[i].setAttribute('data-number-project', i); 
            editProject[i].setAttribute('data-number-project', i); 
            deleteProject[i].setAttribute('data-number-project', i); 
        }
    }

    function editPanel(project, projectNumber){
      const indexOfProject = projectNumber; 
        
        

        const projectElements = document.querySelectorAll('li.project-element');

        projectElements[projectNumber].setAttribute('data-number-project', indexOfProject);
        projectElements[projectNumber].textContent = project._listName;
        projectElements[projectNumber].style.background = project._themeColor; 
        createPanelButtons(projectElements[projectNumber]);
        addDataNumberToProjects()
        addDataNumberOfProject();
    }


    // -- FUNCTION QUE AÑADE FUNCIONAMIENTO DE TODOS LOS BOTONES 
    const buttonsFunctionality = function(){
        const addTaskToProjectButton = document.querySelectorAll('button.add-task-project'); 
        addTaskToProjectButton.forEach(button => button.addEventListener('click', addTaskFunctionality)); 

        const editProjectButton = document.querySelectorAll('button.edit-project'); 
        editProjectButton.forEach(button => button.addEventListener('click', editProjectFunctionality)); 

        const deleteProjectButton = document.querySelectorAll('button.delete-project'); 
        deleteProjectButton.forEach(button => button.addEventListener('click', deleteProjectFunctionality))

    }

    const panelStylingHomeFunctionality = function(project){
        pageFrameElement.pageFrameStyleProject(project);
        mainWindow.mainWindowStyleProject(project); 
        
    }


    // -- FUNCTION QUE MUESTRA EL FORM normal para añadir Task Adaptado para el proyecto en el que se llamó  
    function addTaskFunctionality(e){
        //console.log(e.target.dataset.numberProject);
        form.addDataSetNumberToButtons(e.target.dataset.numberProject); 
        form.disableSecondaryForm();
        form.initialDisplayValues(); 
        form.initialDefaultParameters();
        form.formButtonsAddTaskInProject();
    }

    function editProjectFunctionality(e){
        form.initialDisplayValues(); 
        form.disableMainForm();
        form.EditFormParametersProjects(e.target.dataset.numberProject); 
        form.editProjectsInformation();    

    }

    function deleteProjectFunctionality(e){
        console.log('hola'); 
        const projects = inputDataProject.projects;
        const projectsListElements = document.querySelectorAll('li.project-element'); 
        const mainPage = document.querySelector('div#main-window');

        projectsListElements[e.target.dataset.numberProject].remove();
        projects.splice(e.target.dataset.numberProject, 1); 

        addDataNumberToProjects(); 
        addDataNumberOfProject(); 

        mainPage.classList.remove(...mainPage.classList); 

       // if(!(e.target.dataset.numberProject === 0)) projectsListElements.forEach(element => element.setAttribute('data-number-project', e.target.dataset.numberProject)) 
        

    }

    function panelOnClickFunctionality(){
        const projectPanels = document.querySelectorAll('li.project-element'); 
        const projects = inputDataProject.projects; 
        const mainPage = document.querySelector('div#main-window');

        projectPanels.forEach(panel => panel.addEventListener('click', panelProperties));

        function panelProperties(e){
            if(mainPage.classList.length === 0) {
                pageFrameElement.pageFrameStyleHome();
                mainWindow.mainWindowStyleHome();
                
            } else {
                showOwnElements(e);
                stylingOnClick(e); 
            }
            
        }

        function showOwnElements(e){
            while(mainPage.firstChild && mainPage.removeChild(mainPage.firstChild));

            inputDataProject.displayAllObjectsOfList(e.target.dataset.numberProject);
        }

        function stylingOnClick(e){
            pageFrameElement.pageFrameStyleProject(projects[e.target.dataset.numberProject]);
            mainWindow.mainWindowStyleProject(projects[e.target.dataset.numberProject]); 
        }


    }

    return { createPanel, buttonsFunctionality, panelStylingHomeFunctionality, panelOnClickFunctionality, editPanel, addDataNumberOfProject, addDataNumberToProjects }

})(); 


export default projectsPanel
