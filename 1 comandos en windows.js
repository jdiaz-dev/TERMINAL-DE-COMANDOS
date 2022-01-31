/* 
    .   directorio actual en el que nos encontramos
    ..  directorio padre
*/

/* 
    windows no es CASESENSITIVE
*/

/* CREAR DIRECTORIOS
    md   para crear directorios
*/

/* 
    copy con    crear archivos de texto
*/

/*  RENOMBRAR CUALQUIER ARCHIVO
    rename
*/

/*  VISUALIZAR ARCHIVOS DE TEXTO
    type
*/

/* BORRADO DE ARCHIVOS
    del     borra el contenido de un directorio, no borra los archivos, borra videos, musica
    erase   borra el contenido de un direcotiro, no borra los archivos
    rd      borra solo directorios vacios
*/

/*  BORRADO DE TERMIMAL
    cls     borra el contenido de la terminal de comandos
*/

/* AYUDA PARA COMANDOS
    help    ayuda acerca de un comando
*/


/* 
    pdf en google https://stackoverflow.com/questions/46074235/headless-chrome-to-print-pdf
*/


/*  FOR SEARCH FILES AND DOCUMENTS      https://www.dummies.com/computers/operating-systems/windows-xp-vista/how-to-search-for-files-from-the-dos-command-prompt/
    
    dir example.doc* /s /p
*/


/* COMMADS PARA VS CODE           https://code.visualstudio.com/docs/editor/command-line 
    
    opens file :    code . --locale
*/


/* FOR OPEN DOCUMENTS              https://superuser.com/questions/511486/how-to-start-open-a-file-folder-that-contains-space-in-its-name-through-command

    open documents  :   "  "
 
*/

/*  for open control panel
    control panel
*/

/*  
    for to turn off the computer : shutdown
    for restart the computer : shutdown-r
*/

/* 
    FOR MORE : https://www.xataka.com/basics/comandos-basicos-para-dar-tus-primeros-pasos-consola-windows-cmd
*/

/* para rellenar nombres de archivos
    TAB
*/

/* for search string of text
    dir *nomvre del archivo* /s .pdf 
*/

/* for open file in chrome
    start chrome "file name"
*/

/* para copiar peliculas
    COPY "nombre de la pelicla" D:
*/

/*  para expulsar USB de quitando letra : http://www.aitek.ch/windows-remove-usb-device-from-cmd-with-diskpart/
    diskpart - list volume - volumen donde esta el USB - remove, exit

    para asginar letra al USB : https://www.diskpart.com/diskpart/assign-drive-letter-4125.html
    diskpart - list volume - volumen donde esta el USB - assign letter , exit
*/

/*  para ver archivos ocultos
        dir /ah
            a = all
            h = hidden

*/

/* 
    --to empty cache in windows
        ipconfig/flushdns

    --other command that can help
        ipconfig/release
        ipconfig/renew
 */








/* 
    sfc /scannow
        --examaina todos los archivos del sistema y reemplazará todos los archivos dañados con una carpeta en cache ubicada en la carpeta comprimida %WinDir%\System32\dllcache.
        --%WinDir% -> representa la carpeta del sistema operativo

        https://pcseguro.es/preguntenos/como-solucionar-el-codigo-de-error-de-windows-10-update-0x800f0922/
 */

 /* 
    ACTIVAR WINDOWS UPDATE
        https://bootzuna.wordpress.com/2015/12/09/reparar-windows-update/
 */

/* 
    to check ip of computer
        ipconfig
*/




 /* ================ COMANDOS PARA LA TERMINAL DE LINUX ================ */
/* 
    para acceder a otro disco
        cd C:/

    para movernos a otra carpeta
        cd "nombre de carpeta"
*/

/* 
    para listar archivos
        ls -lh
            donde: -lh = es para mostrar todas sus caracteristicas
*/

/* 
    para ver los archivos ocultos
        ls -la
            donde: l = en forma de lista
                   a = para ver archivos ocultos
*/

/* 
    para borrar proyecto
        rm -rf "nombre del arhivo"
*/

/* 
    para crear ficheros
        touch "baseDeDatos.sql"

        otro ejemplo
        touch .gitignore
*/

/* 
    nano : es un editor de codigo dentro de la terminal

*/

/*  para mover multiples archivos
           move           *.mp3            F:
        comando  - extension a mover  - destio

*/

/* 
    to remove folder and its content
        rmdir pathFolder /s /q
*/