const btnAgregar = document.querySelector("#newTask")
// const task = document.querySelector("#newTask")
const listaDeTareas = document.querySelector("#tasks")
const tareaInput = document.querySelector("#nuevaTarea")
const TareasTotal = document.querySelector("#totalTasks")
const TareasRealizadas = document.querySelector("#checkTasks")
const tasks = [];

btnAgregar.addEventListener('click', ()=>{ 
    if(tareaInput.value === ""){
        alert ("debes ingresar una tarea")
        return;
    }else{ 
        agregarTarea();
    }
});

const agregarTarea = () =>{
    const nuevaTarea = {
            id: tasks.length + 1,
            nombre: tareaInput.value,
            status: false,
        } 
        tasks.push(nuevaTarea)
        updateList();
};

const updateList = () =>{
    let row = ""; countTaskReady=0;
    for(let task of tasks){
        if(nuevaTarea.status){
            countTaskReady++;
        }
        row += 
            `<tr class="${task.status ? 'bg-success' : 'bg-Light'}">
                <td>${task.nombre}</td>
                <td id="${task.id}">${task.id}</td>
                <td class="text-right"> <button onclick"updateStatus(${task.id}" class="btn btn-${task.status ? 'success' : 'warning'}">${task.status ? 'Realizada' : 'Pendiente'}</button></td>
                <td class="text-right"><button onclick="borrar(${task.id})" class="btn btn-danger" id="btnEliminar">Borrar Tarea</button></td>
            </tr>`;
    }
            
        listaDeTareas.innerHTML=row;
        tareaInput.value='';
        TareasTotal.innerHTML=tasks.length;
        TareasRealizadas.innerHTML=countTaskReady;   

}            

const updateStatus=(taskId)=>{
    const index = tareaInput.list.findIndex(task=>task.id===TaskId);
    tareaInput[index].status= !tareaInput[index].status;
}

const borrar = (taskId) =>{
    const confirms = confirm('¿Seguro que deseas eliminar esta tarea?');
    if(confirms){
        const index = tareaInput.list.findIndex(task=>task.id===TaskId)
        tasks.splice(index,1);  
        updateList();
    };
}

