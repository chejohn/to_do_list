/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


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






/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFDQSxJQUFJLFlBQVk7QUFDaEIsSUFBSSxhQUFhO0FBQ2pCLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksZ0JBQWdCOztBQUVwQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFlBQVk7QUFDWjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBNYWtlTGlzdEl0ZW0gPSAoZHVlRGF0ZSwgdGFza05hbWUsIHRhc2tEZXRhaWxzLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy50YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgIHRoaXMudGFza0RldGFpbHMgPSB0YXNrRGV0YWlscztcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG5cbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcblxuICAgIGNvbnN0IGdldFRhc2tOYW1lID0gKCkgPT4gdGFza05hbWU7XG5cbiAgICBjb25zdCBnZXRUYXNrRGV0YWlscyA9ICgpID0+IHRhc2tEZXRhaWxzO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiBwcm9qZWN0TmFtZTtcblxuICAgIGNvbnN0IGVkaXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuXG4gICAgY29uc3QgZWRpdFRhc2tOYW1lID0gKG5ld1Rhc2tOYW1lKSA9PiB0YXNrTmFtZSA9IG5ld1Rhc2tOYW1lO1xuXG4gICAgY29uc3QgZWRpdFRhc2tEZXRhaWxzID0gKG5ld1Rhc2tEZXRhaWxzKSA9PiB0YXNrRGV0YWlscyA9IG5ld1Rhc2tEZXRhaWxzO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKG5ld1Byb2plY3ROYW1lKSA9PiBwcm9qZWN0TmFtZSA9IG5ld1Byb2plY3ROYW1lO1xuXG4gICAgcmV0dXJuIHtnZXREdWVEYXRlLCBnZXRUYXNrTmFtZSwgZ2V0UHJvamVjdE5hbWUsIFxuICAgICAgICBnZXRUYXNrRGV0YWlscyxlZGl0RHVlRGF0ZSwgXG4gICAgICAgIGVkaXRUYXNrRGV0YWlscywgZWRpdFRhc2tOYW1lLCBlZGl0UHJvamVjdE5hbWV9O1xufVxuXG5jb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICBHbG9iYWxOb2Rlcy5hZGRUYXNrR1VJLnJlbW92ZSgpO1xuICAgIEdsb2JhbE5vZGVzLm1haW5Db250ZW50R1VJLmFwcGVuZENoaWxkKEdsb2JhbE5vZGVzLmZvcm1HVUkpO1xufVxuXG5jb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgICBHbG9iYWxOb2Rlcy5mb3JtR1VJLnJlbW92ZSgpO1xuICAgIGNsZWFyRm9ybSgpO1xuICAgIHNob3dBZGRUYXNrR1VJKCk7XG59XG5cbmNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBHbG9iYWxOb2Rlcy50YXNrVGl0bGVHVUkudmFsdWUgPSAnJztcbiAgICBHbG9iYWxOb2Rlcy50YXNrRGV0YWlsc0dVSS52YWx1ZSA9ICcnO1xuICAgIEdsb2JhbE5vZGVzLnRhc2tEYXRlR1VJLnZhbHVlID0gJyc7XG4gICAgR2xvYmFsTm9kZXMudGFza1Byb2plY3ROYW1lR1VJLnZhbHVlID0gJyc7XG59XG5cbmNvbnN0IHNob3dBZGRUYXNrR1VJID0gKCkgPT4ge1xuICAgIEdsb2JhbE5vZGVzLm1haW5Db250ZW50R1VJLmFwcGVuZENoaWxkKEdsb2JhbE5vZGVzLmFkZFRhc2tHVUkpO1xufVxuXG5jb25zdCBjcmVhdGVMaXN0T2JqZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tEYXRlID0gR2xvYmFsTm9kZXMudGFza0RhdGVHVUkudmFsdWU7XG4gICAgY29uc3QgdGFza05hbWUgPSBHbG9iYWxOb2Rlcy50YXNrVGl0bGVHVUkudmFsdWU7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSBHbG9iYWxOb2Rlcy50YXNrRGV0YWlsc0dVSS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IEdsb2JhbE5vZGVzLnRhc2tQcm9qZWN0TmFtZUdVSS52YWx1ZTtcbiAgICBjb25zdCBsaXN0SXRlbSA9IE1ha2VMaXN0SXRlbSh0YXNrRGF0ZSwgdGFza05hbWUsIHRhc2tEZXRhaWxzLCBwcm9qZWN0TmFtZSk7XG59XG5cbmNvbnN0IEdsb2JhbE5vZGVzID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFkZFRhc2tHVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzay1jb250YWluZXInKTtcbiAgICBhZGRUYXNrR1VJLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pO1xuXG4gICAgLy8gZm9ybSBlbGVtZW50c1xuICAgIGNvbnN0IGZvcm1HVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZUdVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgdGFza0RldGFpbHNHVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXRhaWxzJyk7XG4gICAgY29uc3QgdGFza0RhdGVHVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJyk7XG4gICAgY29uc3QgdGFza1Byb2plY3ROYW1lR1VJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1uYW1lJyk7XG4gICAgXG4gICAgY29uc3QgY2FuY2VsRm9ybUdVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxJY29uJyk7XG4gICAgY2FuY2VsRm9ybUdVSS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb3JtKTtcblxuICAgIGNvbnN0IHN1Ym1pdEZvcm1HVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2ttYXJrSWNvbicpO1xuICAgIHN1Ym1pdEZvcm1HVUkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVMaXN0T2JqZWN0KVxuICAgIGZvcm1HVUkucmVtb3ZlKCk7XG4gICAgLy8gZW5kIG9mIGZvcm0gZWxlbWVudHNcblxuICAgIGNvbnN0IG1haW5Db250ZW50R1VJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudCcpO1xuXG4gICAgcmV0dXJuIHthZGRUYXNrR1VJLCBmb3JtR1VJLCBtYWluQ29udGVudEdVSSwgXG4gICAgICAgIHRhc2tUaXRsZUdVSSwgdGFza0RldGFpbHNHVUksIHRhc2tEYXRlR1VJLCB0YXNrUHJvamVjdE5hbWVHVUl9O1xufSkoKTtcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=