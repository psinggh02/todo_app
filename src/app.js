/** 
  Create status columns
  @params val: Object
  @return Object
*/
const createTaskBox = val => {
    let box = document.createElement('div')
    let titleBox = document.createElement('div')  
    let taskBox = document.createElement('div')  
    let title = document.createElement('h3')      
    box.className = 'taskContainer'  
    titleBox.className = "titleBox"    
    title.innerHTML = val.label
    titleBox.appendChild(title)    
    taskBox.id = val.value  
    taskBox.className = 'taskBox' 
    taskBox.setAttribute('data-status', val.value)
    taskBox.ondragover = (e) =>{
        e.preventDefault();
    }
    taskBox.ondrop = (e) =>{
        const droppedCardData = JSON.parse(e.dataTransfer.getData('carddata'))
        todoList.tasks[parseInt(droppedCardData.taskid) - 1].status = e.target.dataset.status
        if (e.target.dataset.hasOwnProperty('status')) {
            todoList.tasks[parseInt(droppedCardData.taskid) - 1].status = e.target.dataset.status
            createLayout(taskStatus)
        } else if (e.target.parentElement.dataset.hasOwnProperty('status')) {
            todoList.tasks[parseInt(droppedCardData.taskid) - 1].status = e.target.parentElement.dataset.status
            createLayout(taskStatus)
        }
        e.preventDefault();
    }
    box.appendChild(titleBox)
    box.appendChild(taskBox)   
    return box
  }

  const addTask = (taskList, container) => {    
    for (let i in taskList) {
        let card = document.createElement('div')
        let cardTitle = document.createElement('div')
        let title = document.createElement('h3')
        let cardDesc = document.createElement('div')
        card.className = "taskCard"       
        card.setAttribute('data-status', taskList[i].status)
        card.setAttribute('data-taskId', taskList[i].taskId)
        cardTitle.className = "cardTitle"                  
        title.innerHTML = taskList[i].title
        cardDesc.className = "cardDesc"        
        cardDesc.innerHTML = taskList[i].description
        cardTitle.appendChild(title)             
        card.appendChild(cardTitle)
        card.appendChild(cardDesc)
        card.setAttribute('draggable', true)  
        card.ondragstart = (e) =>{
            e.dataTransfer.setData("cardData", JSON.stringify(e.target.dataset));
        }                 
        if (container.lastChild.id === taskList[i].status) {
            container.lastChild.appendChild(card)
        }
    }
  }

/** 
  Create layout based on the task status
  @params taskStatus: Object
*/
const createLayout = (taskStatus) => {
    let layout = document.querySelector('#todoLayout')
    layout.innerHTML = ""
    layout.className = "todoLayout"
    let col = document.createElement('div')
    col.className = "layoutContainer" 
    for (let i in taskStatus.list) {
        const box = createTaskBox(taskStatus.list[i])
        addTask(todoList.tasks, box)
        col.appendChild(box)
    }
    layout.appendChild(col)
  }