这节我们做了一个穿梭隧道的实战，核心目的还是练习曲线 Curve、生成几何体（比如 TubeGeometry）的 API。

我们用三维样条曲线画了穿过 n 个点的三维曲线，然后用 TubeGeometry 生成管道。

给它设置了纹理贴图，调整颜色空间，设置 map、aoMap 之后，真实感就很强了。

然后通过改变 camera 的 position 和 lookAt 实现了镜头穿梭隧道的感觉。

相机的位置是通过 curve.getSpacedPoints 取的一堆均匀的点。

经过这个实战之后，相信你对曲线、生成几何体、相机运动等就有更深的理解了。
