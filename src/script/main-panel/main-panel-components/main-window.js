const mainWindow = (function(){
    const mainPage = document.querySelector('div#main-window'); 
    const mainWindowStyleHome = function(){
        mainPage.classList.remove(...mainPage.classList);
        mainPage.classList.add('main-window-home');
    }

    const mainWindowStyleToday = function(){
        mainPage.classList.remove(...mainPage.classList);
        mainPage.classList.add('main-window-today'); 
    }

    const mainWindowStyleUpcoming = function(){
        mainPage.classList.remove(...mainPage.classList);
        mainPage.classList.add('main-window-upcoming'); 
    }

    return { mainWindowStyleHome, mainWindowStyleToday, mainWindowStyleUpcoming }
})(); 

export default mainWindow 