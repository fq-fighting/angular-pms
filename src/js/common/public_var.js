import {publicFunction} from "./public.function";
let
    requestIp="10.99.2.63:8080",
    BussinesInterfaceURL = "http://"+requestIp+"/pms/",//业务方法url地址
    curPageSize = 10,
    curPage = 0;


export const publicVar = {
    ssoLoginUrls : {
        ssoLogin : "http://"+requestIp+"/SSOLogin/login/ssoLogin",//登录
    },
    mainUrl:{
        pms001: BussinesInterfaceURL+"BaseAuthPool/getTreeList",//权限管理查询
        pms002:  BussinesInterfaceURL+"BaseAuthPool/getTreeList",
        pms003:  BussinesInterfaceURL+"BaseAuthPool/getTreeList",
    },
    pms001:{
        getCondProperty:BussinesInterfaceURL+"CondProperty/getCondProperty",//模糊查询下来接口
        getList:BussinesInterfaceURL+"BaseAuthPool/getTreeList",//权限管理查询
        save:BussinesInterfaceURL+"BaseAuthPool/save",              //保存
        modify:BussinesInterfaceURL+"BaseAuthPool/save",       //修改
        enabled:BussinesInterfaceURL+"BaseAuthPool/enabledStatus",      //启用
        disabled:BussinesInterfaceURL+"BaseAuthPool/disableStatus",     //禁用
        cancelled:BussinesInterfaceURL+"BaseAuthPool/cancelledStatus",  //作废
        getTreeListByStatus:BussinesInterfaceURL+"BaseAuthPool/getTreeListByStatus",  //获取启用和禁用权限树   父级权限弹框树
        columns:[
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
            { field: 'APPROVED_TIME', title: '操作', width: 150, align: 'center', formatter: publicFunction.formatOpar }
        ],
    },
    pms002:{
        //getCondProperty:BussinesInterfaceURL+"CondProperty/getCondProperty",//模糊查询下来接口
        getList:BussinesInterfaceURL+"CompanyManage/getCompanyManage",//公司管理查询
        save:BussinesInterfaceURL+"CompanyManage/save",              //保存
        modify:BussinesInterfaceURL+"CompanyManage/save",       //修改
        enabled:BussinesInterfaceURL+"CompanyManage/save",      //启用
        disabled:BussinesInterfaceURL+"CompanyManage/save",     //禁用
        cancelled:BussinesInterfaceURL+"CompanyManage/save",  //作废
        columns:[
            {field:'',title:'',checkbox:'true'},
            { field: 'statesName', title: '状态', width: 100, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'name', title: '名称', width: 150, align: 'center', editor: 'textbox' , sortable: true},
            { field: 'linkman', title: '联系人', width: 100, align: 'center', editor: 'textbox', sortable: true },
            { field: 'phone', title: '联系方式', width: 80, align: 'center', editor: 'textbox', sortable: true },
            { field: 'tel', title: '座机', width: 100, align: 'center', editor: 'textbox', sortable: true },
            { field: 'createTime', title: '创建时间', width: 150, align: 'center', editor: 'textbox', sortable: true },
        ],
    },
    pms003:{
        getCondProperty:BussinesInterfaceURL+"CondProperty/getCondProperty",//模糊查询下来接口
        getList:BussinesInterfaceURL+"/BaseAuthPool/getTreeList",//权限管理查询
        save:BussinesInterfaceURL+"BaseAuthPool/save",              //保存
        modify:BussinesInterfaceURL+"BaseAuthPool/enabledStatus",       //修改
        enabled:BussinesInterfaceURL+"BaseAuthPool/enabledStatus",      //启用
        disabled:BussinesInterfaceURL+"BaseAuthPool/disableStatus",     //禁用
        cancelled:BussinesInterfaceURL+"BaseAuthPool/cancelledStatus",  //作废
        columns:[
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
    param:{"conditions":[],"order":[],"cutomerParam":"2","page":{"currentPage":curPage,"recordsPerPage":curPageSize}},
    Columns : {
        pms001: [
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
            { field: 'productName', title: '所属产品', width: 150, align: 'center', editor: 'datebox', sortable: true },

        ],
        pms002 :  [
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
        pms003 :  [
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
        pms004: [
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
        pms005 :  [
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
        pms006 :  [
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
        pms007 :  [
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
}
