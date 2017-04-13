import template from "./commonBoxComponent.html";
import { CommonComponentBox } from "../../../../src/js/common/global_val";
const commonBoxComponent = {
    template,
    bindings : {
        resolve : "<",
        close: '&',
        dismiss: '&'
    },
    controller: function ($scope,$log,$http,$timeout,i18nService,ajaxService) {
       // $scope.title=CommonComponentBox.LINE_TYPE_NAME.title;

        /*let ctrl = this,
            option = ctrl.resolve.option || {},
            href = option.href,
            lang = option.lang || "zh-cn",
            gridOption = option.gridOptions || {},
            param = option.param;

        ctrl.select = {};
        ctrl.textdata = {};

        ctrl.$onInit = function(){
            i18nService.setCurrentLang(lang);

            ctrl.title = option.title || "往来户";
            ctrl.wheres = option.wheres || {};
            ctrl.selectRow = {};
            ctrl.gridOptions = gridOption;
            ctrl.gridOptions.enableCellEditOnFocus = gridOption.enableCellEditOnFocus || true;
            ctrl.gridOptions.enableGridMenu = gridOption.enableGridMenu || true;
            ctrl.gridOptions.paginationPageSizes = gridOption.paginationPageSizes || [5, 10, 20];
            ctrl.gridOptions.paginationPageSize = gridOption.paginationPageSize || 5;
            ctrl.gridOptions.multiSelect = gridOption.multiSelect || false;
            ctrl.gridOptions.enableSelectAll = gridOption.enableSelectAll || false;
            ctrl.gridOptions.columnDefs = gridOption.columnDefs || [];
            ctrl.gridOptions.onRegisterApi = function(gridApi){
                gridApi.selection.on.rowSelectionChanged($scope,function(row){
                    if(row.isSelected){
                        ctrl.selectRow = row;
                    }else{
                        ctrl.selectRow = {};
                    }
                });
            };

            ajaxService.getAjaxPost(href,param)
                .then(res=>{
                    ctrl.gridOptions.data = res.records;
                })
        }

        $scope.look = function(event){
        }

        ctrl.search = () => {

            let data ={};

            for(var key in ctrl.textdata){
                data[key]=ctrl.textdata[key];

            }

            for(let key in ctrl.select){
                if($scope.select[key]){
                    data[key] = ctrl.select[key].id;
                }
            }

            ajaxService.searchCommonBox(data,href,param)
                .then(res=>{
                    $timeout(()=>{ctrl.gridOptions.data = res.records},10)
                    //param.conditions = oldWhere;
                })
        };

        ctrl.save = ()=> {
            ctrl.close({$value: ctrl.selectRow});
        }

        ctrl.cancel = ()=>{
            ctrl.dismiss({$value: 'cancel'});
        }*/

    }
}

export default commonBoxComponent;