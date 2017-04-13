import template from "./pms003.html";
import {publicVar} from "../../common/public_var";
import "./pms003.scss";
import { CommonComponentBox } from "../../common/global_val";

const pms003 = {
    template,
    bindings : {
        option : "<"
    },
    controller:function($scope,$http,$uibModal,ajaxService,$timeout){
        $scope.tab = $scope.$parent.$parent.$parent.$parent.tab;
        //初始化明细表
        $scope.$on("refreshDetail",function(e,row){
            refreshDetailTable(publicVar.mainUrl.pms003 ,publicVar.Columns.pms003 , publicVar.param);
        });
        //二级弹框弹出的标识
        $scope.dialogpanel=false;
        $scope.openModal = (popupType)=>{
            $scope.dialogpanel=true;
            $scope.$broadcast("dialogContent",{
                boxContent:CommonComponentBox[popupType],
                tab:$scope.tab,
            });
        };
        function refreshDetailTable(href ,column , param){
            if(param){
                ajaxService.getAjaxPost(href,param)
                    .then(res=>{
                        if(res.data){
                            $("#"+$scope.tab.page.id + ' .detail_table').treegrid({
                                data:res.data,
                                idField: 'id',
                                treeField: 'name',
                                width:900,
                                height:200,
                                rownumbers: true,
                                pagination: true,
                                singleSelect:false,
                                pagePosition:'bottom',	//页面的位置
                                columns:[column]
                            });
                        }
                    })
            }
        };
        //二级弹框保存
        $scope.$on("row",function(e,val){
            console.log(val.row);
            $scope.dialogpanel=false;
        });
        //二级弹框取消
        $scope.$on("del",function(e,val){
            $scope.dialogpanel=false;
        });
        //一级弹框取消
        this.cancel = function(){
            $scope.$emit("cancel",true);
        }
    }
};
export default pms003;