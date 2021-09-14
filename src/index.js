

const MakeListItem = (dueDate, taskName, taskDetails, projectName) => {
    this.dueDate = dueDate;
    this.taskName = taskName;
    this.taskDetails = taskDetails;
    this.projectName = projectName;

    const getDueDate = () => dueDate;

    const getTaskName = () => taskName;

    const getTaskDetails = () => taskDetails;

    const getProjectName = () => projectName;

    const editDueDate = (newDueDate) => dueDate = newDueDate;

    const editTaskName = (newTaskName) => taskName = newTaskName;

    const editTaskDetails = (newTaskDetails) => taskDetails = newTaskDetails;

    const editProjectName = (newProjectName) => projectName = newProjectName;

    return {getDueDate, getTaskName, getProjectName, 
        getTaskDetails,editDueDate, 
        editTaskDetails, editTaskName, editProjectName};
}

const showForm = () => {
    GlobalNodes.addTaskGUI.remove();
    GlobalNodes.mainContentGUI.appendChild(GlobalNodes.formGUI);
}

const hideForm = () => {
    GlobalNodes.formGUI.remove();
    clearForm();
    showAddTaskGUI();
}

const clearForm = () => {
    GlobalNodes.taskTitleGUI.value = '';
    GlobalNodes.taskDetailsGUI.value = '';
    GlobalNodes.taskDateGUI.value = '';
    GlobalNodes.taskProjectNameGUI.value = '';
}

const showAddTaskGUI = () => {
    GlobalNodes.mainContentGUI.appendChild(GlobalNodes.addTaskGUI);
}

const createListObject = () => {
    const taskDate = GlobalNodes.taskDateGUI.value;
    const taskName = GlobalNodes.taskTitleGUI.value;
    const taskDetails = GlobalNodes.taskDetailsGUI.value;
    const projectName = GlobalNodes.taskProjectNameGUI.value;
    const listItem = MakeListItem(taskDate, taskName, taskDetails, projectName);
}

const GlobalNodes = (function() {
    const addTaskGUI = document.querySelector('.addTask-container');
    addTaskGUI.addEventListener('click', showForm);

    // form elements
    const formGUI = document.querySelector('#list-form-container');
    const taskTitleGUI = document.querySelector('#task-title');
    const taskDetailsGUI = document.querySelector('#task-details');
    const taskDateGUI = document.querySelector('#task-date');
    const taskProjectNameGUI = document.querySelector('#task-project-name');
    
    const cancelFormGUI = document.querySelector('#cancelIcon');
    cancelFormGUI.addEventListener('click', hideForm);

    const submitFormGUI = document.querySelector('#checkmarkIcon');
    submitFormGUI.addEventListener('click', createListObject)
    formGUI.remove();
    // end of form elements

    const mainContentGUI = document.querySelector('#main-content');

    return {addTaskGUI, formGUI, mainContentGUI, 
        taskTitleGUI, taskDetailsGUI, taskDateGUI, taskProjectNameGUI};
})();





