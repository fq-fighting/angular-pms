import popupComponent from "./popup.component.js";

const popupModule = angular.module('popUp',['ui.bootstrap'])
    .component('popUp' , popupComponent);

export default popupModule;