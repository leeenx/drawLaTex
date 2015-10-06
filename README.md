#关于drawLaTex



## LaTex

本项目使用MathJax来渲染LaTex公式。

## MathJax的删减

不过由于git拿下来的MathJax足足有152M。



`config`文件夹我只保留`TeX-AMS-MML_SVG.js`和`local`文件夹，这样子`config`文件夹就只剩下219K
`jax/output`文件夹我只保留了`SVG`文件夹，不过，SVG文件仍然10.2M，需要继续减肥！！SVG中最占空间的是fonts文件。其实，我只需要SVG文件夹中的`TeX`文件夹即可，最终`jax`文件夹大小能减小至1.41M。

整个项目可以控制在2M以下。虽然不小，但是已经达到我的目标了。



## 特色




## 适用浏览器

本项目是在chrome下开发的，其它浏览器没有测试过。估计firefox和ie9以上都是可以运行的


