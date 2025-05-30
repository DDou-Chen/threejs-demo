import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

// 创建了一个 Scene
const scene = new THREE.Scene();

// BoxGeometry 立方体
const geometry = new THREE.BoxGeometry(100, 100, 100);
// 漫反射材质 MeshLambertMaterial
const material = new THREE.MeshLambertMaterial({
  color: new THREE.Color("orange"),
});
const mesh = new THREE.Mesh(geometry, material);

// 添加物体 Mesh
mesh.position.set(0, 0, 0);
scene.add(mesh);

// 添加可视化调试控件
const gui = new GUI();
const meshFolder = gui.addFolder("立方体");
meshFolder.addColor(mesh.material, "color");
meshFolder.add(mesh.position, "x").step(10);
meshFolder.add(mesh.position, "y").step(10);
meshFolder.add(mesh.position, "z").step(10);

// 添加灯光 Light
const pointLight = new THREE.PointLight(0xffffff, 10000);
pointLight.position.set(80, 80, 80);
scene.add(pointLight);

const lightFolder = gui.addFolder("灯光");
lightFolder.add(pointLight.position, "x").step(10);
lightFolder.add(pointLight.position, "y").step(10);
lightFolder.add(pointLight.position, "z").step(10);
lightFolder.add(pointLight, "intensity").step(1000);

// 坐标系的工具 AxesHelper
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const width = window.innerWidth;
const height = window.innerHeight;

// 透视相机 角度 宽高比 最近是哪 最远是哪
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
// 在 200,200,200 的位置看向 0,0,0
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

function render() {
  renderer.render(scene, camera);
  // 把 render 改成渲染循环，用 requestAnimationFrame 来一帧帧的循环渲染
  requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

// 创建 OrbitControls 的实例，传入 camera 和 canvas 元素
const controls = new OrbitControls(camera, renderer.domElement);
