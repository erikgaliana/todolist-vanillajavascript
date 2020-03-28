

document.getElementById("formTask").addEventListener('submit',saveTask);

function saveTask(e){
    
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;

    

    const task= { title, description};
    
    

    // save the task in the tasks object in local storage
    //localStorage.setItem('tasks', JSON.stringify(task));

    if ( localStorage.getItem('tasks')===null){
        let tasks=[];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
       let tasks= JSON.parse(localStorage.getItem('tasks'));
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    e.preventDefault();
}