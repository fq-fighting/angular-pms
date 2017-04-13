import "./popup.scss";
import template from "./popup.html";
import {CommonComponentBox} from "../../common/global_val";

const popupComponent = {
    template: template,
    bindings: {
        type: "<"
    },
    controller: function ($scope,ajaxService) {
        $scope.$on("dialogContent",function(e,obj){
            refreshTable(obj.boxContent.href ,obj.boxContent.columns ,obj.boxContent.param , obj.tab.page.id );
            $scope.title = obj.boxContent.title;
            $scope.wheres = obj.boxContent.wheres;
        });
        //刷新二级弹框列表
        function refreshTable(href ,column , param , tabId){
            if(param){
                ajaxService.getAjaxPost(href,param)
                    .then(res=>{
                        if(res.data){
                            $("#"+tabId + ' .dialog_table').treegrid({
                                data:res.data,
                                idField: 'id',
                                treeField: 'name',
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
        //保存，将数据传到父控制器
        this.save = function(){
            $scope.$emit("row",{"row":"一条数据","type":this.type});
        }
        //取消，传参到父控制器关闭当前弹窗
        this.cancel = function(){
            $scope.$emit("del",this.type);
        }
    }
}

export default popupComponent;