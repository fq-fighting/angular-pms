import template from "./purchaseInformationManagerAdd.html";
import "./purchaseInformationManagerAdd.scss";
import { CommonComponentBox } from "../../../common/global_val";

const purchaseInformationManagerAddComponent = {
    template : template,
    bindings : {
        resolve:'<',
        close: '&',
        dismiss: '&',
        identify:'<',
    },
    controller: function($scope,$http,$uibModal,ajaxService,$timeout) {
        $scope.identify = this.identify;
        $scope.tab = $scope.$parent.$parent.$parent.$parent.tab;
        $scope.dialogpanel=false;
        $scope.$on("setModifyData",function(e,row){
            $scope.row = row;
        });
        $scope.openModal = (popupType)=>{
            $scope.dialogpanel=true;
            $scope.$broadcast("dialogContent",{
                boxContent:CommonComponentBox[popupType],
                tab:$scope.tab,
            });
        };
        $scope.$on("row",function(e,val){
            console.log(val.row);
            $scope.dialogpanel=false;
        });
        $scope.$on("del",function(e,val){
            $scope.dialogpanel=false;
        });
        this.save = function(){
            $scope.$emit("getModifyData",$scope.row);
        }
        this.cancel = function(){
            $scope.$emit("cancel",true);
        }
    }
}

export default purchaseInformationManagerAddComponent;
