import treeComponent from "./tree.component";
const treeModule = angular.module("scmTree",['ngAnimate'])
    .component("scmTree",treeComponent);

export default treeModule;
