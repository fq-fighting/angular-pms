import moveDirective from "./directive/move.directive";

const DirectiveModule  = angular.module("DirectiveSet",[])
    .directive("moveDirective",moveDirective);

export default DirectiveModule;