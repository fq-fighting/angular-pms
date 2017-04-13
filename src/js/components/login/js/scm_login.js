let
    //requestIp = "172.131.2.111",
    //requestIp = "scm.mainiway.com",
    requestIp="10.99.2.63",
    ssoLogin="http://"+requestIp+"/pms/userLogin",//登录
    logout="http://"+requestIp+"/SSOLogin/login/logout";

var SCM_Login = function(){

    /**
     * 登陆function
     */
    this.loginScm = function(){
        var account = $("#account").val(),
            password = $('#password').val(),
            obj={"conditions":[{"field":"account","value":account,"option":""},{"field":"password","value":password,"option":""}],"page":{"currentPage":"0","recordsPerPage":"10"}},
            // data = {
            //     userAccount : account,
            //     userPwd : password
            // }
            param=JSON.stringify(obj);
            console.log(param);
        $.ajax({
            type:"post",
            url :ssoLogin,
            data : param,
            dataType : "json",
            contentType:'application/json;charset="utf-8"',
            success : function(res){
                switch (res.retCode){
                    case 10000:
                        //scmLogin.setCookie("cookieUser", res.obj.cookieValue, 1);
                        //验证是否同一用户
                        localStorage.clear();
                        window.location.href = "../../../../../index.html";
                        break;
                    case 1001 :
                        alert("租户不存在");
                        break;
                    case 1002 :
                        alert("账号不存在");
                        break;
                    case 1003 :
                        alert("密码错误");
                        break;
                    case 1005 :
                        alert("账号未启用");
                        break;
                    default :
                        alert("后台服务维护")
                        break;
                }
            },
            error : function(res,status){
                console.log(res);
                console.log(status);
                alert("后台服务维护中，请稍后登录!")
            }
        })
    }

    this.setCookie = function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";path=/";
    }

    this.init = function(){
        var loginFunction = this.loginScm;
        $("#button_login").on("click",this.loginScm);
        $("#account,#password").on("keydown",function(event){
            if(event.keyCode === 13){
                loginFunction();
            }
        });
    }
}
