很多时候都要画曲线，比如行星的轨道、地图的飞线。

这节我们学了下曲线的 API。

椭圆曲线 EllipseCurve：画椭圆、圆曲线
样式曲线 SplineCurve：画经过一些点的曲线
二次贝塞尔曲线 QuadraticBezierCurve：可以通过控制点调节曲率，有一个控制点
三次贝塞尔曲线 CubicBezierCurve3：可以画三维曲线，通过控制点调节曲率，有两个控制点
直线 LineCurve：直线是曲线的一种特殊情况，传入两个端点
曲线路径 CurvePath：可以传入多条曲线，组合起来
很多 3D 场景中，需要画一些曲线，到时候就会用到这些曲线 API。
