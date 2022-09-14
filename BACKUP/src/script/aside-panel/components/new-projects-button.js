import form from "../../form/form-functionality";

const newProject = (function(){
    const buttonNewProject = document.querySelector('button#new-project'); 
    

    const buttonAction = function(){
        buttonNewProject.addEventListener('click', buttonFunctionality);
    }

    function buttonFunctionality(){
        form.initialDisplayValues(); 
        form.disableMainForm();
        form.formProjectButtonsFunctionality(); 
    }

    return { buttonAction }
})()

export default newProject