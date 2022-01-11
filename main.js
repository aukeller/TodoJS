/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMmethods.js":
/*!***************************!*\
  !*** ./src/DOMmethods.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function DOMModule() {\n    \n    \n    const newProjectBtn = document.querySelector('#new-project');\n    const projectTitleInput = document.querySelector('#project-title');\n    const projectForm = document.querySelector('#project-form');\n\n    const updateProjectDisplay = (title) => {\n        const projectContainer = document.querySelector('#project-container');\n\n        const projectDIV = document.createElement('div');\n        projectDIV.textContent = title;\n\n        projectContainer.appendChild(projectDIV);\n    };\n\n    const displayNewProjectForm = () => projectForm.hidden = false;\n    const hideProjectForm = () => {\n        projectForm.hidden = true\n        projectTitleInput.value = \"\";\n    };\n\n    const getNewProjectTitle = () => projectTitleInput.value;\n\n\n    newProjectBtn.addEventListener('click', () => {\n        displayNewProjectForm();\n\n        const addProjectBtn = document.querySelector('#add');\n        addProjectBtn.addEventListener('click', () => {\n            updateProjectDisplay(getNewProjectTitle());\n            hideProjectForm();\n        });\n    });\n    \n\n\n\n    return { getNewProjectTitle};\n})());\n\n//# sourceURL=webpack://todojs/./src/DOMmethods.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _DOMmethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMmethods */ \"./src/DOMmethods.js\");\n\n\n\n\nconst main = () => {\n    const projects = [];\n\n    const newProjectBtn = document.querySelector('#new-project');\n\n    newProjectBtn.addEventListener('click', () => {\n        const addProjectBtn = document.querySelector('#add');\n\n        addProjectBtn.addEventListener('click', () => {\n            let newProjectTitle = _DOMmethods__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getNewProjectTitle();\n            projects.push((0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)(newProjectTitle));\n    \n        });\n    });\n    \n\n};\n\nmain();\n\n\n\n//# sourceURL=webpack://todojs/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nconst Project = (title) => {\n    const todos = [];\n\n    const getTitle = () => title;\n\n    const getTodos = () => todos;\n    \n    const addTodo = (todo) => todos.push(todo);\n\n\n    \n\n    return { addTodo, getTitle, getTodos };\n};\n\n\n\n//# sourceURL=webpack://todojs/./src/project.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n// Your ‘todos’ are going to be objects that you’ll want to dynamically create, \n// which means either using factories or constructors/classes to generate them.\n// Brainstorm what kind of properties your todo-items are going to have. At a \n// minimum they should have a title, description, dueDate and priority. \n// You might also want to include notes or even a checklist.\n\n\nconst Todo = (title, description, dueDate, priority) => {\n    \n    let notes;\n    \n    const getTitle = () => title;\n    \n    const addNote = (note) => {\n        if (typeof note === 'string') {\n            notes = note;\n        }\n    };\n    \n    return {\n        getTitle, \n        addNote,\n    };\n}\n\n\n\n//# sourceURL=webpack://todojs/./src/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;