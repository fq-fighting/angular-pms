
import {publicVar } from "../common/public_var";
export const CommonComponentBox = {
    "SEND_ADDRESS1" :{
        title : "送货地址",
        href : publicVar.authManage,
        param:publicVar.param,
        wheres : [
            {
                name_cn : "国家(IOS)",
                name : "COUNTRY",
                type:"text",
                type : "select",
                selectValue : [
                    {
                        id:1,
                        text:"123"
                    },
                    {
                        id:2,
                        text:"123"
                    },
                ]
            },
            {
                name_cn : "省(直辖市)",
                name : "PROVINCE",
                type : "text",
            },
            {
                name_cn : "城市",
                name : "CITY",
                type : "text",
            },
            {
                name_cn : "区",
                name : "ZONE",
                type : "text",
            },
            {
                name_cn:"邮编",
                name : "POST_CODE",
                type : "text",
            },
            {
                name_cn:"地址1",
                name : "ADDRESS1",
                type : "text",
            },
            {
                name_cn:"地标",
                name : "ADDRESS_MARK",
                type : "text",
            },
            {
                name_cn:"商圈",
                name : "BUSINESS_ZONE",
                type : "text",
            }
        ],
        columns : [
            {field:'No_0',title:'',checkbox:'true'},
            { field: 'id', title: '权限ID', width: 150, align: 'center', editor: 'textbox',hidden:'true' },
            { field: 'code', title: '权限编码', width: 180, align: 'center', editor: 'textbox'},
            { field: 'statesName', title: '状态', width: 150, align: 'center', editor: 'textbox' , sortable: true},

            { field: 'name', title: '权限名称', width: 150, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'route', title: '权限路由', width: 200, align: 'center', editor: 'textbox', sortable: true },
            { field: 'parentAuthName', title: '父级权限', width: 80, align: 'center', editor: 'textbox', sortable: true },
            { field: 'sortName', title: '权限类别', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'typeName', title: '权限类型', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'menuCls', title: '图标样式', width: 80, align: 'center', editor: 'textbox',hidden:'true', sortable: true },
            { field: 'createTime', title: '创建时间', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'openModeName', title: '打开模式', width: 80, align: 'center', editor: 'textbox', hidden:'true',sortable: true },
            { field: 'orders', title: '同级排序', width: 80, align: 'center', editor: 'textbox', hidden:'true', sortable: true },
            { field: 'level', title: '层级', width: 150, align: 'center', editor: 'textbox', hidden:'true', sortable: true },
            { field: 'productName', title: '所属产品', width: 150, align: 'center', editor: 'datebox', hidden:'true', sortable: true },
        ]
    },
    "PUR_ORG" :{
        title : "销售组织",
        href    : publicVar.mainUrl.pms001,
        param   :publicVar.param,
        wheres : [
            {
                name_cn: "组织编码",
                name: "ORG_CODE",
                type: "text",
            },
            {
                name_cn: "组织名称",
                name: "ORG_NAME",
                type: "text",
            },
            {
                name_cn: "上级机构",
                name: "PARENT_ORG_NAME",
                type: "text",
            },
            {
                name_cn: "层级",
                name: "LEVEL_NAME",
                type: "select",
                selectValue:[
                    {
                        "id": "1",
                        "text": "集团",
                    }, {
                        "id": "2",
                        "text": "公司",
                    }, {
                        "id": "3",
                        "text": "部门",
                    }, {
                        "id": "4",
                        "text": "办事处",
                    }
                ]
            },
            {
                name_cn: "销售组织",
                name: "IS_SALES_ORG_NAME",
                type: "select",
                selectValue:[
                    {
                        "id": "1",
                        "text": "是",
                    }, {
                        "id": "2",
                        "text": "否",
                    }
                ]
            },
            {
                name_cn: "采购组织",
                name: "IS_INVENTORY_ORG_NAME",
                type: "select",
                selectValue:[
                    {
                        "id": "1",
                        "text": "是",
                    }, {
                        "id": "2",
                        "text": "否",
                    }
                ]
            },
            {
                name_cn: "库存组织",
                name: "IS_INVENTORY_ORG_NAME",
                type: "select",
                selectValue:[
                    {
                        "id": "1",
                        "text": "是",
                    }, {
                        "id": "2",
                        "text": "否",
                    }
                ]
            },
            {
                name_cn: "财务组织",
                name: "IS_FINANCE_ORG_NAME",
                type: "select",
                selectValue:[
                    {
                        "id": "1",
                        "text": "是",
                    }, {
                        "id": "2",
                        "text": "否",
                    }
                ]
            }
        ],

        columns : [
            {field:'',title:'',checkbox:'true'},
            { field: 'id', title: '权限ID', width: 150, align: 'center', editor: 'textbox',hidden:'true' },
            { field: 'code', title: '权限编码', width: 180, align: 'center', editor: 'textbox'},
            { field: 'statesName', title: '状态', width: 150, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'name', title: '权限名称', width: 150, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'route', title: '权限路由', width: 200, align: 'center', editor: 'textbox', sortable: true },
            { field: 'parentAuthName', title: '父级权限', width: 80, align: 'center', editor: 'textbox', sortable: true },
            { field: 'sortName', title: '权限类别', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'typeName', title: '权限类型', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'menuCls', title: '图标样式', width: 80, align: 'center', editor: 'textbox',hidden:'true', sortable: true },
            { field: 'createTime', title: '创建时间', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'openModeName', title: '打开模式', width: 80, align: 'center', editor: 'textbox', hidden:'true',sortable: true },
            { field: 'orders', title: '同级排序', width: 80, align: 'center', editor: 'textbox', hidden:'true', sortable: true },
            { field: 'level', title: '层级', width: 150, align: 'center', editor: 'textbox', hidden:'true', sortable: true },
            { field: 'productName', title: '所属产品', width: 150, align: 'center', editor: 'datebox', hidden:'true', sortable: true },
        ],
    },
    "PUR_MAN" : {
        title : "销售人员",
        href    : publicVar.mainUrl.pms001,
        param   :publicVar.param,
        wheres : [
            {
                name_cn : "员工编号",
                name : "EMPLOYEE_CODE",
                type:"text",
            },
            {
                name_cn : "员工中文姓名",
                name : "NAME_CN",
                type:"text",
            },
            {
                name_cn : "员工英文姓名",
                name : "NAME_EN",
                type:"text",
            },
            {
                name_cn : "所属部门",
                name : "ORG_NAME",
                type:"text",
            }
        ],
        columns : [
            {field:'',title:'',checkbox:'true'},
            { field: 'id', title: '权限ID', width: 150, align: 'center', editor: 'textbox',hidden:'true' },
            { field: 'code', title: '权限编码', width: 180, align: 'center', editor: 'textbox'},
            { field: 'statesName', title: '状态', width: 150, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'name', title: '权限名称', width: 150, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'route', title: '权限路由', width: 200, align: 'center', editor: 'textbox', sortable: true },
            { field: 'parentAuthName', title: '父级权限', width: 80, align: 'center', editor: 'textbox', sortable: true },
            { field: 'sortName', title: '权限类别', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'typeName', title: '权限类型', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'menuCls', title: '图标样式', width: 80, align: 'center', editor: 'textbox',hidden:'true', sortable: true },
            { field: 'createTime', title: '创建时间', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'openModeName', title: '打开模式', width: 80, align: 'center', editor: 'textbox', hidden:'true',sortable: true },
            { field: 'orders', title: '同级排序', width: 80, align: 'center', editor: 'textbox', hidden:'true', sortable: true },
            { field: 'level', title: '层级', width: 150, align: 'center', editor: 'textbox', hidden:'true', sortable: true },
            { field: 'productName', title: '所属产品', width: 150, align: 'center', editor: 'datebox', hidden:'true', sortable: true },
            { field: 'createPersonId', title: '创建人', width: 150, align: 'center', editor: 'datebox', sortable: true },
            { field: 'updatePersonId', title: '更新人', width: 150, align: 'center', editor: 'datebox',  sortable: true },
            { field: 'updateTime', title: '更新时间', width: 150, align: 'center', editor: 'datebox',  sortable: true },
        ],
    },
    "LINE_TYPE_NAME" : {
        title   : "业务行类型",
        href    : publicVar.mainUrl.pms001,
        param   :publicVar.param,
        wheres  : [
            {
                name_cn : "编号",
                name : "LINE_TYPE_CODE",
                type:"text",
            },
            {
                name_cn : "名称",
                name : "LINE_TYPE_NAME",
                type:"text",
            }
        ],
        columns : [
            {field:'',title:'',checkbox:'true'},
            { field: 'id', title: '权限ID', width: 150, align: 'center', editor: 'textbox',hidden:'true' },
            { field: 'code', title: '权限编码', width: 180, align: 'center', editor: 'textbox'},
            { field: 'statesName', title: '状态', width: 150, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'name', title: '权限名称', width: 150, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'route', title: '权限路由', width: 200, align: 'center', editor: 'textbox', sortable: true },
            { field: 'parentAuthName', title: '父级权限', width: 80, align: 'center', editor: 'textbox', sortable: true },
            { field: 'sortName', title: '权限类别', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'typeName', title: '权限类型', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'menuCls', title: '图标样式', width: 80, align: 'center', editor: 'textbox',hidden:'true', sortable: true },
            { field: 'createTime', title: '创建时间', width: 150, align: 'center', editor: 'textbox', sortable: true },
            { field: 'openModeName', title: '打开模式', width: 80, align: 'center', editor: 'textbox', hidden:'true',sortable: true },
            { field: 'orders', title: '同级排序', width: 80, align: 'center', editor: 'textbox', hidden:'true', sortable: true },
            { field: 'level', title: '层级', width: 150, align: 'center', editor: 'textbox', hidden:'true', sortable: true },
            { field: 'productName', title: '所属产品', width: 150, align: 'center', editor: 'datebox', hidden:'true', sortable: true },
        ],
    },
    "detaildialog" : {
        title   : "权限详情",
        inputs  : [
            {
                names : "权限名称",
                key:"name",
            },
            {
                names : "权限路由",
                key:"route",
            },
            {
                names:"权限类别",
                key:"sortName",
            },
            {
                names : "权限类型",
                key:"typeName",
            },
            {
                names : "父级权限",
                key:"parentAuthName",
            },
            {
                names:"菜单图标",
                key:"menuCls",
            },
            {
                names : "打开方式",
                key:"openModeName",
            },
            {
                names : "排序号",
                key:"orders",
            },
            {
                names : "状态",
                key:"statesName",
            },
            {
                names : "创建人",
                key:"createPersonName",
            },
            {
                names : "创建时间",
                key:"createTime",
            },
            {
                names : "更新人",
                key:"updatePersonName",
            },
            {
                names : "更新时间",
                key:"updateTime",
            },
        ],
    },

    "LongParentAuthId":{
        title   : "父级权限",
        href    : publicVar.pms001,
        param   :publicVar.param,
    },
};
