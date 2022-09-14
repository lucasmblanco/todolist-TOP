import logo from '../../components/main-page/todo-logo.png'

const headerComponents = (function(){

    const logoContainer = document.querySelector('div#logo-container'); 
    

    const addLogo = function(){
        const imgElement = document.createElement('img'); 
        imgElement.setAttribute('alt', 'page-logo')
        imgElement.src = logo
        imgElement.classList.add('header-image'); 
        logoContainer.append(imgElement); 
    }
    

    return { addLogo }
})();

export default headerComponents