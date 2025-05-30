import * as THREE from "three";

// 创建几何体
const geometry = new THREE.BufferGeometry();

// 顶点数组 3个为一组
// const vertices = new Float32Array([0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 10, 0, 0, 100, 100, 0, 10]);
// const vertices = new Float32Array([...[0, 0, 0, 100, 0, 0, 0, 100, 0], ...[0, 100, 0, 100, 0, 0, 100, 100, 0]]);
const vertices = new Float32Array([
  // 点0
  0, 0, 0,
  // 1
  100, 0, 0,
  // 2
  0, 100, 0,
  //  0, 100, 0,
  //  100, 0, 0,
  // 3
  100, 100, 0,
]);

// 存储不重复的顶点，复用
// Uint16Array 也是 TypedArray，可以存无符号 16 位整数
const indexes = new Uint16Array([0, 1, 2, 2, 1, 3]);
// 第二个参数是 1 ，也就是 1 个为一组
geometry.index = new THREE.BufferAttribute(indexes, 1);

const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true, // 展示线框
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
