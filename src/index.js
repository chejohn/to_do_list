import {
  isToday,
  parseISO,
  isThisWeek,
  format,
  isBefore,
  endOfToday,
} from 'date-fns';

function ListItem(dueDate, taskName, taskDetails, projectName) {
  this.dueDate = dueDate;
  this.taskName = taskName;
  this.taskDetails = taskDetails;
  this.projectName = projectName;
  this.uniqueID = GlobalVars.uniqueID++;
  this.previousProjectName;
}

ListItem.prototype.getDueDate = function () {
  return this.dueDate;
};
ListItem.prototype.getTaskName = function () {
  return this.taskName;
};
ListItem.prototype.getTaskDetails = function () {
  return this.taskDetails;
};
ListItem.prototype.getProjectName = function () {
  return this.projectName;
};
ListItem.prototype.getID = function () {
  return this.uniqueID;
};
ListItem.prototype.editDueDate = function (newDueDate) {
  this.dueDate = newDueDate;
};
ListItem.prototype.editTaskName = function (newTaskName) {
  this.taskName = newTaskName;
};
ListItem.prototype.editTaskDetails = function (newTaskDetails) {
  this.taskDetails = newTaskDetails;
};
ListItem.prototype.editProjectName = function (newProjectName) {
  this.previousProjectName = this.projectName;
  this.projectName = newProjectName.trim();
};
ListItem.prototype.getLastProjectName = function () {
  return this._previousProjectName;
};

const retrieveListObject = (guiComponent) => {
  const listIndex = guiComponent.getAttribute('data-id');
  const listObject = SectionContainers.homeContainer[listIndex];
  return listObject;
};

const displayHomeList = () => {
  for (const list of GlobalVars.mainContentGUI.children) {
    if (list.className === 'addTask-container') break;
    list.style.display = 'flex';
  }
};

const displayTodayList = () => {
  for (const list of GlobalVars.mainContentGUI.children) {
    if (list.className === 'addTask-container') break;
    const listObject = retrieveListObject(list);
    const dueDate = parseISO(listObject.getDueDate());
    if (!isToday(dueDate)) {
      list.style.display = 'none';
    } else {
      list.style.display = 'flex';
    }
  }
};

const displayWeekList = () => {
  for (const list of GlobalVars.mainContentGUI.children) {
    if (list.className === 'addTask-container') break;
    const listObject = retrieveListObject(list);
    const dueDate = parseISO(listObject.getDueDate());
    if (!isThisWeek(dueDate)) {
      list.style.display = 'none';
    } else {
      list.style.display = 'flex';
    }
  }
};

const displayProjectList = (e) => {
  if (
    e.target.className !== 'projects' &&
    e.target.className !== 'chore-count' &&
    e.target.className !== 'chore-name'
  )
    return;

  if (e.target.className === 'projects') {
    var projectNameGUI = e.target.children[1].textContent;
  } else if (e.target.className === 'chore-count') {
    projectNameGUI = e.target.nextElementSibling.textContent;
  } else if (e.target.className === 'chore-name') {
    projectNameGUI = e.target.textContent;
  }

  for (const list of GlobalVars.mainContentGUI.children) {
    if (list.className === 'addTask-container') break;
    const listObject = retrieveListObject(list);
    const projectName = listObject.getProjectName();

    if (projectName !== projectNameGUI) {
      list.style.display = 'none';
    } else {
      list.style.display = 'flex';
    }
  }
};

const switchTabs = (e) => {
  const tabText = e.target.textContent;
  if (tabText === 'Home') {
    displayHomeList();
  } else if (tabText === 'Today') {
    displayTodayList();
  } else if (tabText === 'Week') {
    displayWeekList();
  } else {
    displayProjectList(e);
  }
  updateTaskHeader(e);
  updateLocalStorage();
};

