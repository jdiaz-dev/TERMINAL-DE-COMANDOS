/* VIDEO 1

    para configurar GIT
        git config --global user.name "Jonathan Alejandro"
        git config --global user.email "<lordgelsin26@gmail.com>"

    para ver la configuración de GIT que se hizo
        git config --list

    repetimos los comandos si queremos cambiar los datos

*/
//commit = punto de partida de la aplicacion

/*  VIDEO 2

    para ayuda en GIT
        git help init
*/
//un repositorio de GIT es un proyecto de GIT

/*  VIDEO 5

    para inicializar un repositorio de GIT
        git init
*/

/*  VIDEO 6
    para clonar un repositorio de GIT
        git clone "nombre del archivo a clonar" "nombre del archivo clonado"

    para clonar un archivo de la nube
        git clone https://github.com/victorobs/ejemplo-php-poo-mvc.git "nombre del archivo clonado"
*/

/*  VIDEO 7: esapacio de trabajo
    para motrar todo lo que esta en el indice(bandeja de salida)
        git status

    para añadir al indice que se va a commitear
        git add

    para añadirlo todo
        git add .

*/
//commit--enconmendar

/*  VIDEO 8: status, add y self
    para los restaurar cambios añadidos
        git checkout "nombre de la pagina"

    para ver las diferencias de los cambios hechos
        git diff "nombre del fichero"
*/

/*  VIDEO 9: gitignore
    para evitar que nuestro archivo se guarde en el proximo commit, además que no aparecere en el indice
    --para modificicar el gitignore
        nano .gitignore
            ./baseDeDatos.sql
        ctrl + x
        enter
*/

/*
COMMIT
--un commit es una version del programa actual, es un punto de partida de nuestro código al cual podemos volver cuando queramos
--además podemos comparar los estados de la versión de nuetro programa en cualquier momento
--en la rama master creara un commit con todos los archivos añadidos
*/

/*  VIDEO 10: commit y versiones
    para hacer un commit
        git commit -m "indicamos que contiene este commit"
            donde:
                -m = permite nombrar el commit

    para mostrar los commits que le hemos indicado
        git log --oneline

    para ver el commit completo
        git log

    para evitar hacer el add
        git commit -am ""
            donde: a = all
                   m = mensaje

    para hace comparaciones entre los commits
        git diff 1f2383a 51b0778
                 actual  anterior
                 rojo    verde
*/

/*
    VIDEO 11 reset y checkout
    para devolver un archivo que no queremos commitear
        1) git reset HEAD "nombre del fichero"

           git reset .

    para deschacer los cambios
        2) git checkout "nombre del fichero"
*/

/*  VIDEO 12 para eliminar los commit
        git reset --hard HEAD~0 (no remueve los cambios, solo los devuleve)
                            --cual va a ser el ultimo commit
                                0 ultimo
                                1 penultimo
                                2 antepenultimo

        **otra forma de hacerlo
        git reset --hard fd1a296
                         codigo del nuevo MASTER

        **para eliminar el commit pero sin modificar o remover el archivo  ================= interesting =========
        git reset HEAD~0
                        --cual va a ser el ultimo commit
                            0 ultimo
                            1 penultimo
                            2 antepenultimo
*/

/*  VIDEO 12 volver a un commit anterior (nos podemos desplazar por cualquier commit porque NO se han borrado, SOLO nos hemos deplazado)
        git checkout fd1a296

    --para movernos a master
        git checkout master

    --despues que nos hemos movido a otra rama, si hacemos un nuevo commit, podriamos perder ese nuevo commit, para que esto no pase debemos crear una NUEVA rama. Entonces para evitar esto creamos una nueva rama

        git branch ramaDePruebas 8a507bf

    --para ver otras ramas
        git branch

    --para movernos entre ramas (tambien incluye ramas remotas)
        git ckeckout ramaDePruebas
        git checkout master
*/

/*  VIDEO 14 buscar commits                                         ================= interesting =========
        git log --grep="palabra que queremos buscar"

    --para buscar commits por el contenido del codigo
        git log -S '3er cambio realizado'

*/

/*  VIDEO 15 ramas : habrá momentos en los que queramos desarrollar funcionalidades separadas de la rama principal, porque estas no iran en producción

    --para crear una nueva rama
        git branch lista

    --para moverte a otra rama
        git checkout otraRama

    --para eliminar una rama que no ha sido mesclada
        git branch -D otraRama
                    D mayuscula fuerza el borrado de la rama

    --IMPORTANTE: si estando en una rama haces modificaciones en el fichero y no guardas los cambios realizados, no te dejara cambiarte de rama

    --para hacer la fusion de ramas
        git merge otraRama

    --para ver mas opciones por ejemplo del merge o branch
        git help merge
        git help branch
*/

