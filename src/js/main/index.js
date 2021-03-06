/**
 * @author jiaoju.wu
 * es6 模块化方法，引入 页面需要的js文件
 */
import "ui-select";
import "bootstrap";
import "angular-ui-grid";
import "angular-ui-bootstrap";
import "angular-ui-router";
import "../common/angular-locale_zh-cn";

/**
 * 引入页面需要用到的组件
 */
import indexComponent from "./index.component";                 //主页组件
import ComponentsModule from "../components/components";        //组件工厂

import ServiceModule from "../common/service.module";                    //service 等其他组件
import FilterModule from "../common/filter.module";                    //filter 等其他组件
import DirectiveModule from "../common/directive.module";                    //filter 等其他组件
import {publicVar} from "../common/public_var";                             //公共初始化

/**
 * scm module 的angular 基础配置
 * @type {angular.Module}
 */
let scm_web = angular.module("scm",[
    ServiceModule.name,
    FilterModule.name,
    DirectiveModule.name,
    ComponentsModule.name,
    'ui.router',
    'ui.bootstrap',
    'ui.select',

]);
/**
 * scm web 路由层的配置
 */
scm_web.config(function($stateProvider,$locationProvider) {
    var states = [{
        name: 'hello',
        url: '/hello',
        component : 'scmTable',
        resolve: {
            option : function(){
                let href = publicVar.OMS004Interface.get,                   //table获取数据的url
                    option = {                                                                      // 配置option
                        href : href,                                                                    // url
                        lang : "zh-cn",                                                                 // 国际化
                        title:"业务类型关联业务行类型列表",                                                           // 小框的title名称
                        param : publicVar.param,
                        gridOption : {                                                                  //图表配置
                            paginationPageSizes: [10, 20, 30],                                          //分页的显示
                            paginationPageSize: 10,                                                     //每页显示数量
                            // enableCellEditOnFocus : true,                                               //是否允许编辑
                            enableGridMenu : true,                                                      //是否打开grid 工具
                            multiSelect : true ,                                                        //是否允许选择行
                            enableSelectAll : false,                                                     //是否允许全选
                            useExternalPagination: true,                                                //是否本地分页
                            // enableFullRowSelection : true,

                            enableFooterTotalSelected: false, // 是否显示选中的总数，默认为true, 如果显示，showGridFooter 必须为true
                            showGridFooter : false,
                            enableRowHeaderSelection : true, //是否显示选中checkbox框 ,默认为true
                            enableRowSelection : true, // 行选择是否可用，默认为true;
                            enableSelectionBatchEvent : true, //默认true
                            isRowSelectable: function(row){ //GridRow
                                if(row.entity.GID > 45){
                                 row.grid.api.selection.selectRow(row.entity); // 选中行
                                 }
                            },
                            modifierKeysToMultiSelect: false ,//默认false,为true时只能 按ctrl或shift键进行多选, multiSelect 必须为true;
                            noUnselect: false,//默认false,选中后是否可以取消选中

                            selectionRowHeaderWidth:30 ,//默认30 ，设置选择列的宽度；
                            // enableFullRowSelection : true,
                            columnDefs : [                                                              //grid 显示的配置

                                { name: 'ENABLE', enableCellEdit: false,displayName: '启用/禁用',enableColumnMenu: false},
                                { name: 'TENANT_ID', enableCellEdit: false,displayName: '租户ID', enableColumnMenu: false},
                                { name: 'BUSINESS_TYPE_NAME', enableCellEdit: false,displayName: '业务类型', enableColumnMenu: false},
                                { name: 'LINE_TYPE_NAME', enableCellEdit: false,displayName: '业务行类型', enableColumnMenu: false},
                                { name: 'UPDATE_TIME', enableCellEdit: false,displayName: '更新时间', enableColumnMenu: false},
                                { name: 'UPDATE_PERSON', enableCellEdit: false,displayName: '更新人员', enableColumnMenu: false},
                                   { name: 'CREATE_TIME', enableCellEdit: false,displayName: '创建时间', enableColumnMenu: false},
                                { name: 'CREATE_PERSON', enableCellEdit: false,displayName: '创建人', enableColumnMenu: false},
                            ]
                        },
                    }
                return option;
            },
            selectbox:function(){
              let  selectbox=[
                    {
                        "id":"BUSINESS_TYPE_NAME",
                        "text":"业务类型",
                        "selected":true
                    },{
                        "id":"LINE_TYPE_NAME",
                        "text":"业务行类型"
                    }
                ];
              return selectbox;
            },
        }
    },{
        name: 'getCustomer',    //配置名称
        url: '/getCustomer',    //请求路径
        component : 'scmTable', //对应组件
        resolve: {              //配置传参
            option : function(){
                let href = "http://10.99.2.61/SCMC/CRM/CUSTOMER/getCustomer",                   //table获取数据的url
                    option = {                                                                      // 配置option
                        href : href,                                                                    // url
                        lang : "zh-cn",                                                                 // 国际化
                        title:"客户信息列表",                                                           // 小框的title名称
                        param : publicVar.param,
                        gridOption : {                                                                  //图表配置
                            paginationPageSizes: [10, 20, 30],                                          //分页的显示
                            paginationPageSize: 10,                                                     //每页显示数量
                            // enableCellEditOnFocus : true,                                               //是否允许编辑
                            enableGridMenu : true,                                                      //是否打开grid 工具
                            multiSelect : true ,                                                        //是否允许选择行
                            enableSelectAll : false,                                                    //是否允许全选
                            useExternalPagination: true,                                                //是否本地分页
                            // enableFullRowSelection : true,

                            enableFooterTotalSelected: false, // 是否显示选中的总数，默认为true, 如果显示，showGridFooter 必须为true
                            showGridFooter : false,
                            enableRowHeaderSelection : true, //是否显示选中checkbox框 ,默认为true
                            enableRowSelection : true, // 行选择是否可用，默认为true;
                            enableSelectionBatchEvent : true, //默认true
                            isRowSelectable: function(row){ //GridRow
                                if(row.entity.GID > 45){
                                    row.grid.api.selection.selectRow(row.entity); // 选中行
                                }
                            },
                            modifierKeysToMultiSelect: false ,//默认false,为true时只能 按ctrl或shift键进行多选, multiSelect 必须为true;
                            noUnselect: false,//默认false,选中后是否可以取消选中

                            selectionRowHeaderWidth:30 ,//默认30 ，设置选择列的宽度；
                            // enableFullRowSelection : true,
                            columnDefs : [                                                              //grid 显示的配置
                                { name: 'GID', enableCellEdit: false, displayName:"编号",enableColumnMenu: false },
                                { name: 'AREA', enableCellEdit: false, displayName:'地区',   enableColumnMenu: false},
                                { name: 'CUSTOMER_CODE', enableCellEdit: false, displayName:'客户代码',enableColumnMenu: false },
                                { name: 'NAME_CN', enableCellEdit: false,displayName: '客户名称',enableColumnMenu: false },
                                { name: 'NAME_EN', enableCellEdit: false,displayName: '英文名称',enableColumnMenu: false},
                                { name: 'CUSTOMER_TYPE_NAME', enableCellEdit: false,displayName: '企业类型',enableColumnMenu: false},
                                { name: 'TRADE_NAME', enableCellEdit: false,displayName: '行业',enableColumnMenu: false},
                                { name: 'CONTACTS', enableCellEdit: false,displayName: '联系人', enableColumnMenu: false},
                                { name: 'TEL', enableCellEdit: false,displayName: '联系电话', enableColumnMenu: false},
                                { name: 'ADDRESS', enableCellEdit: false,displayName: '注册地址', enableColumnMenu: false},
                                { name: 'CUSTOMER_STATUS_NAME', enableCellEdit: false,displayName: '状态', enableColumnMenu: false},
                                { name: 'IMPORTANCE_DEGREE', enableCellEdit: false,displayName: '客户重要度', enableColumnMenu: false},
                                { name: 'INVOICE_TYPE_NAME', enableCellEdit: false,displayName: '发票种类', enableColumnMenu: false},
                                { name: 'PUR_MAN_TEL', enableCellEdit: false,displayName: '销售手机号码', enableColumnMenu: false},
                            ]
                        },
                    }
                return option;
            },
            selectbox:function(){
             let   selectbox=[
                    {
                        "id":"CUSTOMER_CODE",
                        "text":"客户编码2",
                        "selected":true
                    },{
                        "id":"NAME_CN",
                        "text":"客户名称"
                    }
                ];
                return selectbox;
            },
        }
    }]


    states.forEach(function(state) {
        $stateProvider.state(state);
    });

    $locationProvider.html5Mode(true)
});


/*scm_web.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state("index",{
            url:"/index",
            templateUrl:"table.html"
        }).state("hello",{
            url:"/hello",
            controller:'hellowcontroller',
            templateUrl:"../Web/src/js/components/tableComponent/hello.html"
        }).state("getCustomer",{
            url:"/getCustomer",
            controller :'mycontroller',
            templateUrl:"../Web/src/js/components/tableComponent/table.html"
        });
        $urlRouterProvider.otherwise("/index");
    }
]);*/

/*
scm_web.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/index");
    $stateProvider.state("index", {
        url: "/index",
        views: {
            "": {
                templateUrl:"../Web/src/js/components/tableComponent/hello.html"
            },
            "hello": {
                controller:'hellowcontroller',
                templateUrl:"../Web/src/js/components/tableComponent/hello.html"
            },
            "getCustomer": {
                controller :'mycontroller',
                templateUrl:"../Web/src/js/components/tableComponent/table.html"
            }
        }
    })
});
scm_web.controller('mycontroller',function($scope,$stateParams){
    $scope.title='Tom' ;

});
scm_web.controller('hellowcontroller',function($scope,$stateParams){
    $scope.title='hello' ;

});*/
/**
 * 主页面的组件配置
 */
scm_web.component('app',indexComponent);
