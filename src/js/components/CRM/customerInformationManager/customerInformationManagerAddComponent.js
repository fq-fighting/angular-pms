import template from "./customerInformationManagerAdd.html";
import selectCss from "../../../../../static/css/select.css";
import { CommonComponentBox } from "../../../common/global_val";

const customerInformationManagerAddComponent = {
    template : template,
    bindings : {
        resolve:'<',
        close: '&',
        dismiss: '&'
    },
    style : selectCss,
    controller: function($scope,$http,$uibModal,ajaxService) {
        let ctrl = this,
            param = {
                "RequestID":"9999",
                "RequestFormat":"JSON",
                "SessionKey":"38e2aa43-fb68-4c7f-a815-f0b2607856c0",
                "SessionTimeout":"60",
                "Version":"1.0",
                "DBRequest":{
                    "Field":[
                        {
                            "UDF_CODE":[
                                "CUSTOMER_TYPE",
                                "INVOICE_TYPE",
                                "TAX_TYPE",
                                "IMPORTANCE_DEGREE",
                                "TRADE",
                                "AREA",
                                "CHANNEL"
                            ]
                        },
                        "UDF_ID",
                        "UDF_ITEM_NAME"
                    ],
                    "Page":{
                        "Start":"1",
                        "End":"30"
                    }
                }
            };

            ctrl.$onInit = function(){
                $scope.customer = ctrl.resolve.customer || {};
                $scope.customer.PUR_ORG = {};
                $scope.customer.PUR_ORG.ORG_NAME = $scope.customer.ORG_NAME;
                $scope.customer.PUR_MAN = {};
                $scope.customer.PUR_MAN.NAME_CN = $scope.customer.SALES_NAME_CN;
                $scope.buttonType = ctrl.resolve.buttonType;
                console.log($scope.customer);
            }

        param = JSON.stringify(param);

        ajaxService.getAjaxPost("http://10.99.2.61/SCMC/SystemBase/Udf/getmutiUdf",param)
            .then(res => {
                ctrl.CUSTOMER_TYPE = res.DBData.CUSTOMER_TYPE;
                ctrl.INVOICE_TYPE = res.DBData.INVOICE_TYPE;
                ctrl.TAX_TYPE = res.DBData.TAX_TYPE;
                ctrl.IMPORTANCE_DEGREE = res.DBData.IMPORTANCE_DEGREE;
                ctrl.TRADE = res.DBData.TRADE;
                ctrl.AREA = res.DBData.AREA;
                ctrl.CHANNEL = res.DBData.CHANNEL;

                if($scope.customer.CUSTOMER_TYPE){
                    $scope.customer.CUSTOMER_TYPE = ctrl.CUSTOMER_TYPE.filter(res=>res.id == $scope.customer.CUSTOMER_TYPE)[0]
                }
                if($scope.customer.INVOICE_TYPE){
                    $scope.customer.INVOICE_TYPE = ctrl.INVOICE_TYPE.filter(res=>res.id == $scope.customer.INVOICE_TYPE)[0]
                }
            })

        ctrl.CUSTOMER_STATUS = [{"id":"1", "text":"启用"}, {"id":"2", "text":"禁用"}];

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
            console.log($scope.myForm);
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
        }]

        ctrl.openModal = val =>{
            var modalInstance = $uibModal.open({
                animation: true,
                size : "lg",
                component: 'commonBoxComponent',
                resolve: {
                    option : function(){
                        return CommonComponentBox[val];
                    }
                }
            });

            modalInstance.result.then(selectedItem=>{
                $scope.myForm[val] = selectedItem.entity;
                if($scope.myForm.$$success.commonBox){
                    $scope.myForm.$$success.commonBox[val] = selectedItem.entity;
                    $scope.customer[val] = selectedItem.entity;
                }else{
                    $scope.myForm.$$success.commonBox = {};
                    $scope.myForm.$$success.commonBox[val] = selectedItem.entity;
                    $scope.customer[val] = selectedItem.entity;
                }
                console.log($scope.myForm[val]);
            }, function ($scope) {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        }

        ctrl.save = ()=> {
            console.log($scope.myForm);
            console.log("保存");

            if($scope.myForm.$valid){

                let data ={};

                $scope.myForm.$$success.parse.map(res=>{
                    data[res.$name] = res.$viewValue
                })

                for(let key in $scope.myForm.$$success.commonBox){
                    data[key] = $scope.myForm.$$success.commonBox[key][key];
                }

                console.log(data);
                console.log(JSON.stringify(data));

                let param = {
                    "RequestID":"9999",
                    "RequestFormat":"JSON",
                    "SessionKey":"38e2aa43-fb68-4c7f-a815-f0b2607856c0",
                    "SessionTimeout":"60",
                    "Version":"1.0",
                    "DBRequest":{
                        "Field":[
                            data
                        ],
                        "Page":{
                            "Start":"1",
                            "End":"30"
                        }
                    }
                };

                ajaxService.getAjaxPost("http://10.99.2.61/SCMC/CRM/CUSTOMER/insertCustomer",param)
                    .then(res=>{
                        console.log(res);
                        ctrl.close({$value: "success"});
                    });
            }else{
                console.log("验证未通过");
            }
        }

        ctrl.modify = ()=>{
            console.log("修改");

            if($scope.myForm.$valid){

                let data ={};

                if($scope.myForm.$$success.parse){
                    $scope.myForm.$$success.parse.map(res=>{
                        console.log(typeof res.$viewValue);
                        if(typeof res.$viewValue === "object"){
                            data[res.$name] = res.$viewValue.id
                        }else{
                            data[res.$name] = res.$viewValue
                        }
                    })
                }

                if($scope.myForm.$$success.commonBox){
                    for(let key in $scope.myForm.$$success.commonBox){
                        let valueKey = document.querySelector(`input[key=${key}]`).getAttribute("keyText");
                        data[key] = $scope.myForm.$$success.commonBox[key][valueKey];
                    }
                }

                console.log(data);
                console.log(JSON.stringify(data));

                let param = {
                    "RequestID":"9999",
                    "RequestFormat":"JSON",
                    "SessionKey":"38e2aa43-fb68-4c7f-a815-f0b2607856c0",
                    "SessionTimeout":"60",
                    "Version":"1.0",
                    "DBRequest":{
                        "Field": data,
                        "Where" :` GID = ${$scope.customer.GID} `
                    }
                };

                console.log(param);

                ajaxService.getAjaxPost("http://10.99.2.61/SCMC/CRM/CUSTOMER/updateCustomer",param)
                    .then(res=>{
                        console.log(res);
                        ctrl.close({$value: "success"});
                    });
            }else{
                console.log("验证未通过");
            }
        }

        ctrl.cancel = ()=>{
            ctrl.dismiss({$value: 'cancel'});
        }
    }
}

export default customerInformationManagerAddComponent;