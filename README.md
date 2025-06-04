我们过了一遍材质相关属性。

点模型、线模型、网格模型都有专门的材质。

线模型想要渲染几何体需要先用 EdgesGeometry 包裹来处理下顶点，之后可以设置 LineDashedMaterial 画虚线，但要调用 line.computeLineDistances() 做相关计算。

网格模型的材质有很多，主要是与光照有关，可以设置 color、map，transparent、opacity 等属性。

设置透明度需要 transparent 开启后，设置 opacity。

map 是颜色贴图也叫纹理贴图，用 TextureLoader 加载纹理图片后设置到 map。

纹理贴图可以设置水平、竖直方向的重复次数，重复多次后再作为网格模型的纹理。

如果纹理贴图颜色不对，可以设置下 texture.colorSpace

此外，你还可以再设置 aoMap，它会基于环境对贴图的影响做计算，加上凹凸感

颜色 color、纹理贴图 map 都是很常用的材质属性，后面会大量用到。
