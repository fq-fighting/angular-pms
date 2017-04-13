function moveDirective(){
    return {
        restrict : 'ECMA',
        link : function(scope,element,attr){
            // element.on("click",function(){
            //     console.log("cccc");
            // });
            element[0].onmousedown = function(e){
                var oEvent =e || window.event,
                    disL = oEvent.clientX - element[0].offsetLeft,
                    disT = oEvent.clientY - element[0].offsetTop,
                    maxL = document.documentElement.clientWidth - element[0].offsetWidth,
                    maxT = document.documentElement.clientHeight - element[0].offsetHeight;

                element[0].onmousemove = function(e){
                    var oEvent = e || window.event,
                        disX = oEvent.clientX - disL,
                        disY = oEvent.clientY - disT;

                    //console.log(disX);
                    // if(disX <=0){ disX =0}
                    // if(disY <=0){ disY =0}
                    // if(disX >=maxL){ disX =maxL}
                    // if(disY >=maxT){ disY =maxT}
                    element[0].style.left = disX+'px';
                    element[0].style.top = disY+'px';
                }
            }
            element[0].onmouseup=function(){
                element[0].onmousemove=null;
            }
            //阻止父元素的事件
           element[0].children[0].children[1].onmousedown = function(e){
               if (e && e.stopPropagation) {//非IE浏览器
                   e.stopPropagation();
               }
            };
            element[0].children[0].children[2].onmousedown = function(e){
                if (e && e.stopPropagation) {//非IE浏览器
                    e.stopPropagation();
                }
            };
            // if (e && e.stopPropagation) {//非IE浏览器
            //     e.stopPropagation();
            // }
            // element.onmousedown = function(e){
            //     console.log("jjjj");
            //     var oEvent =e || window.event,
            //         disL = oEvent.clientX - oBox.offsetLeft,
            //         disT = oEvent.clientY - oBox.offsetTop,
            //         maxL = document.documentElement.clientWidth - oBox.offsetWidth,
            //         maxT = document.documentElement.clientHeight - oBox.offsetHeight;
            //
            //     document.onmousemove = function(e){
            //         var oEvent = e || window.event,
            //             disX = oEvent.clientX - disL,
            //             disY = oEvent.clientY - disT;
            //
            //         //console.log(disX);
            //         if(disX <=0){ disX =0}
            //         if(disY <=0){ disY =0}
            //         if(disX >=maxL){ disX =maxL}
            //         if(disY >=maxT){ disY =maxT}
            //         oBox.style.left = disX+'px';
            //         oBox.style.top = disY+'px';
            //     }
            //
            // }

        }
    };
}

export default moveDirective;