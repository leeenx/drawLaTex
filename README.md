#关于drawLaTex

本来想使用MathJax来生成LaTex公式，后来发现两个问题：

1. MathJax太大；
2. 生成的公式不是图片，无法存放在其它环境。



## LaTex

本项目使用MathJax来渲染LaTex公式。

## MathJax的删减

git拿下来的MathJax足足有152M。
根据实际需求，我只保留了MathJax 以SVG形式渲染"LaTex/Tex"的功能。删减后，MathTex只有1.68M。尽管不小，但是已经可以当作一个线上项目使用了


## base64

生成的LaTex公式，我最终是想以图片的形式保存起来。所以，我想到了svg转canvas的方法。（canvas可以直接得到base 64的图片了）

这个时候我想到了`canvg`，利用MathJax生成的svg可以使用canVg将它在canvas上显示出来，并最终生成base 64的图片文件。

这也是为什么我只保留MathJax的SVG的原因了


## 适用浏览器

本项目是在chrome下开发的，其它浏览器没有测试过。估计firefox和ie9以上都是可以运行的

## 感谢

感谢 `MathJax` 和 `canvg` 提供的代码。

MathJax 的GigHub地址： [https://github.com/mathjax/MathJax](https://github.com/mathjax/MathJax)

canvg 的GigHub地址: [https://github.com/gabelerner/canvg](https://github.com/gabelerner/canvg)

