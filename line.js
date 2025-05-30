// 线模型
import * as THREE from "three";

const geometry = new THREE.BufferGeometry();

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

const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;

const meterial = new THREE.LineBasicMaterial({
  color: new THREE.Color("orange"),
});

const line = new THREE.Line(geometry, meterial);
// const line = new THREE.LineLoop(geometry, meterial); // 首尾相连
// const line = new THREE.LineSegments(geometry, meterial); // 每 两个点 一条线段

export default line;
