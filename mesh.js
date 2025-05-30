import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

// 300 * 300 的平面几何体，分成 10 段
// const geometry = new THREE.PlaneGeometry(300, 300, 10, 10);

/*
  随机生成，分段多的话太混乱

  const position = geometry.attributes.position;
  // 顶点会按照 3 个一组来分组，position.count 是分组数
  for (let i = 0; i < position.count; i++) {
    position.setZ(i, Math.random() * 50); // 随机改变顶点坐标z轴（高度）
  }
*/

const geometry = new THREE.PlaneGeometry(3000, 3000, 100, 100);

// 噪音算法，生成的是与位置有关系的连续的随机数
const noise2D = createNoise2D();

export function updatePosition() {
  const position = geometry.attributes.position;

  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);

    // 坡度缓一点，那就改这个除数 ，把数字改大
    const z = noise2D(x / 300, y / 300) * 50;

    /**
     * 正弦值是从 -1 到 1 变化，所以 * 10 就是 -10 到 10 变化，这样就有 20 的高度波动
     * 时间是不断变化的，所以传入它就有 -1 到 1 的 sin 的不断变化
     * 时间的值很大，我们要把它变小一点，乘以 0.002，这个值可以调
     *
     * 如果不加 x ，是地形 整个上下起伏的，
     * 这里想每个顶点都不一样，所以 sin 的参数还要传入一个 x 坐标，
     * 这样每个顶点变化的值不同，是符合正弦规律的变化。
     */
    let sinNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10; // -10 ~ 10

    position.setZ(i, z + sinNum);
  }

  // 设置 positions.needUpdate 为 true，告诉 GPU 顶点变了，需要重新渲染
  position.needsUpdate = true;
}

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
// 角度换算成弧度 pi=180°  这里旋转90°
mesh.rotateX(Math.PI / 2);

console.log(mesh);

export default mesh;
