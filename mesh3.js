import * as THREE from "three";

// 第一参数是上圆的半径  第二个是下圆的半径  第三个参数是高度  4-分多少份，默认32
const geometry = new THREE.CylinderGeometry(50, 50, 80, 20);

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
