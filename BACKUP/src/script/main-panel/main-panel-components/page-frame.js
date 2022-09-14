import { format, addDays, eachDayOfInterval, } from 'date-fns';

const pageFrameElement = (function(){
    const pageFrame = document.querySelector('div#page-frame'); 
    const todayInfoDate = format(new Date(), 'dd/MM/yyyy'); 
    const arrayWeek = (eachDayOfInterval({start: new Date(), end: addDays(new Date(), 7)})).map(date => format(date, 'dd/MM/yyyy')); 



     const pageFrameStyleHome = function(){
         pageFrame.textContent = 'HOME';
         pageFrame.classList.remove(...pageFrame.classList);
         pageFrame.removeAttribute('style'); 
         pageFrame.classList.add('page-frame-home');
     }

     const pageFrameStyleToday = function(){
         pageFrame.textContent = `TODAY (${todayInfoDate})`;
         pageFrame.classList.remove(...pageFrame.classList);
         pageFrame.removeAttribute('style'); 
         pageFrame.classList.add('page-frame-today'); 
         pageFrame.setAttribute('data-date', `${todayInfoDate}`); 

     }

     const pageFrameStyleUpcoming = function(){
         pageFrame.classList.remove(...pageFrame.classList);
         pageFrame.removeAttribute('style'); 
         pageFrame.classList.add('page-frame-upcoming'); 
         pageFrame.textContent = `UPCOMING (${todayInfoDate} - ${arrayWeek[arrayWeek.length - 1]})`; 
     }

     const pageFrameStyleProject = function(project){
         pageFrame.classList.remove(...pageFrame.classList);
         pageFrame.removeAttribute('style'); 
         pageFrame.classList.add('page-frame-project'); 
         pageFrame.textContent = project._listName; 
         pageFrame.style.background = project._themeColor;
      }

     return {pageFrameStyleHome, pageFrameStyleToday, pageFrameStyleUpcoming, pageFrameStyleProject }
})();

export default pageFrameElement 