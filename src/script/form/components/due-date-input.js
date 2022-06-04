const actionDueDateButton = (function(){
    const dueDateOptions = document.querySelectorAll('input[name="dueDateElection"]'); // input "yes" and "no" 
    const dueDateContainer = document.querySelector('div.dueDateElection'); // container of input "yes/no"
    const dueDateInput = document.querySelector('input[name="dueDate"]'); // input date 
    const today = new Date().toISOString().split('T')[0];
   
    const buttonFunctionality = function() {
    dueDateOptions.forEach(option => option.addEventListener('click', displayDueDate))

    }

    function displayDueDate(e){
        if (e.target.value === 'No'){
            dueDateOff();
        } else {
            dueDateOn();
        }
    }


    function displayDueDateEdit(choice){
        if (choice === 'No'){
            dueDateOff();
        } else {
            dueDateOn();
        }
    }

    function dueDateOn(){
            dueDateContainer.style.visibility = 'visible';
            dueDateInput.setAttribute('min', today);
            dueDateInput.disabled = false; 
    }

    function dueDateOff(){
            dueDateContainer.style.visibility = 'hidden'; 
            dueDateInput.disabled = true; 
            dueDateInput.value = ''; 
    }


    return  { buttonFunctionality, displayDueDateEdit }
})();

export default actionDueDateButton