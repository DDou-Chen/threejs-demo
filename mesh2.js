// 几何体的分段概念
import * as THREE from "three";

// PlaneGeometry 的第三、四个参数就是宽和高的分段数
// 然后再内部画三角形
// 12个顶点
// 顶点索引数是 36
const geometry = new THREE.PlaneGeometry(100, 100, 2, 3);

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);

console.log(mesh);

export default mesh;
