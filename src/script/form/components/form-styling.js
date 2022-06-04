const formStyle = (function(){
    const containerForm = document.querySelector('div.page-dimmer'); 

    const initialComponentsStyle = function(){
        containerForm.classList.remove('page-dimmer');
        containerForm.classList.add('page-dimmer-activated');  
    }

    const deactivateInitialComponentsStyle = function(){
        containerForm.classList.remove('page-dimmer-activated');
        containerForm.classList.add('page-dimmer');
    }

    return { initialComponentsStyle, deactivateInitialComponentsStyle }
})()


export default formStyle
