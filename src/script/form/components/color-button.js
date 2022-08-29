const actionAddColor = (function(){

    const colorButton = document.querySelector('div.button-container-color-picker');

    const colors = [{
        color: "Berry Red",
        hex: '#ab0f4b',
    }, {
        color: "Red",
        hex: "#ab0f19",
    }, {
        color: "Orange",
        hex: "#ab6a0f",
    }, {
        color: "Yellow",
        hex: "#c9c310",
    }, {
        color: "Mint Green",
        hex: "#10c985", 
    }, {
        color: "Sky Blue",
        hex: "#10bdc9",
    }, {
        color: "Blue",
        hex: "#1610c9",
    }, {
        color: "Violet",
        hex: "#9210c9",
    }, {
        color: "Grey",
        hex: "#787c7d",
    }]

    const buttonFunctionality = function(){
    colorButton.addEventListener('click', displayAvailableColors);
}
    


    function displayAvailableColors(e){
        e.preventDefault(); 
        createContainerColors(); 
        colorButton.removeEventListener('click', displayAvailableColors);
       // closeDropdownMenu();
    }

    function createContainerColors(){
        const containerColors = document.querySelector('div.container-colors');
        if(containerColors.classList.contains('container-colors-hidden')){
            containerColors.classList.remove('container-colors-hidden')
            while (containerColors.lastElementChild) {
                containerColors.removeChild(containerColors.lastElementChild);
              }
              createOptions(containerColors);
            } else {
            containerColors.classList.add('container-colors-active'); 
            createOptions(containerColors); 
        }
    }

    function createOptions(container){
        const formProject = document.querySelector('form#form-projects');
        colors.forEach(function(item){
            const optionContainer = document.createElement('div');
            optionContainer.classList.add('option-color-container');

            const inputCheckbox = document.createElement('input');
            inputCheckbox.setAttribute('type', 'radio'); 
            inputCheckbox.classList.add('checkbox-color');
            inputCheckbox.setAttribute('id', item.color); 
            inputCheckbox.setAttribute('value', item.hex);
            inputCheckbox.setAttribute('name', 'color-pick');


            const colorCircle = document.createElement('div');
            colorCircle.classList.add('color-circle');
            colorCircle.style.backgroundColor = item.hex; 
            
            const colorName = document.createElement('label');
            colorName.setAttribute('for', item.color); 
            colorName.classList.add('color-name'); 
            colorName.textContent = item.color; 
            optionContainer.append(inputCheckbox, colorCircle, colorName); 
            container.appendChild(optionContainer); 

            inputCheckbox.addEventListener('click', replaceContent)

           // formProject.addEventListener('click', closeMenu); 
        })

}



    function replaceContent(e){
        const colorButton = document.querySelector('div.button-container-color-picker');
        const colorButtonChild = colorButton.lastChild; 
        const buttonColorParentNode = colorButtonChild.parentNode;
        const containerColors = document.querySelector('div.container-colors-active')
        
        containerColors.classList.add('container-colors-hidden');
        buttonColorParentNode.replaceChild(e.target.parentNode, colorButtonChild); 

        colorButton.addEventListener('click', displayAvailableColors);
    }


    const restoreButton = function(){
        const colorButton = document.querySelector('div.button-container-color-picker');
        const originalButtonColor = document.createElement('div');
        originalButtonColor.setAttribute('id', 'color-picker'); 
        originalButtonColor.textContent = 'Choose a color'; 

        while(colorButton.firstChild && colorButton.removeChild(colorButton.firstChild));

        colorButton.append(originalButtonColor); 
        
    }

    function closeMenu(e){
       
        const dropDownMenu = document.querySelector('div.container-colors')
        if(!(e.target.matches('.option-color-container')) && !(e.target.matches('#color-picker'))){
            console.log('h');
            dropDownMenu.classList.remove('container-colors-active'); 
            dropDownMenu.classList.add('container-colors-hidden')
        }
    }

    return {buttonFunctionality, restoreButton}
})();

export default actionAddColor 