const updateTaskHeader = (e) => {
  const taskHeaderName = GlobalVars.taskHeaderGUI.children[0];

  if (e.target.className === 'tab' && e.target.id === '') {
    taskHeaderName.textContent = e.target.textContent;
  } else if (e.target.className === 'projects') {
    taskHeaderName.textContent = e.target.children[1].textContent;
  } else if (e.target.className === 'chore-name') {
    taskHeaderName.textContent = e.target.textContent;
  } else if (e.target.className === 'chore-count') {
    taskHeaderName.textContent = e.target.nextElementSibling.textContent;
  }
};

const manageListAPI = (e) => {
  const formContainer = e.target.parentNode.parentNode;
  if (
    e.target.className === 'addTask-container' ||
    e.target.id === 'addTask-text' ||
    e.target.id === 'addTask-bttn' ||
    e.target.id === 'edit'
  ) {
    showForm(e);
  } else if (e.target.id === 'cancelIcon') {
    cancelForm(e);
  } else if (e.target.id === 'checkmarkIcon') {
    const validForm = validateForm(e);
    if (!validForm) return;

    if (formContainer.className === 'addTask-form') {
      var listObject = createListObject(e);
    } else if (formContainer.className === 'editTask-form') {
      listObject = editListObject(e);
    }
    const listGUI = createListGUI(e, listObject);
    appendListGUI(e, listGUI);
    updateSectionContainers(e, listObject);
    updateProjectTabsGUI(e, listObject);
    updateLocalStorage();
  } else if (e.target.className === 'checkbox') {
    strikeOutList(e);
    updateLocalStorage();
  } else if (e.target.id === 'trash') {
    const listGUI = e.target.parentNode.parentNode;
    const listObject = retrieveListObject(listGUI);
    updateSectionContainers(e, listObject);
    updateProjectTabsGUI(e, listObject);
    deleteListGUI(listGUI);
    changeGUIDataIDs(e);
    updateLocalStorage();
  } else if (
    e.target.className === 'list-item' ||
    e.target.classList[0] === 'list-item'
  ) {
    showContentSummary(e);
  }
};

const validateForm = (e) => {
  const taskTitleForm = e.target.parentNode.previousElementSibling.children[0];
  if (taskTitleForm.value === '') {
    taskTitleForm.classList.add('validation-failed');
    taskTitleForm.placeholder = 'Must include a title';
    return false;
  }
  return true;
};

const showContentSummary = (e) => {
  const listGUI = e.target;
  const summaryContainer = GlobalVars.summaryContainerGUI;
  document.body.appendChild(summaryContainer);
  const listObject = retrieveListObject(listGUI);

  const taskTitleGUI = summaryContainer.children[0].children[0].children[0];
  const taskDueDateGUI = summaryContainer.children[0].children[1].children[0];
  const projectNameGUI = summaryContainer.children[0].children[1].children[1];
  const summaryDetailsGUI =
    summaryContainer.children[0].children[1].children[3];

  let dueDate = listObject.getDueDate();
  if (dueDate !== '') {
    dueDate = format(parseISO(dueDate), 'MM/dd/yyyy');
  }
  const projectName = listObject.getProjectName().trim();

  taskTitleGUI.textContent = listObject.getTaskName();
  taskDueDateGUI.textContent = `Due: ${dueDate}`;
  projectNameGUI.textContent = `Project: ${projectName}`;
  summaryDetailsGUI.textContent = listObject.getTaskDetails();
};

const closeSummaryContainer = (e) => {
  if (e.target.className === 'close-popUp-icon') {
    GlobalVars.summaryContainerGUI.remove();
  }
};

const changeGUIDataIDs = (e) => {
  if (e.target.id === 'trash') {
    GlobalVars.listCounter--;
  }
  let counter = 0;
  for (const listGUI of GlobalVars.mainContentGUI.children) {
    if (listGUI.className === 'addTask-container') break;
    listGUI.setAttribute('data-id', `${counter}`);
    counter++;
  }
};

const deleteListGUI = (listGUI) => {
  listGUI.remove();
};

