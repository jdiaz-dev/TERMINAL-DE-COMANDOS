/*  PARA INSTALAR ANGULAR   
    1 actulizar la ultima version de Node.js

    2 revisamos que la ultima version de node se hay instalado correctatmente
        node -v
        node --version

    3 actualizamos npm
        npm install -g npm@latest

    4 borramos la cache de npm, para que cuando intentemos bajar los nuevos paquetes de Angular, se descargen lo más actualizado y no los que se tiene en la cache
        npm cache clean --force

    5 desactivamos las auditorias de npm
        npm set audit false

    6 desinstalamos la version antigua que tenemos de cli
        npm uninstall -g angular-cli
        npm uninstall -g @angular/cli

    7 borramos de nuevo la cache
        npm cache clean --force

    8 instalamos angular cli
        npm install -g @angular/cli@latest
    
    9 para generar un nuevo proyecot angular (min 6.45 - victor robles)
        ng new

    10 para arrancar el proyecto
        nos movemos a nuestra carpeta PruebasAngular10
        ng serve -> arranca el servidor local de angular

    **para ver la version de angular
        ng --version
*/

/*  para gennerar componentes
        ng generate component "nombre del archivo"
 */

/*  PARA ELIMINAR NODE_MODULES 
    https://www.nikola-breznjak.com/blog/javascript/nodejs/how-to-delete-node_modules-folder-on-windows-machine/

    -> se instalo un nuevo paquete y no se elimino
*/

/* 
    https://stackoverflow.com/questions/43070441/cannot-uninstall-angular-cli?rq=1
 */

 /* para añadir librerias externas
    
 */

/* 
  to create other module
    ng g module users/users --module app --flat --routing
                          #to import directly in app module 
                          #--routing : it will has its own routing module
*/


/* 
    to deploy a project a project with angular
        1. install the next package using it command
            ng add angular-cli-ghpages
        
        2. deploy project setting a new base for html
            ng deploy --base-href=http://accentture.github.io/nameOfRepository
*/

/* 
    packages installed to try deploy an angular project:
        packages of netlify
        packages of angular cli gh pages
 */


/* 
    to update an app of angular
        ng update @angular/cli @angular/core
 */

/* 
    to create module and components for lazy load
        ng g m nameModule --routing
 */



