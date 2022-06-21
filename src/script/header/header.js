const headerComponents = (function(){


    const header = document.querySelector('header'); 
    const imgElement = header.querySelector('img'); 

    const addLogo = function(){
        imgElement.classList.add('header-image'); 
    }
    

    return {addLogo}
})();

export default headerComponents