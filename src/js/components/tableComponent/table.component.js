import template from "./table.html";
import {publicVar} from "../../common/public_var";
import {publicFunction} from "../../common/public.function";
import easy from "../../../../src/js/common/jquery.easyui.min";
import { CommonComponentBox } from "../../common/global_val";

import "./table.scss";
const tableComponent = {
    template : template,
    easy:easy,
    bindings : {
        option : "<"
    },
    controller : function ($scope,$http,$log,$timeout,i18nService,$uibModal,ajaxService) {
        $scope.tab = $scope.$parent.$parent.tab;
        $scope.tag=1;
       $scope.panenldialog=false;
        if($scope.tab.page.identify == "pms001"){
            //publicVar.Columns.pms001.pop({ field: 'APPROVED_TIME', title: '操作', width: 150, align: 'center', formatter: formatOpar });
            //publicVar.Columns.pms001.push({ field: 'APPROVED_TIME', title: '操作', width: 150, align: 'center', formatter: formatOpar });
            $scope.treegrid=true;
            $scope.datagrid=false;
            var url = publicVar.pms001.getList,
                column = publicVar.pms001.columns,
                list_param = publicFunction.deepCopy(publicVar.param),
                tableAttr = publicVar.pms001;

        }else if($scope.tab.page.identify == "pms002"){
            $scope.datagrid=true;
            $scope.treegrid=false;
            var url = publicVar.pms002.getList,
                column = publicVar.pms002.columns,
                list_param = publicFunction.deepCopy(publicVar.param);
                tableAttr = publicVar.pms002;
        }
        else if($scope.tab.page.identify == "pms003"){
            $scope.datagrid=true;
            $scope.treegrid=false;
            var url = publicVar.mainUrl.pms003,
                column = publicVar.Columns.pms003,
                list_param = publicFunction.deepCopy(publicVar.param);
                tableAttr = publicVar.pms003;
        }
        initTable(url ,column ,list_param);
        getCondProperty(tableAttr,list_param);

        /**
         * 页面加载数据
         * @param newPage 当前页面
         * @param pageSize 显示行数
         * @param href      路径
         * @param param     请求参数
         */
          function initTable(href ,column , param){
            if(param){
                ajaxService.getAjaxPost(href,param)
                    .then(res=>{
                        $scope.refreshTable(res.data,column);

                       $("#"+$scope.tab.page.id+' #treeGrid').treegrid({
                           onDblClickRow : function(row){
                                $scope.$apply(function(){
                                    $scope.modify(row);
                                })
                            }

                        });
                    })
            }
            $scope.loadFlag=true;
        };

        /*function formatOpar(val, row, index) {
            let s = '<a href="#" mce_href="#" style="color:blue" onclick="pmsclone(\'' + index + '\')" >克隆</a> ';
            let d = '<a href="#" mce_href="#" style="color:blue" onclick="pmsedit(\'' + index + '\')">编辑</a> ';
            return s + d;
        }*/


        $scope.mypanel=false;
        $scope.$on("btncancel",function(e,val){
            $scope.mypanel = !val;
        });
        $scope.$on("btnclosed",function(e,val){
            $scope.mypanel = !val;
        });
        $scope.$on("toparent-refresh",function(e,data){
            initTable(data.href ,data.column , data.param);
        })

        /**
         * 新增 function
         */
        $scope.add = function(){
            $scope.$broadcast("pup_add",{
                "disabled":false,
                "title":"权限新增",
                "buttonType":"add",
                "cancel":true
            });
            $scope.mypanel = true;
        }


        /**
         * 修改 function
         */
        $scope.modify = function(detail){
            var url = tableAttr.modify;
            var _param = {"records":[]};
            var rows =detail?[detail]: $("#"+$scope.tab.page.id+' #treeGrid').treegrid("getSelections");
            if(rows.length == 1 || detail){
                if(detail){
                    $scope.$broadcast("detaildialog",{
                        "modifyData":rows[0],
                        "disabled":true,
                        "title":"权限详情",
                        "buttonType":"closed",
                        "cancel":false
                    });
                }else{
                    $scope.$broadcast("setModifyData",{
                        "modifyData":rows[0],
                        "disabled":false,
                        "title":"权限修改",
                        "buttonType":"modify",
                        "cancel":true

                    });
                }
                $scope.mypanel = true;
                $scope.$on("getModifyData",function(e,row){
                   if(row){
                       $scope.mypanel = false;
                       _param.records.push(row);
                       ajaxService.getAjaxPost(url,_param)
                           .then(function(res){
                               initTable(tableAttr.getList ,tableAttr.columns , publicFunction.deepCopy(publicVar.param));
                               alert(res.retMsg);

                           });
                   }
                });
            }else if(rows.length > 1){
                alert("不能同时修改多条数据！");
            }else if(rows.length < 1){
                alert("请选择一条数据修改！");
            }
        }

        /**
         * 模糊查询 function
         */
        $scope.fuzzySearch=()=>{
            var column = publicVar.Columns.pms001,
                param = publicFunction.deepCopy(publicVar.param),
                tableAttr = publicVar.pms001,
                value="";
            if($scope.tag==1){
                value=$scope.searchSelectValue;
            }else if($scope.tag==3){
                value=$scope.selectName.id;
            }
            if(value){
                console.log(555);
                param.conditions=[{"field":$scope.searchSelectType1.code,"value":value,"option":$scope.searchSelectType2.id}];
                param.cutomerParam="1";
                ajaxService.getAjaxPost(tableAttr.getList,param)
                    .then(function(res){
                        $scope.refreshTable(res.data.items,column);
                    });
            }else{
                console.log(666);
                initTable(tableAttr.getList ,tableAttr.columns , param);
            }

        }

        /**
         * 启用 function
         */
        $scope.enabled = function(){
            var url = tableAttr.enabled;
            var _param = {"records":[]};
            var rows = $("#"+$scope.tab.page.id+' #treeGrid').treegrid("getSelections");
            if(rows.length == 1){
                var row = rows[0];
                _param.records.push({"id":row.id , "product":"1"});
                ajaxService.getAjaxPost(url,_param)
                    .then(function(res){
                        initTable(tableAttr.getList ,tableAttr.columns , publicFunction.deepCopy(publicVar.param));
                        alert(res.retMsg);
                    });
            }else if(rows.length > 1){
                alert("不能同时启用多条数据！");
            }else if(rows.length < 1){
                alert("请选择一条数据启用！");
            }
        }
        /**
         * 禁用 function
         */
        $scope.disabled = function(){
            var url = tableAttr.disabled;
            var _param = {"records":[]};
            var rows = $("#"+$scope.tab.page.id+' #treeGrid').treegrid("getSelections");
            if(rows.length == 1){
                var row = rows[0];
                _param.records.push({"id":row.id , "product":"1"});
                ajaxService.getAjaxPost(url,_param)
                    .then(function(res){
                        initTable(tableAttr.getList ,tableAttr.columns , publicFunction.deepCopy(publicVar.param));
                        alert(res.retMsg);
                    });
            }else if(rows.length > 1){
                alert("不能同时禁用多条数据！");
            }else if(rows.length < 1){
                alert("请选择一条数据禁用！");
            }
        };

        /**
         * 作废 function
         */
        $scope.cancelled = function(){
            var url = tableAttr.cancelled;
            var _param = {"records":[]};
            var rows = $("#"+$scope.tab.page.id+' #treeGrid').treegrid("getSelections");
            if(rows.length >= 1){
               for(var i = 0; i<rows.length; i++){
                   _param.records.push({"id":rows[i].id , "product":"1"});
               }
                ajaxService.getAjaxPost(url,_param)
                    .then(function(res){
                        initTable(tableAttr.getList ,tableAttr.columns , publicFunction.deepCopy(publicVar.param));
                        alert(res.retMsg);
                    });
            }else if(rows.length < 1){
                alert("请选择只少一条数据作废！");
            }
        };


        /**
         * 刷新列表 function
         */
        $scope.refreshTable=(data,column)=>{
            if(data){
                $timeout(()=>{
                    if(data.items==undefined){
                        $("#"+$scope.tab.page.id+' #treeGrid').treegrid({
                            data:data,
                            idField: 'id',
                            treeField: 'name',
                            rownumbers: true,
                            pagination: true,
                            fitColumns:true,
                            singleSelect:false,
                            pagePosition:'bottom',	//页面的位置
                            columns:[column],

                        });

                    }else{
                        $("#"+$scope.tab.page.id+' #dataGrid').datagrid({
                            data: data.items,
                            height:500,
                            rownumbers: true,
                            pagination: true, //是否添加页签;
                            pageSize: 10,   //最多先是几条数据;
                            pageList: [10, 20], //同时先是几条数据;
                            pageNumber: 1, //默认显示第几页;
                            pagePosition: 'bottom', //页面的位置;
                            method: 'get',
                            singeSelect: false,
                            fitColumns: true,
                            remoteSort:false,
                            multiSort:true,
                            columns:[column]
                        });
                    }

                },10)
            };
        }

        $scope.$on("closed",function(e,val){//权限详情关闭
            $scope.panenldialog = !val;
        })
        /**
         * 日期框
         */
        $scope.today = function() {
            $scope.dt = new Date();
        };

        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2030, 5, 22),
            minDate: new Date(1970,5,22),
            startingDay: 1
        };

        $scope.open = function(val) {
            //console.log($scope.myForm);
            $scope.popup[val].opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.popup = [{
            opened: false
        },{
            opened: false
        },{
            opened: false
        }];

        /**
         * 判断模糊查询输入框类型  function
         */
        $scope.Type=type=>{
            switch (type.type){
                case "string":
                    $scope.tag=1;
                    break;
                case "date":
                    $scope.tag=2;
                    break;
                case "int":
                    $scope.tag=3;
                    break;
            };
            $scope.selectData=[];
            if(type.code=="sort"){
                $scope.selectData=[{
                    "id":"1",
                    "text":"页面级"
                },{
                    "id":"2",
                    "text":"功能级"
                }];
            }else if(type.code=="type"){
                $scope.selectData=[{
                    "id":"1",
                    "text":"系统"
                },{
                    "id":"2",
                    "text":"客户"
                },{
                    "id":"3",
                    "text":"供应商"
                }];
            };
            $scope.selectName=$scope.selectData[0];
        }

        /**
         * 获取模糊查询下拉框数据  function
         */
        function getCondProperty(url,param){
            param.conditions=[{"field":"group","value":"baseAuthPool_getTreeList","option":""}];
            ajaxService.getAjaxPost(url.getCondProperty,param)
                .then(function(res){
                    console.log(res);
                    $scope.selectType1=res.data;
                    $scope.searchSelectType1="";
                    $scope.searchSelectType1=$scope.selectType1[0];
                });
        };
        /**
         * 操作按钮克隆  function
         */
        $scope.pmsclone = function(index){
            alert(index);
        }

        $scope.selectType2 = [
            {
                "id":"6",
                "text":"包含",
                "selected":true
            },{
                "id":"1",
                "text":"大于"
            },{
                "id":"3",
                "text":"大于等于"
            },{
                "id":"0",
                "text":"等于"
            },{
                "id":"2",
                "text":"小于"
            },{
                "id":"4",
                "text":"小于等于"
            },{
                "id":"8",
                "text":"不等于"
            },{
                "id":"9",
                "text":"不包含"
            },{
                "id":"NAME_CN",
                "text":"介于"
            }
        ]
        $scope.searchSelectType2 = $scope.selectType2[0];

    }
}
export default tableComponent;