const appendListGUI = (e, listGUI) => {
  const formContainer = e.target.parentNode.parentNode;
  if (formContainer.className === 'addTask-form') {
    GlobalVars.mainContentGUI.appendChild(GlobalVars.addTaskGUI);
    GlobalVars.mainContentGUI.insertBefore(listGUI, GlobalVars.addTaskGUI);
  } else if (formContainer.className === 'editTask-form') {
    const { nextSibling } = formContainer;
    GlobalVars.mainContentGUI.insertBefore(listGUI, nextSibling);
  }
  formContainer.remove();
};

const editListObject = (e) => {
  const formContainer = e.target.parentNode.parentNode;

  const listObject = retrieveListObject(formContainer);
  const formInfo = accessFormFields(e);

  const { taskTitle } = formInfo;
  const { taskDetails } = formInfo;
  const { taskProjectName } = formInfo;
  const taskDueDate = formInfo.taskDate;

  listObject.editDueDate(taskDueDate);
  listObject.editTaskName(taskTitle);
  listObject.editTaskDetails(taskDetails);
  listObject.editProjectName(taskProjectName);

  return listObject;
};

const strikeOutList = (e) => {
  const listGUI = e.target.parentNode.parentNode;
  listGUI.classList.toggle('checked-list-item');
};

const showForm = (e) => {
  const formGUICopy = GlobalVars.formGUI.cloneNode(true);

  if (
    e.target.className === 'addTask-container' ||
    e.target.id === 'addTask-text' ||
    e.target.id === 'addTask-bttn'
  ) {
    formGUICopy.className = 'addTask-form';
    GlobalVars.addTaskGUI.remove();
    GlobalVars.mainContentGUI.appendChild(formGUICopy);
  } else if (e.target.id === 'edit') {
    formGUICopy.className = 'editTask-form';

    const listGUI = e.target.parentNode.parentNode;
    const listObjectIndex = listGUI.getAttribute('data-id');
    const listObject = SectionContainers.homeContainer[listObjectIndex];
    const nextSiblingGUI = listGUI.nextSibling;
    listGUI.remove();
    prepareEditFormGUI(formGUICopy, listObject, listGUI);
    GlobalVars.mainContentGUI.insertBefore(formGUICopy, nextSiblingGUI);
  }
};

const prepareEditFormGUI = (formGUI, listObject, listGUI) => {
  const formTitle = formGUI.children[0].children[0];
  const formDetails = formGUI.children[0].children[1];
  const formDate = formGUI.children[0].children[2].children[0];
  const formProjectName = formGUI.children[0].children[2].children[1];

  formTitle.value = listObject.getTaskName();
  formDetails.value = listObject.getTaskDetails();
  formDate.value = listObject.getDueDate();
  formProjectName.value = listObject.getProjectName().trim();

  const listIndex = listGUI.getAttribute('data-id');
  formGUI.setAttribute('data-id', listIndex);
};

const cancelForm = (e) => {
  const formContainer = e.target.parentNode.parentNode;
  if (formContainer.className === 'addTask-form') {
    GlobalVars.mainContentGUI.appendChild(GlobalVars.addTaskGUI);
  } else if (formContainer.className === 'editTask-form') {
    const nextSiblingNode = formContainer.nextSibling;
    const listObject = retrieveListObject(formContainer);
    const listGUI = createListGUI(e, listObject);
    GlobalVars.mainContentGUI.insertBefore(listGUI, nextSiblingNode);
  }
  formContainer.remove();
};

const createListObject = (e) => {
  const formInfo = accessFormFields(e);
  const { taskTitle } = formInfo;
  const { taskDetails } = formInfo;
  const { taskDate } = formInfo;
  const { taskProjectName } = formInfo;
  const listObject = new ListItem(
    taskDate,
    taskTitle,
    taskDetails,
    taskProjectName
  );
  return listObject;
};

