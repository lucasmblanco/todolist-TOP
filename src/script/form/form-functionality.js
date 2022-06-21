import formStyle from './components/form-styling.js'
import { formBehaviors } from './components/form-behavior.js';
import actionDueDateButton from './components/due-date-input.js';
import {actionAddProject, actionAddTask }from './components/add-button.js';
import {actionCloseForm, actionCloseFormProject} from './components/close-button.js';
import  actionAddColor from './components/color-button.js';



const form = (function(){

    const initialDisplayValues = function(){
        formStyle.initialComponentsStyle(); 
    }

    const deactivateDisplayValues = function(){
        formStyle.deactivateInitialComponentsStyle();
    }

    const initialDefaultParameters = function(){
        formBehaviors.resetForm(); 
    }

    const EditFormParameters = function(containerNumber){
        formBehaviors.loadEditValues(containerNumber);
   }

   const EditFormParametersTaskProjects = function(containerNumber, taskNumber){
        formBehaviors.loadEditValuesTaskProjects(containerNumber, taskNumber); 
   }

   // CARGA VALORES DEL PROJECT EN EL FORM PROJECT
   const EditFormParametersProjects = function(projectNumber){
        formBehaviors.loadEditValuesProjects(projectNumber); 
   }

    const formButtonsFunctionality = function(){
        actionDueDateButton.buttonFunctionality(); 
        actionAddTask.addTaskButtonFunctionality();
        actionCloseForm.cancelButtonFunctionality();
    }

    const formEditButtonsFunctionality = function(){
        actionAddTask.updateTaskButtonFunctionality();
        actionCloseForm.cancelButtonFunctionality();
    }
    

    const formEditButtonsFunctionalityOfProjects = function(){
        actionAddTask.updateTaskButtonFunctionalityInProject();
        actionCloseForm.cancelButtonFunctionality();
    }

    // -- contiene las acciones del form de los proyectos 
    const formProjectButtonsFunctionality = function(){
        actionAddColor.restoreButton();
        actionAddColor.buttonFunctionality(); 
        actionCloseFormProject.cancelButtonFunctionality();
        actionAddProject.addProjectToList(); 
    }

    // carga las funciones para el form de los projectos y su EDICION
    const editProjectsInformation = function(){
        actionAddColor.buttonFunctionality(); 
        actionCloseFormProject.cancelButtonFunctionality();
        actionAddProject.updateProjectInformation();
    }

    const disableMainForm = function(){
        formStyle.disableFormAddTask(); 
        formStyle.disableShadowBoxFormAddTask();
    }

    const activateMainForm = function(){
        formStyle.activateFormAddTask(); 
        formStyle.enableShadowBoxForm();
    }

    const disableSecondaryForm = function(){
        formStyle.disableFormAddProject();
        formStyle.disableShadowBoxFormAddProject();
    }

    const enableSecondaryForm = function(){
        formStyle.enableFormAddProject();
        formStyle.enableShadowBoxFormProject(); 
    }


    // -- metodo que anade nueva funcionalidad de botones en el form  
    const formButtonsAddTaskInProject = function(){
        actionAddTask.addTaskToProjectFunctionality(); 
        actionDueDateButton.buttonFunctionality();
        actionCloseForm.cancelButtonFunctionality();
    }

    
    const addDataSetNumberToButtons = function(number){
        actionAddTask.numberProjectAddTask(number); 
    }

return { initialDisplayValues, deactivateDisplayValues, initialDefaultParameters, formButtonsFunctionality, EditFormParameters, formEditButtonsFunctionality,         disableMainForm, activateMainForm, disableSecondaryForm, enableSecondaryForm, formProjectButtonsFunctionality,  formButtonsAddTaskInProject, addDataSetNumberToButtons, formEditButtonsFunctionalityOfProjects , EditFormParametersTaskProjects, editProjectsInformation, EditFormParametersProjects}
})()

export default form 