import * as THREE from "three";

// 三维样条曲线 CatmullRomCurve3
const path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-100, 20, 90),
  new THREE.Vector3(-40, 80, 100),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(60, -60, 0),
  new THREE.Vector3(100, -40, 80),
  new THREE.Vector3(150, 60, 60),
]);

// TubeGeometry 创建管道几何体
// 设置管道分段数 100，圆分段数 30，半径 5
const geometry = new THREE.TubeGeometry(path, 100, 5, 30);

const loader = new THREE.TextureLoader();
const texture = loader.load("./stone.png");
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = 20; // x 方向重复 20 次
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshBasicMaterial({
  // color: new THREE.Color("orange"),
  map: texture,
  aoMap: texture,
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(geometry, material);

export const tubePoints = path.getSpacedPoints(1000); // 从曲线上取 1000 个均匀的点

export default mesh;
