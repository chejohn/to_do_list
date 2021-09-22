
import {isToday, parseISO, isThisWeek} from 'date-fns';

"use strict";

const MakeListItem = (dueDate, taskName, taskDetails, projectName) => {
    
    let _dueDate = dueDate;
    let _taskName = taskName;
    let _taskDetails = taskDetails;
    let _projectName = projectName.trim();

    const getDueDate = () => _dueDate;

    const getTaskName = () => _taskName;

    const getTaskDetails = () => _taskDetails;

    const getProjectName = () => _projectName;

    const editDueDate = (newDueDate) => _dueDate = newDueDate;

    const editTaskName = (newTaskName) => _taskName = newTaskName;

    const editTaskDetails = (newTaskDetails) => _taskDetails = newTaskDetails;

    const editProjectName = (newProjectName) => _projectName = newProjectName.trim();

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

    else if (e.target.id === 'edit') {
       const listItemGUI = currentNode.parentNode.parentNode;
       const listIndex = listItemGUI.getAttribute('data-id');
       const nextSiblingGUI = listItemGUI.nextSibling;
       listItemGUI.remove();
       
       formGUICopy.className = 'editTask-form';
       formGUICopy.setAttribute('data-id', `${listIndex}`);
       accessEditFormFields(formGUICopy, e);
       GlobalNodes.mainContentGUI.insertBefore(formGUICopy, nextSiblingGUI);
    }
}

const accessEditFormFields = (formGUI, e) => {
    const taskTitleGUI = formGUI.children[0].children[0];
    const taskDetailsGUI = formGUI.children[0].children[1];
    const taskDateGUI = formGUI.children[0].children[2].children[0];
    const taskProjectNameGUI = formGUI.children[0].children[2].children[1];

    const listIndex = formGUI.getAttribute('data-id');
    const listItem = SectionContainers.homeContainer[listIndex];
    
    if (e.target.id === 'edit') {
        taskTitleGUI.value = listItem.getTaskName();
        taskDetailsGUI.value = listItem.getTaskDetails();
        taskDateGUI.value = listItem.getDueDate();
        taskProjectNameGUI.value = listItem.getProjectName();
    }
    else if (e.target.id === 'checkmarkIcon') {
        // update instance variables
        const oldProjectName = listItem.getProjectName();
        listItem.editTaskName(taskTitleGUI.value);
        listItem.editTaskDetails(taskDetailsGUI.value);
        listItem.editDueDate(taskDateGUI.value);
        listItem.editProjectName(taskProjectNameGUI.value);

        return {listItem, oldProjectName};
    }
}

const cancelForm = (e) => {
    const formContainer = e.target.parentNode.parentNode;
    if (formContainer.className !== 'editTask-form') {
        showAddTaskGUI();
    }
    else {
        const listIndex = formContainer.getAttribute('data-id');
        const listItem = SectionContainers.homeContainer[listIndex];
        const listItemGUI = createListItemGUI(listItem, e);
        const nextSiblingGUI = e.target.parentNode.parentNode.nextSibling;
        GlobalNodes.mainContentGUI.insertBefore(listItemGUI, nextSiblingGUI);
    }
    formContainer.remove();
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
    const projectContainerObj = SectionContainers.projectsContainer;
    if (!projectContainerObj.hasOwnProperty(projectName)) {
        projectContainerObj[projectName] = [listItem];
    }
    else {
        projectContainerObj[projectName].push(listItem);
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

const createListItemGUI = (listItem, e) => {
    // cloneNode(deep = true) => deep copy (including a copy of the node's tree) 
    // of node object
    const formContainerGUI = e.target.parentNode.parentNode;
    const listItemGUICopy = GlobalNodes.listItemGUI.cloneNode(true);
    
    if (formContainerGUI.className === 'editTask-form') {
        const listIndex = formContainerGUI.getAttribute('data-id');
        listItemGUICopy.setAttribute('data-id', listIndex);
    }
    else {
        listItemGUICopy.setAttribute('data-id', `${GlobalNodes.listCounter}`);
        GlobalNodes.listCounter++;
    }
    
    //Node.children => child elements excluding non-element nodes
    const listTaskNameGUI = listItemGUICopy.children[0].children[1];
    const listItemDateGUI = listItemGUICopy.children[1].children[0];
    listTaskNameGUI.textContent = listItem.getTaskName();
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
        cancelForm(e);
    }
}

const crossOutTask = (e) => {
    const checkBoxNode = e.target;
    const listItemGUI = checkBoxNode.parentNode.parentNode;
    listItemGUI.classList.toggle('checked-list-item');
}

const addNewListToGUI = (e) => {
    const listItem = createListObject(e);
    addToContainers(listItem);
    const listItemGUI = createListItemGUI(listItem, e);

    GlobalNodes.mainContentGUI.appendChild(listItemGUI);
    cancelForm(e);
    return listItem;
}

const editTaskGUI = (formGUI, e) => {
    const ListComponents = accessEditFormFields(formGUI, e);
    const listItem = ListComponents.listItem;
    const listItemGUI = createListItemGUI(listItem, e);
    const nextSiblingGUI = e.target.parentNode.parentNode.nextSibling;

    formGUI.remove();
    GlobalNodes.mainContentGUI.insertBefore(listItemGUI, nextSiblingGUI);
    
    return ListComponents;
}

const editProjectTabGUI = (ListComponents) => {
    const oldProjectName = ListComponents.oldProjectName;
    const newListItem = ListComponents.listItem;
    const newProjectName = newListItem.getProjectName();

    if (oldProjectName === '' && newProjectName === '') return;
    
    else if (oldProjectName === '') {
        addProjectTabGUI(newListItem);
    }
    else {
        const projectContainer = SectionContainers.projectsContainer[oldProjectName];
        for (const listItem of projectContainer) {
            if (listItem.getProjectName() !== oldProjectName) {
                const listIndex = projectContainer.indexOf(listItem, 0);
                projectContainer.splice(listIndex, 1);
                addProjectTabGUI(newListItem);
                return;
            }
        }
    }
}

const updateGUI = (e) => {
    const formGUI = e.target.parentNode.parentNode;
    if (formGUI.getAttribute('class') === 'editTask-form') {
        const ListComponents = editTaskGUI(formGUI, e);
        editProjectTabGUI(ListComponents);
    } 
    else {
        const listItem = addNewListToGUI(e);
        addProjectTabGUI(listItem);
    }
}

// updates the project count on the GUI
const updateProjectCountGUI = (projectName) => {
    for (const tabNodeGUI of GlobalNodes.projectContainerGUI.children) {
        if (tabNodeGUI.children[1].textContent === projectName) {
            const projectNameCount = SectionContainers.projectsContainer[projectName].length;
            if (projectNameCount <= 0) {
                tabNodeGUI.remove();
            }
            else {
                tabNodeGUI.children[0].textContent = projectNameCount;
                return;
            }   
        }
    }
}

const addProjectTabGUI = (listItem) => {
    const projectName = listItem.getProjectName();
    if (projectName === '') return;

    if (!SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
        const projectTabGUICopy = GlobalNodes.projectTabGUI.cloneNode(true);
        const projectCountGUI = projectTabGUICopy.children[0];
        const projectNameGUI = projectTabGUICopy.children[1];

        projectCountGUI.textContent = '1';
        projectNameGUI.textContent = projectName;
        GlobalNodes.projectContainerGUI.appendChild(projectTabGUICopy);
    }

        // update number within tab
    updateProjectContainer(listItem, projectName);
    updateProjectCountGUI(projectName);
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







