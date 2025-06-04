import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("./diqiu.jpg");
texture.colorSpace = THREE.SRGBColorSpace; // 修改下 texture 的颜色空间

const geometry = new THREE.SphereGeometry(100);

const material = new THREE.MeshBasicMaterial({
  map: texture,
  // color: new THREE.Color("orange"),
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
