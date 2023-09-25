import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene(); 

// Create a camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

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

//Resize according to window size
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})