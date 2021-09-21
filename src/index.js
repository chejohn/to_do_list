
import {isToday, parseISO, isThisWeek} from 'date-fns';

"use strict";

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

const showForm = (e) => {
    const currentNode = e.target;
    const formGUICopy = GlobalNodes.formGUI.cloneNode(true);

    if (currentNode.id === 'addTask-text' || 
    currentNode.className === 'addTask-container' || currentNode.id === 'addTask-bttn') {
        GlobalNodes.addTaskGUI.remove();
        GlobalNodes.mainContentGUI.appendChild(formGUICopy);
    }
    // enter logic gate when we press the edit icon
    else {
       const listItemGUI = currentNode.parentNode.parentNode;
       const nextSiblingGUI = listItemGUI.nextSibling;
       listItemGUI.remove();
       accessFormFields(formGUICopy, listItemGUI);
       formGUICopy.className = 'editTask-form';
       GlobalNodes.mainContentGUI.insertBefore(formGUICopy, nextSiblingGUI);
    }
}

const accessFormFields = (formGUI, listItemGUI) => {
    const taskTitleGUI = formGUI.children[0].children[0];
    const taskDetailsGUI = formGUI.children[0].children[1];
    const taskDateGUI = formGUI.children[0].children[2].children[0];
    const taskProjectNameGUI = formGUI.children[0].children[2].children[1];

    const listIndex = listItemGUI.getAttribute('data-id');
    const listItem = SectionContainers.homeContainer[listIndex];

    taskTitleGUI.value = listItem.getTaskName();
    taskDetailsGUI.value = listItem.getTaskDetails();
    taskDateGUI.value = listItem.getDueDate();
    taskProjectNameGUI.value = listItem.getProjectName();
}

const hideForm = (e) => {
    e.target.parentNode.parentNode.remove();
    showAddTaskGUI();
}

const showAddTaskGUI = () => {
    GlobalNodes.mainContentGUI.appendChild(GlobalNodes.addTaskGUI);
}

const createListObject = (e) => {
    // e.target is the submit bttn
    const taskTitleGUI = e.target.parentNode.parentNode.children[0].children[0];
    const taskDetailsGUI = e.target.parentNode.parentNode.children[0].children[1];
    const taskDateGUI = e.target.parentNode.parentNode.children[0].children[2].children[0];
    const taskProjectNameGUI = e.target.parentNode.parentNode.children[0].children[2].children[1];
    
    const taskDate = taskDateGUI.value;
    const taskName = taskTitleGUI.value;
    const taskDetails = taskDetailsGUI.value;
    const projectName = taskProjectNameGUI.value;
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
    listItemGUICopy.setAttribute('data-id', `${GlobalNodes.listCounter}`);
    GlobalNodes.listCounter++;
    
    //Node.children => child elements excluding non-element nodes
    const listTaskNameGUI = listItemGUICopy.children[0].children[1];
    listTaskNameGUI.textContent = listItem.getTaskName();
    const listItemDateGUI = listItemGUICopy.children[1].children[0];
    listItemDateGUI.textContent = listItem.getDueDate();

    return listItemGUICopy;
}

const manageListAPI = (e) => {
    if (e.target.className === 'checkbox') {
        crossOutTask(e);
    }
    else if (e.target.className === 'addTask-container' || 
    e.target.id === 'addTask-text' || 
    e.target.id === 'addTask-bttn' || e.target.id === 'edit') {
        showForm(e);
    }
    else if (e.target.id === 'checkmarkIcon') {
        updateGUI(e);
    }
    else if (e.target.id === 'cancelIcon') {
        hideForm(e);
    }
}

const crossOutTask = (e) => {
    const checkBoxNode = e.target;
    const listItemGUI = checkBoxNode.parentNode.parentNode;
    listItemGUI.classList.toggle('checked-list-item');
}

const addListToGUI = (e) => {
    const listItem = createListObject(e);
    addToContainers(listItem);
    const listItemGUI = createListItemGUI(listItem);

    GlobalNodes.mainContentGUI.appendChild(listItemGUI);
    hideForm(e);
    return listItem;
}

const updateGUI = (e) => {
    const formGUI = e.target.parentNode.parentNode;
    if (formGUI.getAttribute('class') === 'editTask-form') {
        editTaskGUI(formGUI);
    } 
    else {
        const listItem = addListToGUI(e);
        addProjectTabGUI(listItem);
    }
}

// updates the project count on the GUI
const updateProjectCountGUI = (projectName) => {
    for (const tabNodeGUI of GlobalNodes.projectContainerGUI.children) {
        if (tabNodeGUI.children[1].textContent === projectName) {
            const projectNameCount = SectionContainers.projectsContainer[projectName].length;
            tabNodeGUI.children[0].textContent = projectNameCount;
            return;
        }
    }
}

const addProjectTabGUI = (listItem) => {
    const projectName = listItem.getProjectName();
    if (projectName === '') return;

    // enter logic gate if tab already exists
    if (SectionContainers.projectsContainer[projectName].length > 1) {
        // update number within tab
        updateProjectCountGUI(projectName);
    }
    else {
        const projectTabGUICopy = GlobalNodes.projectTabGUI.cloneNode(true);
        const projectCountGUI = projectTabGUICopy.children[0];
        const projectNameGUI = projectTabGUICopy.children[1];

        projectCountGUI.textContent = '1';
        projectNameGUI.textContent = projectName;
        GlobalNodes.projectContainerGUI.appendChild(projectTabGUICopy);
    }
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
    let listCounter = 0;

    const addTaskGUI = document.querySelector('.addTask-container');
    
    const formGUI = document.querySelector('#list-form-container');
    formGUI.remove();

    const listItemGUI = document.querySelector('.list-item');
    listItemGUI.remove();

    const projectContainerGUI = document.querySelector('#project-container');
    const projectTabGUI = document.querySelector('.projects');
    projectTabGUI.remove();

    const mainContentGUI = document.querySelector('#main-content');
    mainContentGUI.addEventListener('click', manageListAPI);

    return {addTaskGUI, formGUI, mainContentGUI, 
        listItemGUI, projectTabGUI, projectContainerGUI, listCounter};
})();







