
import {isToday, parseISO, isThisWeek} from 'date-fns';

const MakeListItem = (dueDate, taskName, taskDetails, projectName) => {
    
    const _dueDate = dueDate;
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
    clearForm();
    GlobalNodes.formGUI.remove();
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
    // parseISO(string in date format) => Date object
    // trim(string) => string with whitespace removed from both ends
    const dueDate = parseISO(listItem.getDueDate());
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

const createListItemGUI = (listItem) => {
    // cloneNode(deep = true) => deep copy (including a copy of the node's tree) 
    // of node object
    const listItemGUICopy = GlobalNodes.listItemGUI.cloneNode(true);
    
    //Node.children => child elements excluding non-element nodes
    const listTaskNameGUI = listItemGUICopy.children[0].children[1];
    listTaskNameGUI.textContent = listItem.getTaskName();
    const listItemDateGUI = listItemGUICopy.children[1].children[0];
    listItemDateGUI.textContent = listItem.getDueDate();

    // adding event listeners to list node
    const checkboxGUI = listItemGUICopy.children[0].children[0];
    checkboxGUI.addEventListener('click', crossOutTask);
    // end of adding event listeners to list node

    return listItemGUICopy;
}

const crossOutTask = (e) => {
    const listItemGUICopy = e.target.parentNode.parentNode;
    listItemGUICopy.classList.toggle('checked-list-item');
}

const addListToGUI = () => {
    const listItem = createListObject();
    addToContainers(listItem);
    const listItemGUICopy = createListItemGUI(listItem);

    GlobalNodes.mainContentGUI.appendChild(listItemGUICopy);
    hideForm();
    return listItem;
}

const updateGUI = () => {
    const listItem = addListToGUI();
    addProjectTabGUI(listItem);
}

const addProjectTabGUI = (listItem) => {
    // const listItemProjectName = listItem.getProjectName();
    // if (listItemProjectName === '') return;

    // const projectCount = SectionContainers.projectsContainer[listItemProjectName].length;
    // if (projectCount > 1) {
    //     const projectCountGUI = projectTabGUICopy.children[0];
    // }

    // const projectNameGUI = projectTabGUICopy.children[1];

    // projectNameGUI.textContent = listItemProjectName;
    // projectCountGUI.textContent = projectCount;

    // GlobalNodes.projectContainerGUI.appendChild(projectTabGUICopy);
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
    submitFormGUI.addEventListener('click', updateGUI)
    formGUI.remove();
    // end of form elements

    const listItemGUI = document.querySelector('.list-item');
    listItemGUI.remove();

    const projectContainerGUI = document.querySelector('#project-container');
    const projectTabGUI = document.querySelector('.projects');
    projectTabGUI.remove();

    const mainContentGUI = document.querySelector('#main-content');

    return {addTaskGUI, formGUI, mainContentGUI, 
        taskTitleGUI, taskDetailsGUI, taskDateGUI, 
        taskProjectNameGUI, listItemGUI, projectTabGUI, projectContainerGUI};
})();