const accessFormFields = (e) => {
  const formGUI = e.target.parentNode.parentNode.children[0];
  const taskTitle = formGUI.children[0].value;
  const taskDetails = formGUI.children[1].value;
  const taskDate = formGUI.children[2].children[0].value;
  const taskProjectName = formGUI.children[2].children[1].value;

  return {
    taskTitle,
    taskDetails,
    taskDate,
    taskProjectName,
  };
};

const updateSectionContainers = (e, listObject) => {
  const formContainer = e.target.parentNode.parentNode;
  const dueDate = parseISO(listObject.getDueDate());
  const projectName = listObject.getProjectName().trim();
  const uniqueID = listObject.getID();

  if (formContainer.className === 'addTask-form') {
    SectionContainers.homeContainer.push(listObject);

    if (isToday(dueDate)) {
      SectionContainers.todayContainer.push(listObject);
    }
    if (isThisWeek(dueDate)) {
      SectionContainers.weekContainer.push(listObject);
    }

    if (projectName !== '') {
      if (!SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
        SectionContainers.projectsContainer[projectName] = [listObject];
      } else {
        SectionContainers.projectsContainer[projectName].push(listObject);
      }
    }
  } else if (formContainer.className === 'editTask-form') {
    if (isToday(dueDate)) {
      let notInContainer = true;
      for (const list of SectionContainers.todayContainer) {
        if (list.getID() === uniqueID) {
          notInContainer = false;
          break;
        }
      }
      if (notInContainer) {
        SectionContainers.todayContainer.push(listObject);
      }
    } else if (!isToday(dueDate)) {
      let counter = 0;
      for (const list of SectionContainers.todayContainer) {
        if (list.getID() === uniqueID) {
          SectionContainers.todayContainer.splice(counter, 1);
          break;
        }
        counter++;
      }
    }

    if (isThisWeek(dueDate)) {
      let notInContainer = true;
      for (const list of SectionContainers.weekContainer) {
        if (list.getID() === uniqueID) {
          notInContainer = false;
          break;
        }
      }
      if (notInContainer) {
        SectionContainers.weekContainer.push(listObject);
      }
    } else if (!isThisWeek(dueDate)) {
      let counter = 0;
      for (const list of SectionContainers.weekContainer) {
        if (list.getID() === uniqueID) {
          SectionContainers.weekContainer.splice(counter, 1);
          break;
        }
        counter++;
      }
    }

    const lastProjectName = listObject.getLastProjectName();
    if (lastProjectName === '' && projectName !== '') {
      if (SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
        SectionContainers.projectsContainer[projectName].push(listObject);
      } else {
        SectionContainers.projectsContainer[projectName] = [listObject];
      }
    } else if (lastProjectName !== '') {
      if (lastProjectName === projectName) return;
      // lastProjectName !== projectName

      const oldContainer = SectionContainers.projectsContainer[lastProjectName];
      let counter = 0;
      for (const list of oldContainer) {
        if (list.getID() === uniqueID) {
          oldContainer.splice(counter, 1);
          if (oldContainer.length < 1) {
            delete SectionContainers.projectsContainer[lastProjectName];
          }
          break;
        }
        counter++;
      }
      if (SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
        SectionContainers.projectsContainer[projectName].push(listObject);
      }
      // key does not exist in dictionary
      else if (projectName !== '') {
        SectionContainers.projectsContainer[projectName] = [listObject];
      }
    }
  }
  // else if the trash bttn is pressed
  else {
    const listGUI = e.target.parentNode.parentNode;
    const listIndex = listGUI.getAttribute('data-id');
    SectionContainers.homeContainer.splice(listIndex, 1);

    if (isToday(dueDate)) {
      let counter = 0;
      for (const list of SectionContainers.todayContainer) {
        if (list.getID() === uniqueID) {
          SectionContainers.todayContainer.splice(counter, 1);
          break;
        }
        counter++;
      }
    }

    if (isThisWeek(dueDate)) {
      let counter = 0;
      for (const list of SectionContainers.weekContainer) {
        if (list.getID() === uniqueID) {
          SectionContainers.weekContainer.splice(counter, 1);
          break;
        }
        counter++;
      }
    }

    if (SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
      let counter = 0;
      for (const list of SectionContainers.projectsContainer[projectName]) {
        if (list.getID() === uniqueID) {
          SectionContainers.projectsContainer[projectName].splice(counter, 1);
          if (SectionContainers.projectsContainer[projectName].length < 1) {
            delete SectionContainers.projectsContainer[projectName];
          }
          break;
        }
        counter++;
      }
    }
  }
};

