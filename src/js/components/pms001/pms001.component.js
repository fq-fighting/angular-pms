import template from "./pms001.html";
import "./pms001.scss";
import { CommonComponentBox } from "../../common/global_val";
import {publicVar} from "../../common/public_var";
import {publicFunction} from "../../common/public.function";

const pms001component = {
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
        $scope.dialogtree=false;
        $scope.RMS={};
        $scope.$on("pup_add",function (e,obj) {
            $scope.title=obj.title;
            $scope.buttonType=obj.buttonType;
            $scope.cancel=obj.cancel;
            $scope.disabled=obj.disabled;
        });
        $scope.$on("setModifyData",function (e,obj) {
            $scope.title=obj.title;
            $scope.buttonType=obj.buttonType;
            $scope.cancel=obj.cancel;
            $scope.RMS=obj.modifyData;
            $scope.disabled=obj.disabled;
        });

        /*
        * 权限详情传过来参数
        * */
        $scope.$on("detaildialog",function (e,obj) {
            $scope.title=obj.title;
            $scope.buttonType=obj.buttonType;
            $scope.cancel=obj.cancel;
            $scope.RMS=obj.modifyData;
            $scope.disabled=obj.disabled;
        });

        $scope.openModal = (popupType)=>{
            switch (popupType) {
                case "LINE_TYPE_NAME":
                    $scope.dialogpanel=true;
                    $scope.$broadcast("dialogContent",{
                        boxContent:CommonComponentBox[popupType],
                        tab:$scope.tab,
                    });
                    break;
                case "LongParentAuthId":
                    $scope.dialogtree=true;
                    $scope.$broadcast("dialogTree",{
                        boxContent:CommonComponentBox[popupType],
                        //tab:$scope.tab,
                    });
                    break;
            }

        };
        $scope.$on("row",function(e,val){
            $scope.dialogpanel=false;
        });
        $scope.$on("tree",(e,val)=>{
            $scope.RMS.parentAuthName=val.name;
            $scope.RMS.parentAuthId=val.id;
            $scope.dialogtree=false;
        })
        $scope.$on("del",function(e,val){
            $scope.dialogpanel=false;
            $scope.dialogtree=false;
        });

        /*
        * 授权管理--权限管理--新增 hujing
        * */
        $scope.btnsave=()=>{
            if($scope.myForm.$valid){
            let data={
                href:publicVar.pms001.save,
                column: publicVar.Columns.pms001,
                param:publicFunction.deepCopy(publicVar.param)
            }
            data.param.records=[$scope.RMS];
            ajaxService.getAjaxPost(data.href,data.param)
                .then(res=>{
                    console.log(res);
                   $scope.$emit("btncancel",true);
                    data.href=publicVar.mainUrl.pms001;
                   $scope.$emit("toparent-refresh",data);
                });
            }
        };

        /**
         * 必填项验证 function
         */
        $scope.validate=()=>{

        }

        /**
         * 修改 function
         */
        $scope.modify=()=>{
            let data={
                href:publicVar.pms001.save,
                column: publicVar.Columns.pms001,
                param:publicFunction.deepCopy(publicVar.param)
            };
            data.param.records=[$scope.RMS];
            ajaxService.getAjaxPost(data.href,data.param)
                .then(res=>{
                    $scope.$emit("btncancel",true);
                    data.href=publicVar.mainUrl.pms001;
                    $scope.$emit("toparent-refresh",data);
                });
        }

        /*取消按钮--清空数据*/
        $scope.btncancel=()=>{
            $scope.$emit("btncancel",true);
            $scope.RMS="";
        }

        /*详情关闭--清空数据*/
        $scope.btnclosed=()=>{
            $scope.$emit("btnclosed",true);
            $scope.RMS="";
        }

        $scope.PrivilegeClass=[{
            "id":1,
            "text":"页面级"
        },{
            "id":2,
            "text":"功能级"
        }];
        $scope.RMS.sort=$scope.PrivilegeClass[0].id;

        $scope.PermissionType=[
            {
                "id":1,
                "text":"系统"
            },{
                "id":2,
                "text":"客户"
            },{
                "id":3,
                "text":"供应商"
            }
        ];
        $scope.RMS.type=$scope.PermissionType[0].id;

        $scope.openMode=[
            {
                "id":1,
                "text":"本窗口"
            },{
                "id":2,
                "text":"父窗口"
            },{
                "id":3,
                "text":"顶窗口"
            },{
                "id":4,
                "text":"新窗口"
            }
        ];
        $scope.RMS.openMode=$scope.openMode[0].id;
    }
}

export default pms001component;
