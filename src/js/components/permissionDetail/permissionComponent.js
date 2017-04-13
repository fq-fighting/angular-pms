import "./permission.scss";
import template from "./permission.html";
import {publicFunction} from "../../common/public.function";
const permissionComponent = {
    template: template,
    bindings: {
        resolve:'<',
        close: '&',
        dismiss: '&',
        identify:'<',
    },
    controller: function ($scope,ajaxService) {
        /*$scope.$on("detaildialog",function(e,obj){
            $scope.inputs = obj.boxContent.inputs;
            $scope.names = obj.boxContent.names;
            $scope.key=obj.boxContent.key;
            publicFunction.setFormDataForObject(obj.boxdata)



        });*/

        //取消，传参到父控制器关闭当前弹窗
        $scope.closed = function(){
            $scope.$emit("closed",true);
        }
    }
}

export default permissionComponent;