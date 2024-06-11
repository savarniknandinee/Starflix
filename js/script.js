const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry (1, 1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000
})
const cube = new THREE.Mesh(
    cubeGeometry, cubeMaterial
)
scene.add(cube)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 5
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))