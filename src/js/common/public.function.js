/*********************************************
 *function:公共方法
 *Modify Record：
 2016-12-22  Create   jinghu
 *********************************************/

export const publicFunction = {

    getSessionKey(){
        /*var arr, reg = new RegExp("(^| )" + "cookieUser" + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            if (window.location.href.split("?")[1] && window.location.href.split("?")[1].split("=")[0] === "cookieValue") {
                return window.location.href.split("?")[1].split("=")[1]
            } else {
                return "d0bede0a-08da-4840-9ce7-d0f817652415";
            }
        }*/
        return "fd974be1-3c16-46c4-8756-fe84eeba3b3f";
    },
    //随机串
    getRequestId(){
        var date = new Date().toJSON(),
            year = date.split("T")[0].split("-")[0],
            month = date.split("T")[0].split("-")[1],
            day = date.split("T")[0].split("-")[2],
            hours = date.split("T")[1].split(".")[0].split(":")[0],
            minutes = date.split("T")[1].split(".")[0].split(":")[1],
            seconds = date.split("T")[1].split(".")[0].split(":")[2],
            milliseconds = date.split(".")[1].replace("Z",""),
            min = Math.ceil(1000),
            max = Math.floor(9999),
            random = Math.floor(Math.random() * (max - min + 1)) + min;
        return ""+year+month+day+hours+minutes+seconds+milliseconds+random;
    },
    /*********************************************
     *function:对象深拷贝
     *param:
     *Modify Record：
     2016-07-26  Create   yshe
     *********************************************/
    deepCopy(obj) {
    var o;
    switch (typeof obj) {
        case 'undefined': break;
        case 'string': o = obj + ''; break;
        case 'number': o = obj - 0; break;
        case 'boolean': o = obj; break;
        case 'object':
            if (obj === null) {
                o = null;
            } else {
                if (obj instanceof Array) {
                    o = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        o.push(this.deepCopy(obj[i]));
                    }
                } else {
                    o = {};
                    for (var k in obj) {
                        o[k] = this.deepCopy(obj[k]);
                    }
                }
            }
            break;
        default:
            o = obj; break;
    }
        return o;
    },
     formatOpar(val, row) {
        let s = '<a href="#" mce_href="#" style="color:blue" ng-click="pmsclone(' + row.code + ')">克隆</a> ';
        let d = '<a href="#" mce_href="#" style="color:blue" ng-click="pmsedit(' + row.code + ')">编辑</a> ';
        return s + d;
    },
    /*********************************************
     *function:详情
     *********************************************/
     setFormDataForObject(data) {
        for (var key in data) {
            var input = $('.'+key);

            if (data[key] != '') {
                input.attr("value",data[key]);
            }
        }
    }


}


