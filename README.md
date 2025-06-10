几何体是由一堆顶点构成的三角形构成的，但直接写顶点数据太麻烦，Three.js 提供了一些 API 可以按照一些规律来生成几何体。

LatheGeometry 可以由曲线绕 y 轴旋转生成几何体

TubeGeometry 可以由曲线生成一定半径的空心管道

ShapeGeometry 可以通过 Shape 来生成多边形，Shape 可以传入一堆点构成，也可以通过 lineTo、moveTo 等 api 来画。shape.holes 可以定义内孔。

ExtrudeGeometry 可以通过 Shape 拉伸形成几何体。

按照这些规律，可以生成很多有用的几何体。
