const task=document.getElementById('task');
const btn=document.getElementById('btn');
const taskList=document.getElementById('taskList');

function createTask() {
        let newLi=document.createElement('li');
        newLi.textContent=task.value;
        taskList.append(newLi);
        task.value="";
    }
function checkTask(event){ 
    if (event.target.tagName === 'LI'){
        event.target.classList.toggle('completed');
    }
}
btn.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);