const createListGUI = (e, listObject) => {
  const formContainer = e.target.parentNode.parentNode;
  let dueDate = listObject.getDueDate();

  const listGUICopy = GlobalVars.listGUI.cloneNode(true);

  const taskTitle = listGUICopy.children[0].children[1];
  const taskDueDate = listGUICopy.children[1].children[0];
  taskTitle.textContent = listObject.getTaskName();

  if (dueDate !== '') {
    dueDate = parseISO(dueDate);
    taskDueDate.textContent = format(dueDate, 'MM/dd/yyyy');
    if (isBefore(dueDate, endOfToday())) {
      taskDueDate.style.color = 'red';
    }
  } else {
    taskDueDate.textContent = dueDate;
  }

  if (formContainer.className === 'addTask-form') {
    listGUICopy.setAttribute('data-id', `${GlobalVars.listCounter}`);
    GlobalVars.listCounter++;
  } else if (formContainer.className === 'editTask-form') {
    const listIndex = formContainer.getAttribute('data-id');
    listGUICopy.setAttribute('data-id', listIndex);
  }
  return listGUICopy;
};

const updateProjectTabsGUI = (e, listObject) => {
  const formContainer = e.target.parentNode.parentNode;
  const projectName = listObject.getProjectName().trim();

  if (formContainer.className === 'addTask-form') {
    if (projectName === '') return;

    if (SectionContainers.projectsContainer[projectName].length > 1) {
      // iterate through tabs and increment project count
      for (const tabGUI of GlobalVars.projectContainerGUI.children) {
        if (tabGUI.children[1].textContent === projectName) {
          updateProjectCountGUI(tabGUI, projectName);
          return;
        }
      }
    } else {
      createTabGUI(projectName);
    }
  } else if (formContainer.className === 'editTask-form') {
    const lastProjectName = listObject.getLastProjectName();

    if (lastProjectName !== '' && lastProjectName !== projectName) {
      for (const tab of GlobalVars.projectContainerGUI.children) {
        if (tab.children[1].textContent === lastProjectName) {
          if (
            !SectionContainers.projectsContainer.hasOwnProperty(lastProjectName)
          ) {
            tab.remove();
          } else {
            updateProjectCountGUI(tab, lastProjectName);
          }
          break;
        }
      }
    }
    if ((lastProjectName === '' && projectName !== '') || projectName !== '') {
      for (const tab of GlobalVars.projectContainerGUI.children) {
        if (tab.children[1].textContent === projectName) {
          updateProjectCountGUI(tab, projectName);
          return;
        }
      }
      // if (tab does not exist)
      createTabGUI(projectName);
    }
  }
  // delete bttn is pressed
  else if (projectName !== '') {
    for (const tab of GlobalVars.projectContainerGUI.children) {
      if (tab.children[1].textContent === projectName) {
        if (!SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
          tab.remove();
        } else {
          tab.children[0].textContent =
            SectionContainers.projectsContainer[projectName].length;
        }
        break;
      }
    }
  }
};

const createTabGUI = (projectName) => {
  const projectTabGUICopy = GlobalVars.projectTabGUI.cloneNode(true);
  const projectCountGUI = projectTabGUICopy.children[0];
  const projectNameGUI = projectTabGUICopy.children[1];
  projectCountGUI.textContent = '1';
  projectNameGUI.textContent = projectName;
  GlobalVars.projectContainerGUI.appendChild(projectTabGUICopy);
};

