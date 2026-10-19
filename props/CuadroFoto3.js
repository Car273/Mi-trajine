import * as THREE from '../js/three.module.js';

export default function crearCuadroFoto({ x = 0, y = 0, z = 0 } = {}) {
    const cuadroGrupo = new THREE.Group();

    // 1. CARGA DE LA TEXTURA (Ruta apuntando a tu carpeta asstes)
    const textureLoader = new THREE.TextureLoader();
    
    // Cambia 'foto_difunto.png' por el nombre exacto de la foto que guardes en tu carpeta asstes
    const fotoTextura = textureLoader.load('./asstes/panchito.jpeg');

    // Materiales
    const marcoMat = new THREE.MeshLambertMaterial({ color: 0x4a2e18 });
    const fotoMat = new THREE.MeshBasicMaterial({ 
        map: fotoTextura, 
        color: 0xffffff   
    }); 

    // 1. Marco exterior
    const marcoGeo = new THREE.BoxGeometry(2.4, 3.2, 0.2);
    const marcoMesh = new THREE.Mesh(marcoGeo, marcoMat);
    cuadroGrupo.add(marcoMesh);

    // 2. Lienzo de la foto
    const fotoGeo = new THREE.PlaneGeometry(2.0, 2.8);
    const fotoMesh = new THREE.Mesh(fotoGeo, fotoMat);
    fotoMesh.position.z = 0.11;
    cuadroGrupo.add(fotoMesh);

    // 3. Soporte trasero (para que se mantenga inclinado)
    const soporteGeo = new THREE.BoxGeometry(0.4, 2.5, 0.1);
    const soporteMesh = new THREE.Mesh(soporteGeo, marcoMat);
    soporteMesh.position.set(0, -0.2, -0.6);
    soporteMesh.rotation.x = Math.PI / 6;
    cuadroGrupo.add(soporteMesh);

    // Inclinación ligera hacia atrás como portarretrato real
    cuadroGrupo.rotation.x = -Math.PI / 18;

    // Escala para la mesa
    cuadroGrupo.scale.set(0.4, 0.4, 0.4);

    // Posición final recibida por parámetro
    cuadroGrupo.position.set(x, y, z);

    return cuadroGrupo;
}