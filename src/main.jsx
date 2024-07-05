const scene = new THREE.Scene();
// Create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshBasicMaterial({
	color: '#00ff83',
	roughness: 0.2,
});

THREE;
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
const geometry2 = new THREE.SphereGeometry(3, 64, 64);
const material2 = new THREE.MeshStandardMaterial({
	color: '#00ff83',
});
const mesh2 = new THREE.Mesh(geometry2, material2);
scene.add(mesh2);

// Light
const light = new THREE.PointLight(0xffffff, 70, 100);
light.position.set(1, 10, 10);
scene.add(light);

// Sizes
const sizes = { width: window.innerWidth, height: window.innerHeight };

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 10;
scene.add(camera);

// Render
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
// Resize
window.addEventListener('resize', () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	// Update camera
	camera.updateProjectionMatrix();
	camera.aspect = sizes.width / sizes.height;
	renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
};
loop();
