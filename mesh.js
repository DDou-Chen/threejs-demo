import * as THREE from "three";

const arc = new THREE.EllipseCurve(
  0,
  0,
  100,
  100,
  0, // 角度 0~60
  Math.PI / 3
);
const pointsList = arc.getPoints(50);

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(pointsList);

// const material = new THREE.PointsMaterial({
//   color: new THREE.Color("orange"),
//   size: 10,
// });
// const points = new THREE.Points(geometry, material);
// console.log(points);
// export default points;

const material = new THREE.LineBasicMaterial({
  color: new THREE.Color("orange"),
  size: 10,
});
const line = new THREE.Line(geometry, material);

export default line;
