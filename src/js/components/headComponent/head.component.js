import "./head.scss";
import template from "./head.html";

const headComponent = {
    template:template,
    controller:function($scope){
        $scope.hidelogout=true;
        $scope.loginBtn=function(){
            $scope.hidelogout =false;
        }

            //获取当前时间：
        let  now = new Date(),
             year = now.getFullYear(),       //年
             month = now.getMonth() + 1,     //月
             day = now.getDate(),           //日
             weekArr= new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
             $scope.datetime = year + "-"
             if(month < 10)
                $scope.datetime += "0";
                $scope.datetime += month + "-";
             if(day < 10)
                $scope.datetime += "0";
                $scope.datetime += day + " ";
                $scope.week=weekArr[now.getDay()];//当前星期
    }

};


export default headComponent;