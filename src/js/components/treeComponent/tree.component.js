import template from "./tree.html";
import "./tree.scss";
const treeComponent = {
    template,
    bindings : {
        option : "<"
    },
    controller : function ($scope,$rootScope,$compile,$element,$http,$log,$timeout,i18nService,$uibModal,ajaxService) {
        //**************************左侧树*****************************
        var tree = $scope.tree = [
            {
                "id": "11",
                "text": "首页",
                "glyphicon": "glyphicon-home",
                "closed": true,
                "attributes": {
                    "url": "/INDEX/html/scmIndex.html",
                    "pId": "null"
                },
                "target": "_self"
            }, {
                "id": "3",
                "text": "授权管理",
                "glyphicon": "glyphicon-authorize",
                "closed": true,
                "attributes": {
                    "url": "",
                    "pId": "null"
                },
                "target": "_self",
                "children": [
                    {
                        "id": "36",
                        "text": "权限管理",
                        "identify": 'pms001',
                        "iconCls": "glyphicon-authority",
                        "state": "closed",
                        "attributes": {
                            "url": "/CRM/CRM001/html/CRM001.html",
                            "pId": "3"
                        },
                        "target": "_self"
                    },
                    {
                        "id": "37",
                        "text": "公司管理",
                        "identify": 'pms002',
                        "iconCls": "",
                        "state": "closed",
                        "attributes": {
                            "url": "/CRM/CRM003/html/CRM003.html",
                            "pId": "3"
                        },
                        "target": "_self"
                    },
                    {
                        "id": "38",
                        "text": "用户管理",
                        "identify": 'pms003',
                        "iconCls": "",
                        "state": "closed",
                        "attributes": {
                            "url": "/CRM/CRM004/html/CRM004.html",
                            "pId": "3"
                        },
                        "target": "_self"
                    },
                ]
            },/*{
                "id": "3",
                "text": "公司管理",
                "glyphicon": "glyphicon-company",
                "closed": true,
                "attributes": {
                    "url": "",
                    "pId": "3"
                },
                "target": "_self"
            },{
                "id": "3",
                "text": "用户管理",
                "glyphicon": "glyphicon-user",
                "closed": true,
                "attributes": {
                    "url": "",
                    "pId": "3"
                },
                "target": "_self"
            },*/ {
                "id": "3",
                "text": "权限管理",
                "glyphicon": "glyphicon-authority",
                "closed": true,
                "attributes": {
                    "url": "",
                    "pId": "null"
                },
                "target": "_self",
                "children": [
                    {
                        "id": "36",
                        "text": "客户信息管理",
                        "identify": 'pms004',
                        "iconCls": "",
                        "state": "closed",
                        "attributes": {
                            "url": "/CRM/CRM001/html/CRM001.html",
                            "pId": "3"
                        },
                        "target": "_self"
                    },
                    {
                        "id": "37",
                        "text": "客户联系人管理",
                        "identify": 'pms005',
                        "iconCls": "",
                        "state": "closed",
                        "attributes": {
                            "url": "/CRM/CRM003/html/CRM003.html",
                            "pId": "3"
                        },
                        "target": "_self"
                    },
                    {
                        "id": "38",
                        "text": "销售合同管理",
                        "identify": 'pms006',
                        "iconCls": "",
                        "state": "closed",
                        "attributes": {
                            "url": "/CRM/CRM004/html/CRM004.html",
                            "pId": "3"
                        },
                        "target": "_self"
                    },
                    {
                        "id": "39",
                        "text": "销售报价管理",
                        "identify": 'pms007',
                        "iconCls": "",
                        "state": "closed",
                        "attributes": {
                            "url": "/CRM/CRM005/html/CRM005.html",
                            "pId": "3"
                        },
                        "target": "_self"
                    }
                ]
            },
        ];
        $scope.ID = 1;
        $scope.tabs = [{
            page: {
                id: 1,
                type: 2,        //定义基本页面的模式，默认且大多数情况下为1,首页为1
                identify: "home",     //页面的标识，标识页面是哪一个页面
                title: '首页',
                isActive: true,
            },
            // gridOptions: {
            //     column: [],
            //     data : [],
            // }
        }];
        $scope.currentTabId = '1';
        $scope.a = 0;
        $scope.onClickTab = function (id) {
            $scope.currentTabId = id;
        }
        $scope.isActiveTab = function (tabId) {
            return tabId == $scope.currentTabId;
        }
        $scope.addTab = function (options) {
            let tab = {};
            $scope.ID++;
            $scope.tabs.forEach(function (res) {
                res.page.isActive = false;
            });
            $scope.currentTabId = $scope.ID;
            tab.page = {
                id: $scope.ID,
                type: options.identify == 'home' ? 2 : 1,        //定义基本页面的模式，默认且大多数情况下为1,首页为2；
                identify: options.identify,      //页面的标识，标识页面是哪一个页面
                title: options.title,
                isActive: true,
            }
            $scope.tabs.push(tab);
            $scope.$broadcast("getTabId", $scope.ID);
        }
        $scope.delTab = function (id) {
            $scope.tabs = $scope.tabs.map(function (tab) {
                if (tab.page.id != id) {
                    return tab;
                } else {
                    if ($scope.currentTabId == id) {
                        return 'next';
                    } else {
                        return null;
                    }
                }
            });
            for (var i = 0; i < $scope.tabs.length; i++) {
                if ($scope.tabs[i] == null) {
                    $scope.tabs.splice(i, 1);
                } else if ($scope.tabs[i] == 'next') {
                    if (i + 1 < $scope.tabs.length) {
                        $scope.currentTabId = $scope.tabs[i + 1].page.id;
                    } else if ((i + 1 == $scope.tabs.length) && ($scope.tabs[0] != 'next')) {
                        $scope.currentTabId = $scope.tabs[i - 1].page.id;
                    }
                    $scope.tabs.splice(i, 1);
                }
            }
        }
        $scope.slideW = 0;
        $scope.tabLeft = 234;
        $scope.tabNav = 0;
        $scope.showShade = false;
        $scope.treeSlide = function () {
            if ($scope.slideW == 0) {        //收缩左侧树的配置
                $scope.slideW = -184;
                $scope.tabLeft = 50;
                $scope.tabNav = 184;
                $scope.showShade = true;
            } else {                          //展开左侧树的配置
                $scope.slideW = 0;
                $scope.tabLeft = 234;
                $scope.tabNav = 0;
                $scope.showShade = false;
            }
        };
        $scope.showPushBtn = false;
        $scope.mouseIn = function () {
            $scope.showPushBtn = true;
        }
        $scope.mouseOut = function () {
            $scope.showPushBtn = false;
        }
        /**
         * 左边菜单点击 function
         */
        $scope.listslide = function () {
            //$('button').hide();
            var _length = $("#tabsWrapper #tabs li").length;
            var _width = $('#tabsWrapper #tabs li').width();
            //alert($("#tabsWrapper #tabs li").length);
            //alert($("#tabsWrapper #tabs li").width());
            if (_length > 5) {
                $('.olbtn').show();
            }
        }

        /**
         * 左右滑动 function
         */
        $scope.leftslide = function () {
            var _length = $(".ultabs li").length;
            $scope.a++;
                if( $scope.a>4){
                    $scope.a=4
                }
            $('.ultabs').animate({left:-160 *  $scope.a}, 100);
        }


        $scope.rightslide = function () {
            var _length = $(".ultabs li").length;
            $scope.a--;
            if( $scope.a<0){
                $scope.a=0
            }
            $('.ultabs').animate({left:-160 *  $scope.a}, 100);
        }

        /**
         * 判断tabs数量 左右滑动按钮消失 function
         */
        $scope.displtabs = function () {
            var _length = $(".ultabs li").length;
            if(_length<5){
                $('.olbtn').hide();
            }
        }

    }

}
export default treeComponent;
