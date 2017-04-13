import treeModule from "./treeComponent/treeModule";
import tableModule from "./tableComponent/tableModule";
import customerInformationManagerAddModule from "./CRM/customerInformationManager/customerInformationManagerAddModule";
import pms001Module from "./pms001/pms001.module";
import purgroupInformationManagerAddModule from "./OMS014/purgroupInformationManager/purgroupInformationManagerAddModule";
import pms003Module from "./pms003/pms003.module";
import commonBoxModule from "./commomBoxComponent/commonBoxModule";
import headModule from "./headComponent/headModule";
import popupModule from "./popupComponent/popupModule";
import commonBoxTreeModule from "./commonBoxTree/commonBoxTree.Module";
import permissionModule from "./permissionDetail/permissionModule";

const ComponentsModule = angular.module("components",[
    treeModule.name,
    tableModule.name,
    customerInformationManagerAddModule.name,
    pms001Module.name,
    purgroupInformationManagerAddModule.name,
    commonBoxModule.name,
    headModule.name,
    popupModule.name,
    pms003Module.name,
    commonBoxTreeModule.name,
    permissionModule.name,
])

export default  ComponentsModule;