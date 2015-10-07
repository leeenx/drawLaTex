~function(){
    var canvas=document.createElement("canvas"),buffer=document.createElement("div");
    buffer.style.display="none";
    document.body.appendChild(buffer);
    window.drawLaTex=function(val,container){
        typeof(container)=="string"&&(container=document.getElementById(container));
        buffer.innerHTML=val;
        MathJax.Hub.Queue(
            [
                "Typeset",
                MathJax.Hub,
                buffer
            ],//需要渲染LaTex的容器
            [
                "PreviewDone",//渲染成功回调函数
                {//回调函数的父对象
                    PreviewDone:function()
                    {//渲染成功
                        //console.log("渲染成功");
                        svg2str(function(base64Imgs){
                            if(typeof(container)=="function"){
                                container(base64Imgs);
                            }else if(container){
                                //容器，就在容器内显示
                                for(var i=0, len=base64Imgs.length; i<len; ++i){
                                    var img=document.createElement("img");
                                    img.src=base64Imgs[i][0],img.style.display=base64Imgs[i][1];
                                    container.appendChild(img);
                                }
                            }else{//没有输出
                                console.log(base64Imgs);
                            }
                        });
                    }
                }
            ]
        );
    };
    var svg2str=function(cb){
        var MathJax_SVG_glyphs=document.getElementById("MathJax_SVG_glyphs"),
        spriteSVG='<defs>'+MathJax_SVG_glyphs.innerHTML+'</defs>';
        svgs=buffer.querySelectorAll("svg"),
        base64Imgs=[];
        for(var i=0,len=svgs.length;i<len;++i){
            var svg=svgs[i].outerHTML,
            display=svgs[i].parentNode.parentNode.className=="MathJax_SVG_Display"?"block":"inline-block";
            svg=svg.replace(/(\<svg[^\>]*\>)/,"$1"+spriteSVG);
            canvg(canvas, svg);
            var base64=canvas.toDataURL();//取得base64文件
            base64Imgs.push([base64,display]);
        }
        cb&&cb(base64Imgs);
    };
}();