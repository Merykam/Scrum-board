/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */     var form = document.getElementById("form");
        var titleInput=document.getElementById("title");
        var PriorityInput=document.getElementById("Priority");
        var dateInput=document.getElementById("date");
        var descriptionInput=document.getElementById("description");
        var StatusInput=document.getElementById("Status");
        var featureInput=document.getElementById("feature");
        var bugInput=document.getElementById("bug");
        



form.addEventListener("submit", saveTask)

function saveTask(stopLoading) {
        stopLoading.preventDefault();
        var title=titleInput.value;
        var Priority=PriorityInput.value;
        var date=dateInput.value;
        var description=descriptionInput.value;
        var Status=StatusInput.value;
        var feature=featureInput.value;
        

        let type1;
        if(feature.checked){
            type1 = 'Feature';
        }else{
            type1 = 'Bug';

        }
        

        var task={
            title:title,
            type:type1,
            priority:Priority,
            status:Status,
            date:date,
            description:description,
        }
        tasks.push(task);
    
    
    reloadTasks() 
}



function updateTask(index) {
    // GET TASK ATTRIBUTES FROM INPUTS
// console.log(tasks[index]);

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

    tasks[index].title=titleInput.value;
    tasks[index].status=StatusInput.value;  
    tasks[index].priority=PriorityInput.value;
    tasks[index].date=dateInput.value;
    tasks[index].description=descriptionInput.value;
    

    
    if(feature.checked){
        tasks[index].type=featureInput.value;

    }else{
        tasks[index].type=bugInput.value;
        

    }
    
    
    reloadTasks();


    
}

function deleteTask(index) {
    tasks.splice(index,1);

    reloadTasks();
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    let task=""
    var to_do = document.getElementById('to-do-tasks');
    var doing = document.getElementById('in-progress-tasks');
    var done = document.getElementById('done-tasks');

    to_do.innerHTML = '';
    doing.innerHTML = '';
    done.innerHTML = '';

    document.getElementById('to-do-tasks-count').innerHTML = 0;
    document.getElementById('in-progress-tasks-count').innerHTML = 0;
    document.getElementById('done-tasks-count').innerHTML = 0;

    // Set Task count

for(var i=0;i<tasks.length;i++){
    if(tasks[i].status=='To Do'){
       task= to_do ;
       document.getElementById('to-do-tasks-count').innerHTML++;
    }else if(tasks[i].status=='In Progress'){
        task= doing;
        document.getElementById('in-progress-tasks-count').innerHTML++;
    }else{
        task= done;
        document.getElementById('done-tasks-count').innerHTML++;
    }
    task.innerHTML+=`<button class="w-100 border py-4 d-flex" data-bs-toggle="modal" data-bs-target="#form" onclick="btnTasks(${i})">
    <div class="px-4">
        <i ${tasks[i].status=='To Do'? 'class="fa-solid fa-question text-red-700 fs-3"':tasks[i].status=='In Progress'?' class="fa-solid fa-circle-notch text-warning-600 fs-3 fa-spin"' :' class="fa-solid fa-check text-green-500 fs-3"'} ></i> 
    </div>
    <div class="lh-9">
        <div class="text-start fw-bold">${tasks[i].title}</div>
        <div class="">
            <div class="text-start">#${i+1} created in ${tasks[i].date}</div>
            <div class="text-start fs-6" title="${tasks[i].description}">${tasks[i].description.slice(0,150)}</div>
        </div>
        <div class="text-start mt-4">
            <span class="p-1 mb-6 bg-primary text-white rounded">${tasks[i].priority}</span>
            <span class="p-1 mb-6 bg-secondary text-white rounded">${tasks[i].type}</span>
        </div>
    </div>
</button>`;  
    }
}

function AddTask(){
    form.reset();
    document.getElementById('id-footer').innerHTML=`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button id="save" type="submit" class="btn btn-primary">Save changes</button>`
}
function btnTasks(index){ 
   
    let form=document.forms['first-form']
    form.title1.value=tasks[index].title;
    form.description1.value=tasks[index].description;
    form.date1.value=tasks[index].date;
    form.status1.value=tasks[index].status;
    form.priority1.value=tasks[index].priority;
    if(tasks[index].type=="Feature"){
        featureInput.checked = true;
        
    }else{
        bugInput.checked = true;
    }

    document.getElementById('id-footer').innerHTML=`
    <button id="update"  type="button" class="btn btn-warning" data-bs-dismiss="modal" onclick="updateTask(${index})" >Update</button>
    <button id="delete" type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteTask(${index})">Delete</button>`;


    
}
