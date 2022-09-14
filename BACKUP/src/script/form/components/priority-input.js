const priorityInputBehavior = (function() {
    const priorityInputElements = document.querySelectorAll('input.priority-task');

    const EditStatus = function(choice){
        for(let i =0; i < priorityInputElements.length; i++){
            if(priorityInputElements[i].value === choice) {
                priorityInputElements[i].checked = true; 
            }
        }
    }

    return { EditStatus }
})();

export default priorityInputBehavior