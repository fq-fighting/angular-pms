import template from "./commonBoxTree.Component.html";
import "./commonBoxTree.Component.scss"
const commonBoxTree ={
    template,
    bindings:{
        resolve:"<",
        close:"&",
        dismiss:"&"
    },
    controller: function ($scope,ajaxService) {
        $scope.$on("dialogTree", function (e, obj) {
            $scope.title=obj.boxContent.title;
            $scope.refreshTree(obj.boxContent.href.getTreeListByStatus);
            //refreshTable(obj.boxContent.href ,obj.boxContent.columns ,obj.boxContent.param , obj.tab.page.id );
            //$scope.title = obj.boxContent.title;
            //$scope.wheres = obj.boxContent.wheres;
        });

        $scope.refreshTree=(url)=> {
            ajaxService.getAjaxPost(url)
                .then(res => {
                    org_Ztree(res.data)
                    console.log(res);
                });
        }

        function org_Ztree(data) {
            var zTreeObj, nodes;
            var setting = {
                view: {
                    selectedMulti: false,
                    showLine: false
                },
                check: {
                    enable: true,
                    chkStyle: "radio",
                    radioType: "all",
                    chkboxType: { "Y": "", "N": "" }
                },
                data: {
                    key: {
                        url: "www.baidu.com"
                    },
                }
            };
            var zTreeNodes = data;

            var zTreeObj = $.fn.zTree.init($("#tree"), setting, zTreeNodes);
        };

        $scope.save=()=>{
            let treeObj=$.fn.zTree.getZTreeObj("tree"),
                nodes = treeObj.getChangeCheckedNodes();
            $scope.$emit("tree",nodes[0]);
        }

        $scope.cancel=()=>{
            $scope.$emit("del",this.type);
        }
    }
};

export default commonBoxTree;