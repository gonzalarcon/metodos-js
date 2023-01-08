const listaDeTareas = document.querySelector("#tasks")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const TareasTotal = document.querySelector("#totalTasks")
const TareasRealizadas = document.querySelector("#checkTasks")
const tasks = [];

btnAgregar.addEventListener("click", ()=>{ 
    if(tareaInput.value == ""){
        alert ("debes ingresar una tarea")
        return
    } else{
        // const agregarTarea = () =>{
        // }
        const nuevaTarea = {
            id: tasks.length + 1,
            nombre: tareaInput.value,
            status: false,
        } 
        tasks.push(nuevaTarea)
        tareaInput.value="";
        
            let html = "";
            for(let task of tasks){
            html += `<tr>
                        <td>${task.nombre}</td> 
                        <td id="${task.id}">${task.id}</td>
                        <td><input type="checkbox" id="checkbox" name="checkbox"></td>
                        <td><button onclick="borrar(${task.id})" class="btn-danger">Borrar Tarea</button></td>
                        </tr>`;
            
            listaDeTareas.innerHTML=html;
            tareaInput.value='';
            TareasTotal.innerHTML=tasks.length;
            }   

            
    }
})


const borrar = (taskId) =>{
    const confirms = confirm('¿Seguro que deseas eliminar esta tarea?');
    if(confirms){
        const index = tasks.findIndex(task=>task.id===taskId)
        tasks.splice(index,1);  
    };
    const d = document.querySelector("#tasks")
    d.remove();
}