const updateProjectCountGUI = (tabGUI, projectName) => {
  const projectCount = SectionContainers.projectsContainer[projectName].length;
  tabGUI.children[0].textContent = projectCount;
};

const compareDatesAsc = (listComponent1, listComponent2) => {
  if (listComponent1 instanceof Element && listComponent2 instanceof Element) {
    var date1 = listComponent1.children[1].children[0].textContent;
    var date2 = listComponent2.children[1].children[0].textContent;
  } else {
    date1 = listComponent1.getDueDate();
    date2 = listComponent2.getDueDate();
  }

  if (date1 < date2) return -1;
  if (date1 > date2) return 1;
  return 0;
};

const compareDatesDesc = (listComponent1, listComponent2) => {
  if (listComponent1 instanceof Element && listComponent2 instanceof Element) {
    var date1 = listComponent1.children[1].children[0].textContent;
    var date2 = listComponent2.children[1].children[0].textContent;
  } else {
    date1 = listComponent1.getDueDate();
    date2 = listComponent2.getDueDate();
  }

  if (date1 < date2) return 1;
  if (date1 > date2) return -1;
  return 0;
};

const sortList = (e) => {
  const mainContentListGUI = GlobalVars.mainContentGUI.children;
  const mainContentArr = [...mainContentListGUI];
  mainContentArr.pop();

  // rotate arrow on GUI
  GlobalVars.arrowIcon.classList.toggle('rotatedArrow');

  const homeContainerArr = SectionContainers.homeContainer;

  GlobalVars.taskHeaderGUI.classList.toggle('descending');

  if (GlobalVars.taskHeaderGUI.className === 'descending') {
    mainContentArr.sort(compareDatesDesc).forEach((node) => {
      GlobalVars.mainContentGUI.insertBefore(node, GlobalVars.addTaskGUI);
    });
    homeContainerArr.sort(compareDatesDesc);
  } else {
    mainContentArr.sort(compareDatesAsc).forEach((node) => {
      GlobalVars.mainContentGUI.insertBefore(node, GlobalVars.addTaskGUI);
    });
    homeContainerArr.sort(compareDatesAsc);
  }
  changeGUIDataIDs(e);
  updateLocalStorage();
};

const manipulateSideBar = () => {
  document.querySelector('.sidebar').classList.toggle('sidebar-selected');
};

const convertGenericObjs = (JSONobject) => {
  const genericObjs = JSON.parse(JSONobject);
  let listItemObjs;
  if (genericObjs.constructor.name === 'Array') {
    listItemObjs = genericObjs.map((genericObj) =>
      Object.assign(new ListItem(), genericObj)
    );
  }
  // genericObjs has an Object constructor
  else {
    Object.keys(genericObjs).forEach((key) => {
      genericObjs[key] = genericObjs[key].map((genericObj) =>
        Object.assign(new ListItem(), genericObj)
      );
    });
    listItemObjs = genericObjs;
  }
  return listItemObjs;
};

const restoreCheckedStatus = () => {
  for (const listItemGUI of GlobalVars.mainContentGUI.children) {
    if (listItemGUI.className === 'addTask-container') break;

    if (listItemGUI.classList.length > 1) {
      const inputCheckBox = listItemGUI.children[0].children[0];
      inputCheckBox.checked = true;
    }
  }
};

