
import {isToday, parseISO, isThisWeek} from 'date-fns';

const MakeListItem = (dueDate, taskName, taskDetails, projectName) => {
    
    // parseISO(string in date format) => Date object
    // trim(string) => string with whitespace removed from both ends
    const _dueDate = parseISO(dueDate);
    const _taskName = taskName;
    const _taskDetails = taskDetails;
    const _projectName = projectName.trim();

    const getDueDate = () => _dueDate;

    const getTaskName = () => _taskName;

    const getTaskDetails = () => _taskDetails;

    const getProjectName = () => _projectName;

    const editDueDate = (newDueDate) => _dueDate = newDueDate;

    const editTaskName = (newTaskName) => _taskName = newTaskName;

    const editTaskDetails = (newTaskDetails) => _taskDetails = newTaskDetails;

    const editProjectName = (newProjectName) => _projectName = newProjectName;

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
    
    return listItem;
}

const updateProjectContainer = (listItem, projectName) => {
    if (SectionContainers.projectsContainer[projectName] === undefined) {
        SectionContainers.projectsContainer[projectName] = [listItem];
    }
    else {
        SectionContainers.projectsContainer[projectName].push(listItem);
    }
}

const addToContainers = (listItem) => {
    const dueDate = listItem.getDueDate();
    const projectName = listItem.getProjectName();

    if (isToday(dueDate)) {
        SectionContainers.todayContainer.push(listItem);
        SectionContainers.weekContainer.push(listItem);
    }
    else if (isThisWeek(dueDate)) {
        SectionContainers.weekContainer.push(listItem);
    }
    
    if (projectName !== '') {
        updateProjectContainer(listItem, projectName);
    }

    SectionContainers.homeContainer.push(listItem);
}

const addListToGUI = () => {
    const listItem = createListObject();
    addToContainers(listItem);
}

const SectionContainers = (function() {
    const homeContainer = [];
    const todayContainer = [];
    const weekContainer = [];
    const projectsContainer = {};

    return {homeContainer, todayContainer,
         weekContainer, projectsContainer};
})();

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
    submitFormGUI.addEventListener('click', addListToGUI)
    formGUI.remove();
    // end of form elements

    const mainContentGUI = document.querySelector('#main-content');

    return {addTaskGUI, formGUI, mainContentGUI, 
        taskTitleGUI, taskDetailsGUI, taskDateGUI, taskProjectNameGUI};
})();







