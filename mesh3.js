import * as THREE from "three";

/**
 * 自己控制线的曲率
 * 用贝塞尔曲线(二维空间)
 */

const p1 = new THREE.Vector2(0, 0);
const p2 = new THREE.Vector2(50, 100);
const p3 = new THREE.Vector2(100, 0);

// 用 QuadraticBezierCurve 的 api 创建了贝塞尔曲线，传入 3 个点，第二个为控制点
const curve = new THREE.QuadraticBezierCurve(p1, p2, p3);
const pointsArr = curve.getPoints(20);

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsArr);

const material = new THREE.LineBasicMaterial({
  color: new THREE.Color("orange"),
});

const line = new THREE.Line(geometry, material);

const geometry2 = new THREE.BufferGeometry();
geometry2.setFromPoints([p1, p2, p3]);
const material2 = new THREE.PointsMaterial({
  color: new THREE.Color("pink"),
  size: 5,
});
const points2 = new THREE.Points(geometry2, material2);
const line2 = new THREE.Line(geometry2, new THREE.LineBasicMaterial());
line.add(points2, line2);

export default line;
