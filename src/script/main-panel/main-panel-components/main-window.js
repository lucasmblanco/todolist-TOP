import { format } from "date-fns";

const mainWindow = (function(){
    const todayInfoDate = format(new Date(), 'dd/MM/yyyy'); 
    const mainPage = document.querySelector('div#main-window'); 
    const mainWindowStyleHome = function(){
        mainPage.classList.remove(...mainPage.classList);
        mainPage.removeAttribute('style'); 
        mainPage.classList.add('main-window-home');
    }

    const mainWindowStyleToday = function(){
        mainPage.classList.remove(...mainPage.classList);
        mainPage.removeAttribute('style'); 
        mainPage.classList.add('main-window-today'); 
        mainPage.setAttribute('data-date', `${todayInfoDate}`); 
    }

    const mainWindowStyleUpcoming = function(){
        mainPage.classList.remove(...mainPage.classList);
        mainPage.removeAttribute('style'); 
        mainPage.classList.add('main-window-upcoming'); 
    }

    const mainWindowStyleProject = function(project){
        mainPage.classList.remove(...mainPage.classList);
        mainPage.classList.add('main-window-project'); 
        mainPage.removeAttribute('style'); 
        mainPage.style.background = hexToRgbA(project._themeColor); 
        mainPage.classList.add(`${project._listName.replaceAll(" ", "")}`)
    }



    function hexToRgbA(hex){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', 0.2)';
        }
        throw new Error('Bad Hex');
    }

    return { mainWindowStyleHome, mainWindowStyleToday, mainWindowStyleUpcoming, mainWindowStyleProject}
})(); 

export default mainWindow 