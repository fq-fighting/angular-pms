import {publicFunction } from "../../common/public.function";
class ajaxService {
    constructor($http){
        this.$http = $http;
    };

    getAjaxJsonp(href,param) {
        if(typeof param === "object") {
            param = JSON.stringify(param);
        }
        return this.$http.jsonp(`${href}?callback=JSON_CALLBACK&param=${param}`);
    };

    getAjaxPost(href,param){

        var param = JSON.stringify(param);
        console.log(param);
        return new Promise((resolve,reject)=>{
            $.ajax({
                type:"post",
                data :param,
                dataType : 'json',
                url : href,
                contentType:'application/json;charset="utf-8"',
                success : res=>resolve(res),
                error : res=>reject(res)
            })
        })
    }

    getAjaxselect(href,param){//下拉暂时使用

        var param = { "param": JSON.stringify(param) };
        param["key"] = publicFunction.getSessionKey;
        return new Promise((resolve,reject)=>{
            if(param.requestId){
                param.requestId = publicFunction.getRequestId;
            }
            $.ajax({
                type:"post",
                data :param,
                dataType : 'json',
                url : href,
                success : res=>resolve(res),
                error : res=>reject(res)
            })
        })
    }

    searchCommonBox(val,href,param) {


        for (let key in val){
            if(val[key]){
                param.conditions=[{"field":""+key,"value":""+val[key],"option":"LIKE"}]
            }
        }

        return this.getAjaxPost(href,param)
    }
}

export default ajaxService;