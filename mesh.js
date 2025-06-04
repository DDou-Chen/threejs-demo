import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(100, 100, 100);

// BoxGeometry 想渲染线模型，不能直接用，要用 EdgesGeometry 转换成线框模型才行
/**
 * 因为线模型 有24个顶点，但是没有顶点索引数据
 * 而 BoxGeometry 虽然也是 24个顶点，但是有 36个 顶点索引来每3个构成一个三角形
 * 也就是说 BoxGeometry 是为了网格模型 Mesh 准备的，要渲染线模型的话，需要转换下顶点数据
 */
const geometry = new THREE.EdgesGeometry(boxGeometry);

const material = new THREE.LineDashedMaterial({
  color: new THREE.Color("orange"),
  dashSize: 10, // 单个虚线长度
  gapSize: 10, // 虚线间的间隔
});

const line = new THREE.Line(geometry, material);
// 调用下 computeLineDistances 方法来计算虚线
line.computeLineDistances();

console.log(line);

export default line;
