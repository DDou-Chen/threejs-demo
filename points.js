// 点模型
import * as THREE from "three";

// 自定义几何体
const geometry = new THREE.BufferGeometry();
// 顶点数据
const vertices = new Float32Array([
  // 0
  0, 0, 0,
  // 1
  100, 0, 0,
  // 2
  0, 100, 0,
  // 3
  0, 0, 100,
  // 4
  100, 100, 0,
]);

const attribute = new THREE.BufferAttribute(vertices, 3); // 3 个为一组
geometry.attributes.position = attribute; // 根据顶点数据设置位置

const material = new THREE.PointsMaterial({
  color: new THREE.Color("orange"),
  size: 10,
});

const points = new THREE.Points(geometry, material);

export default points;
