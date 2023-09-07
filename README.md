[:es:](#projecto-todo-list) [:us:](#project-to-do-list)
# Projecto: Todo List
Este proyecto trata de implementar una correcta organización del código como también la inclusión de los principios OOP.

## Tecnologias utilizadas 📚
![Tools](https://skillicons.dev/icons?i=js,html,css,webpack)

## Principales caracteristicas ⭐
 - Creación dinámica de "todos" mediante el uso de clases.
 - Los "todos" estan compuestos por: **título, descripción, plazo de vencimiento y prioridad.**
 - Separación de "todos": estos pueden ser independientes o integrales a diferentes proyectos; el usuario puede elegir la visualización que desee al ingresar al sitio.
 - La lógica de la aplicación  (creación de nuevos "todos", cambiar prioridad de los "todos", modificar "todos") está separada de la manipulación del DOM.

## Problemas conocidos 👎

 - Debido a mi inexperiencia no utilicé un select input con elementos option a la hora de posibilitar la elección de diferentes colores de los proyectos creados por el usuario, de esta forma no solo tiene un comportamiento erroneo si no se selecciona ninguna opción (no podemos cerrar el menu) sino que tampoco tiene una correcta accesibilidad. 
 - La pagina no presenta un diseño para celulares.
## Conclusión 🙌
Este fue unos de los primeros proyectos que tuve que utilizar todo lo que habia aprendido hasta el momento para poder realizarlo, eso incluia varios conceptos relacionados a la manipulación de objetos asi  como tambien el uso de herramientas como Webpack.
Una de los mayores desafios fue organizar los componentes y su correcta abstración ya que era la primera vez que hacia un proyecto de estas magnitudes. 
Creo que la página se comporta bastante bien, aunque con el uso de algun framework como React (que en ese momento no conocia) hubiera simplificado muchisimo la logica a la hora de presentar y contener el estado de los diferentes componentes ya que sin esto todo el tiempo tenia que llamar o cancelar metodos para que todo se comporte de forma adecuada.
<br/>
***
<br/>

# Project: To-Do List

This project aims to implement proper code organization as well as the inclusion of Object-Oriented Programming (OOP) principles.

## Technologies Used 📚

## Key Features ⭐

-   Dynamic creation of "to-dos" using classes.
-   "To-dos" are composed of: **title, description, due date, and priority.**
-   Separation of "to-dos": they can be independent or integral to different projects; users can choose the view they prefer when accessing the site.
-   The logic of the application (creating new "to-dos," changing "to-do" priorities, modifying "to-dos") is separated from DOM manipulation.

## Known Issues 👎

-   Due to my inexperience, I didn't use a select input with option elements to allow users to choose different colors for the projects they create. This not only results in incorrect behavior if no option is selected (the menu cannot be closed) but also lacks proper accessibility.
-   The page is not designed for mobile devices.

## Conclusion 🙌

This was one of the first projects where I had to use everything I had learned up to that point to complete it. This included various concepts related to object manipulation as well as the use of tools like Webpack. One of the biggest challenges was organizing the components and their proper abstraction since it was the first time I had worked on a project of this magnitude. I believe the page performs quite well, although using a framework like React (which I didn't know at the time) would have greatly simplified the logic for presenting and managing the state of different components, as without it, I had to constantly call or cancel methods to ensure everything behaved properly.