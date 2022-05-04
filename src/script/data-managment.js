
const wrapper = document.querySelector('div#form-task')
const form = wrapper.querySelector('form'); 



function getDataForm(e) {
    const title = form.querySelector('input[id="title"]').value;
    const details = form.querySelector('textarea[id="details"]').value;
    const dueDate = form.querySelector('input[id="due-date"]').value;
    const priority = form.querySelector('input[id="priority-task"]').value; 
    console.log(title, details, dueDate, priority); 
}

export default getDataForm