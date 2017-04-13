import permissionComponent from "./permissionComponent.js";

const permissionModule = angular.module('perMission',['ui.bootstrap'])
    .component('perMission' , permissionComponent);

export default permissionModule;