/* VIDEO 16 stash - savar cambios en el stash
    --para evitar traer los cambios hechos en una rama
    --algunas veces deja cambiar de rama sin hacer commit en los cambios, otras veces no.

    --stash guarda los cambios realizados en una memoria, entonces eso sera guardado en el stash, por lo tanto no va a estar en dentro del git status
        git stash

    --para ver el stash
        git stash show

    --para sacar datos el stash, recuperando nuestro trabajo previo de la memoria
        git stash pop

*/

/*  VIDEO 17
    --para limpiar el stash
        git stash clear
*/

/*  VIDEO 18
    --para llevar por ejemplo un commit especifico de otra rama a master, esto evita hacer un merge completo con otra rama
        git cherry-pick idDelCommitDeLaOtraRama

        git cherry-pick -m otraRama
                        -m 2 : current is not mainline
                        -m 1 : current branch is mainline


    --si añado otro un archivo en otra rama, ese archivo no podra ser visto en la rama master por ejemplo


*/


/*  para eliminar un repositorio de GIT
        rm -rf .git

*/

/*  to see origins added remotely to git
        git remote -v

*/














/* ============================================================================== GITHUB */
/*  **PARA CREAR UN REPOSITORIO REMOTO EN GITHUB**
git init
    git remote add origin https://github.com/korah26/Proyect-NASA.githttps://github.com/korah26/Proyect-NASA.git


    --other way to add link
    git remote add -m azure https://Tom Cruce@section7name.scm.azurewebsites.net/section7name.git


    git status
    git add *
    git commit -m ""
    git push origin master -> para actualizar


*/

/*  PARA CLONAR UN REPOSITORIO
        git clone https://github.com/korah26?tab=repositories

*/

/*  PARA OBTENER EL CODIGO DE UN REMOTO
    --los remotos no son mas que ramas nuevas
        git pull origin master

    **Lo siguiente son los otros dos comandos que ejecuta git pull
    --PARA VER SI TIENE NOVEDADES Y DESCARGALAS
        git fetch origin
                1. if everything is updated, nothing will be fetched

        --LA SEGUNDA PARTE ES HACER UNA FUSION ENTRE NUESTRA RAMA REMOTA Y NUESTRA RAMA LOCAL
        git merge origin master

        */

/*  PARA VER TODAS SUS RAMAS
git branch --all

*/

/*
para cambiar de repositorio remoto
        git remote set-url origin urlNewRepository.git
*/

/*
    from master Node.js

    to recovery information lossed, it work after to make the commit, and only it recovery information saven in the commit
        git checkout -- .
*/

/*
    ♥ to create backup in github
    to create a release tag: usefull to indicate version of the project
        git tag -a v1.0.0 -m "THE END SECTION 8"
                -a: to create a annotated version
                v1.0.0: name of version provided by me

    to upload tags
        git push --tags

    ■ in github: after to edit tag in github, it become from a normal tag to release tag

 */

/* ===================================================== IN THE WORK */

/*
    git push
        it add changes directly to github
*/

/*
    to remove a file pushed in from a status
        git rm .env --cached
            rm: remove
            .env : file that I want to remove
 */

/* 
    to change branch and to pull together
        git switch otherBranch
*/

/* 
    to change branch without save changes
        git checkout otherBranch --force  
*/


/* 
    to create and change branch inmediatly
        git checkout -b nameBranch 
*/


/* 
    to download remote content
        git fetch
*/

/* 
    to list remote branch   
        git branch -v -a
*/

/* 
    to retrieve deleted branch
        1. search with 
                git reflog
                
        2. create new branch with the deleted branch
                     git checkout -b <your-branch> <sha>
            example: git checkout -b reassingTerminalM bf3d8a0

*/

/* 
    to show commits from specific branch
        git cherry -v develop hotfix/ReleaseAndReassign
                      -no will display develop changes
                      -it will show changes of hotfix/ReleaseAndReassign
*/

/* 
    to display commis by author
        git log --author=Jonath
*/




/* ============================================================================== GITLAB */

/*
    to generate the SSH key in terminal command of git
        ssh-keygen -t rsa -b 2048 -C "lordgelsin26@gmail.com"

        --after it will ask name of folder and password

        --the green file must be opened with bloc of notes

        --copy and paste in the field of SSH of gitlab, add date of expiration, and I press add key button


        --we create a new file
        --after clone project of gitlab
        --copy the clone with option SSH
            git@gitlab.com:accentture/learning-gitlab.git

        clone the project of gitlab
            git@gitlab.com:accentture/practicing-new-project-with-gitlab.git

*/

/* 
    to check
        git revert
        difference between git pull nameBranch and git pull rebase origin nameBranch
*/



/* 
    ============================================ CONTRIBUTING
    
    - to syncronize code with fork
        git pull upstream --ff-only
                        ff: fast forward

*/