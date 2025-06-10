// 通过 Shape 定义多边形
import * as THREE from "three";

const pointsArr = [
  new THREE.Vector2(100, 0),
  new THREE.Vector2(50, 20),
  new THREE.Vector2(0, 0),
  new THREE.Vector2(0, 50),
  new THREE.Vector2(50, 100),
];

// const shape = new THREE.Shape(pointsArr);

// 另一种定义方式
const shape = new THREE.Shape();
shape.moveTo(100, 0);
shape.lineTo(0, 0);
shape.lineTo(0, 50);
shape.lineTo(80, 100);

const path = new THREE.Path();
path.arc(50, 50, 10);
// 挖空
shape.holes.push(path);

// 5 个点连成了一个形状 Shape，然后用 ShapeGeometry 画出来
// const geometry = new THREE.ShapeGeometry(shape);

// 沿着某个方向拉伸一下，就是一个新的几何体
// 把 ShapeGeometry 换成拉伸的几何体 ExtrudeGeometry
const geometry = new THREE.ExtrudeGeometry(shape, {
  depth: 100,
});

const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("lightgreen"),
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
