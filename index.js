import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import mesh from "./mesh.js";
import mesh2 from "./mesh2.js";
import mesh3 from "./mesh3.js";
import mesh4 from "./mesh4.js";
import mesh5 from "./mesh5.js";

const scene = new THREE.Scene();

// scene.add(mesh);
// scene.add(mesh2);
// scene.add(mesh3);
// scene.add(mesh4);
scene.add(mesh5);

const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.position.set(0, 100, 200);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
