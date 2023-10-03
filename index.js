var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 5;
camera.position.y = -2;

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0x000000, 0)
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectMatrix();
})

const geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
const material = new THREE.MeshBasicMaterial({color: 0xEBF0CC});
const box = new THREE.Mesh( geometry, material );
scene.add(box);

var light = new THREE.PointLight(0xffd9f9, 1, 1000)
light.position.set(0,0,10)
// scene.add(light)

const ambient = new THREE.AmbientLight(0x9A8331, 1)
// scene.add(ambient);

function animate() {
    requestAnimationFrame(animate);

    box.rotation.x += .05;
    box.rotation.y += .05;

    renderer.render(scene, camera)
}

animate()