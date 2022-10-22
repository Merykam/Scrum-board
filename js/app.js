/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
var form = document.getElementById("form");


form.addEventListener("submit", saveTask)
function saveTask(stopLoading) {
        stopLoading.preventDefault();
        var title=document.getElementById("title").value;
        var Priority=document.getElementById("Priority").value;
        var date=document.getElementById("date").value;
        var description=document.getElementById("description").value;

        var feature=document.getElementById("feature");
        

        let type = ""
        if(feature.checked) {
            type = "feature"
        } else {
            type = "bug"
        }

        var task={
            title:title,
            type:type,
            Priority:Priority,
            status:Status,
            date:date,
            description:description,
        }
        tasks.push(task);
        console.log(task);

        // reloadTasks();



    // Ouvrir modal form
    
    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}