const updateLocalStorage = () => {
  const homePageData = JSON.stringify(SectionContainers.homeContainer);
  const todayPageData = JSON.stringify(SectionContainers.todayContainer);
  const weekPageData = JSON.stringify(SectionContainers.weekContainer);
  const projectsPageData = JSON.stringify(SectionContainers.projectsContainer);

  const uniqueIdData = GlobalVars.uniqueID;
  const listCounterData = GlobalVars.listCounter;
  const mainContainerData = GlobalVars.mainContentGUI.innerHTML;
  const tabContainerData = GlobalVars.tabContainerGUI.innerHTML;
  const taskHeaderData = GlobalVars.taskHeaderGUI.innerHTML;

  localStorage.setItem('homePageData', homePageData);
  localStorage.setItem('todayPageData', todayPageData);
  localStorage.setItem('weekPageData', weekPageData);
  localStorage.setItem('projectsPageData', projectsPageData);
  localStorage.setItem('mainContainerData', mainContainerData);
  localStorage.setItem('tabContainerData', tabContainerData);
  localStorage.setItem('taskHeaderData', taskHeaderData);
  localStorage.setItem('uniqueIdData', `${uniqueIdData}`);
  localStorage.setItem('listCounterData', `${listCounterData}`);
};

const restorePage = () => {
  if (localStorage.length < 1) return;

  GlobalVars.mainContentGUI.innerHTML =
    localStorage.getItem('mainContainerData');
  GlobalVars.taskHeaderGUI.innerHTML = localStorage.getItem('taskHeaderData');
  GlobalVars.tabContainerGUI.innerHTML =
    localStorage.getItem('tabContainerData');
  GlobalVars.uniqueID = parseInt(localStorage.getItem('uniqueIdData'));
  GlobalVars.listCounter = parseInt(localStorage.getItem('listCounterData'));

  const homePageObjs = convertGenericObjs(localStorage.getItem('homePageData'));
  const todayPageObjs = convertGenericObjs(
    localStorage.getItem('todayPageData')
  );
  const weekPageObjs = convertGenericObjs(localStorage.getItem('weekPageData'));
  const projectPageObjs = convertGenericObjs(
    localStorage.getItem('projectsPageData')
  );

  SectionContainers.homeContainer = homePageObjs;
  SectionContainers.todayContainer = todayPageObjs;
  SectionContainers.weekContainer = weekPageObjs;
  SectionContainers.projectsContainer = projectPageObjs;

  GlobalVars.arrowIcon = document.querySelector('#arrow');
  GlobalVars.addTaskGUI = document.querySelector('.addTask-container');
  GlobalVars.projectContainerGUI = document.querySelector('#project-container');
  restoreCheckedStatus();
};

const SectionContainers = (function () {
  const homeContainer = [];
  const todayContainer = [];
  const weekContainer = [];
  const projectsContainer = {};

  return {
    homeContainer,
    todayContainer,
    weekContainer,
    projectsContainer,
  };
})();

const GlobalVars = (function () {
  const uniqueID = -1;
  const listCounter = 0;

  const summaryContainerGUI = document.querySelector('.summary-container');
  summaryContainerGUI.addEventListener('click', closeSummaryContainer);
  summaryContainerGUI.remove();

  const arrowIcon = document.querySelector('#arrow');

  const taskHeaderGUI = document.querySelector('#task-header');
  taskHeaderGUI.addEventListener('click', sortList);

  const addTaskGUI = document.querySelector('.addTask-container');

  const formGUI = document.querySelector('#list-form-container');
  formGUI.remove();

  const listGUI = document.querySelector('.list-item');
  listGUI.remove();

  const projectContainerGUI = document.querySelector('#project-container');
  const projectTabGUI = document.querySelector('.projects');
  projectTabGUI.remove();

  const mainContentGUI = document.querySelector('#main-content');
  mainContentGUI.addEventListener('click', manageListAPI);

  document
    .querySelector('.drop-down-container')
    .addEventListener('click', manipulateSideBar);

  const tabContainerGUI = document.querySelector('#tab-container');
  tabContainerGUI.addEventListener('click', switchTabs);

  return {
    addTaskGUI,
    formGUI,
    mainContentGUI,
    listGUI,
    projectTabGUI,
    projectContainerGUI,
    listCounter,
    uniqueID,
    taskHeaderGUI,
    arrowIcon,
    summaryContainerGUI,
    tabContainerGUI,
  };
})();

restorePage();
