const formStyle = (function(){
    const containerForm = document.querySelector('div.page-dimmer'); 
    const formAddTask = document.querySelector('form#formAddTask'); 
    const shadowFormAddTask = document.querySelector('div.shadow-box');
    const formAddProject = document.querySelector('form#form-projects');
    const shadowFormAddProject = document.querySelector('div.shadow-box-form-projects') 

    const initialComponentsStyle = function(){
        containerForm.classList.remove('page-dimmer');
        containerForm.classList.add('page-dimmer-activated');  
    }

    const deactivateInitialComponentsStyle = function(){
        containerForm.classList.remove('page-dimmer-activated');
        containerForm.classList.add('page-dimmer');
    }

    const disableFormAddTask = function(){
        formAddTask.classList.remove(...formAddTask.classList); 
        formAddTask.classList.add('disable-form'); 
        
    }

    const disableFormAddProject = function(){
        formAddProject.classList.remove(...formAddProject.classList);
        formAddProject.classList.add('disable-form'); 
    }

    const enableFormAddProject = function(){
        formAddProject.classList.remove(...formAddProject.classList);
        formAddProject.classList.add('form-projects'); 
    }

    const activateFormAddTask = function(){
        formAddTask.classList.remove(...formAddTask.classList); 
        formAddTask.classList.add('form-add-task');
    }

    const disableShadowBoxFormAddTask = function(){
        shadowFormAddTask.classList.add('disable-shadow-box-form'); 
    }

    const disableShadowBoxFormAddProject = function(){
        shadowFormAddProject.classList.add('disable-shadow-box-form');
    }

    const enableShadowBoxForm = function(){
        shadowFormAddTask.classList.remove('disable-shadow-box-form'); 
    }

    const enableShadowBoxFormProject = function(){
        shadowFormAddProject.classList.remove('disable-shadow-box-form');
    }


    return { initialComponentsStyle, deactivateInitialComponentsStyle, disableFormAddTask, activateFormAddTask, disableShadowBoxFormAddTask, enableShadowBoxForm, disableFormAddProject,enableFormAddProject, disableShadowBoxFormAddProject, enableShadowBoxFormProject }
})();


export default formStyle
