import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene(); 

// Create a camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.body.appendChild(renderer.domElement);
// controls.enableDamping = true;

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('_FB_IMG_1515956487453.jpg'); // Load the image

const material = new THREE.MeshBasicMaterial({ map: texture });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create an outline for the cube
const edges = new THREE.EdgesGeometry(geometry);
const outlineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
const outline = new THREE.LineSegments(edges, outlineMaterial);
cube.add(outline);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// Resize according to window size
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  // camera.updateProjectionMatrix();
})

// const loop = () => {
//   requestAnimationFrame(loop);
//   renderer.render(scene, camera);
// }

// loop();