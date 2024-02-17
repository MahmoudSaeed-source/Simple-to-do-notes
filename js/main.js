let Input_Value = document.querySelector('.input_value');
let tasks_Container = document.querySelector('.tasks_Container');
let Check_Items = document.querySelectorAll('.Check_Item');
let Tasks_name = document.querySelectorAll('.Task_name')
let Check_All = document.querySelectorAll(".check_All")
let checked_remove_All = document.querySelector(".checked_remove_All");
let tasks = []
Input_Value.addEventListener('keypress',(e) => {
  if(Input_Value.value != "") {
    if(e.key === 'Enter') {
      tasks.push({ "task_Name": Input_Value.value,"is_Checked": false })
   
      addTask() 
      Input_Value.value = '';
  }
  }
})

function addTask() {
  tasks_Container.innerHTML = '';
  if(tasks.length > 1) {
       Check_All.checked = null
   checked_remove_All.style.display = 'flex'
} else {
       checked_remove_All.style.display = 'none'
       
  }
  tasks.forEach((el,index) => {
    tasks_Container.innerHTML += `<li class="task_content">
    <input class="Check_Item" ${el.is_Checked ? 'checked' : ''} type="checkbox" onchange="handleCheckboxState(event, ${index})">
      <span class="Task_name ${el.is_Checked ? "CheckedElement" : "Task_name"} " style="text-decoration: ${el.is_Checked ? 'line-through' : 'none'}"  > ${el.task_Name}</span>
    <button class="Btn_Delete" onclick = "Delete_element(${index})">Delete</button>
  </li>`;
  }) 

}
function handleCheckboxState(event,index) {
  const checkbox = event.target;
  const taskName = checkbox.nextElementSibling;
  if(checkbox.checked) {
    tasks[index].is_Checked = true;
    taskName.style.textDecoration = 'line-through';
    taskName.classList.add('CheckedElement')
  } else {
    tasks[index].is_Checked = false;
    taskName.style.textDecoration = 'none';
    taskName.classList.remove('CheckedElement')
  }
}

function Delete_element(index) {
  tasks.splice(index,1);
  addTask() 
}
function Remove_All_Date() {
 tasks = []
  addTask() 
}

function checkAll_Tasks(e) {
  let Check_All_Tasks = e.target;
  
  if(Check_All_Tasks.checked) {
   tasks.forEach((task) => {
     task.is_Checked = true;
     console.log(tasks)
  })
  } else {
     tasks.forEach((task) => {
       task.is_Checked = false;
  })
 }
  addTask()
}
   




// function addTask(text) {
//   const taskContent = document.createElement('li');
//   taskContent.classList.add('task_content');

//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.classList.add('Check_Item');
//   taskContent.appendChild(checkbox);

//   const taskName = document.createElement('span');
//   taskName.classList.add('Task_name');
//   taskName.textContent = text;
//   taskContent.appendChild(taskName);

//   const deleteButton = document.createElement('button');
//   deleteButton.classList.add('Btn_Delete');
//   deleteButton.textContent = 'Delete';
//   taskContent.appendChild(deleteButton);

//   tasks_Container.appendChild(taskContent);

//   // Add an event listener for the checkbox
//   checkbox.addEventListener('change', function () {
//     handleCheckboxState(checkbox, taskName);
//   });
// }

// function handleCheckboxState(checkbox, taskName) {
//   if (checkbox.checked) {
//     taskName.style.textDecoration = 'line-through';
//   } else {
//     taskName.style.textDecoration = 'none';
//   }
// }