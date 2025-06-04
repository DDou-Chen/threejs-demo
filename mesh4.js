import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("./zhuan.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(3, 3);
texture.colorSpace = THREE.SRGBColorSpace; // 修改下 texture 的颜色空间

const geometry = new THREE.PlaneGeometry(1000, 1000);

const material = new THREE.MeshBasicMaterial({
  map: texture,
  aoMap: texture, // 设置受环境光影响的凹凸感效果
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
