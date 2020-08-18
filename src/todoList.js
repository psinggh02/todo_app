const taskStatus = {
    list: [{
        label: 'Open',
        value: 'open'
    },{
        label: 'Pending',
        value: 'pending'
    },{
        label: 'Done',
        value: 'done'
    }]
}
const todoList = {
    tasks: [{
        title: 'Task 1',
        description: 'Task 1 description',
        status: 'open',
        taskId: 1
    },{
        title: 'Task 2',
        description: 'Task 2 description',
        status: 'pending',
        taskId: 2
    },{
        title: 'Task 3',
        description: 'Task 3 description',
        status: 'pending',
        taskId: 3
    },{
        title: 'Task 4',
        description: 'Task 4 description',
        status: 'open',
        taskId: 4
    },{
        title: 'Task 5',
        description: 'Task 5 description',
        status: 'done',
        taskId: 5
    },{
        title: 'Task 6',
        description: 'Task 6 description',
        status: 'done',
        taskId: 6
    },{
        title: 'Task 7',
        description: 'Task 7 description',
        status: 'done',
        taskId: 7
    }]
}

const initApp = () => {
    createLayout(taskStatus)
}