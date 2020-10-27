//Scene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x19d7f8);

//Camera
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1,2000);
camera.position.set(0,0,5);

//Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Screen Adjustment Min and Max Screen
window.addEventListener('resize', function() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize(width,height);
	camera.aspect= width/height;
	camera.updateProjectionMatrix;
})


var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

//Cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


function animate() {
	requestAnimationFrame( animate );
		// 3D Rotation
	//cube.rotation.x +=0.01;
    //cube.rotation.y +=0.01;
	renderer.render( scene, camera );
	controls.update();
}
animate();

