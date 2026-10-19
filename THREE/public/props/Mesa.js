import * as THREE from '../js/three.module.js';

export default function crearMesa({ x = 0, y = 0, z = 0 } = {}) {
    const mesaGrupo = new THREE.Group();

    // 1. CARGAR LA TEXTURA
    const textureLoader = new THREE.TextureLoader();
    const texturaMesa = textureLoader.load('./asstes/Trajinera-T3.jpeg');

    // Material con la textura aplicada
    const materialMesa = new THREE.MeshLambertMaterial({ 
        map: texturaMesa, 
        side: THREE.DoubleSide 
    });

    // 1. TABLERO DE LA MESA (mesh01)
    const geometry01 = new THREE.BoxGeometry(20, 0.8, 8, 4, 4, 4);
    const mesh01 = new THREE.Mesh(geometry01, materialMesa);
    mesh01.position.set(0, 6, 0);

    // 2. PATAS (geometry02 + mesh02 a mesh05)
    const geometry02 = new THREE.CylinderGeometry(0.6, 0.6, 6, 30, 30, false);

    // Pata Izquierda Adelante
    const mesh02 = new THREE.Mesh(geometry02, materialMesa);
    mesh02.position.set(-9, 3, -3);

    // Pata Derecha Adelante
    const mesh03 = new THREE.Mesh(geometry02, materialMesa);
    mesh03.position.set(9, 3, -3);

    // Pata Izquierda Atrás
    const mesh04 = new THREE.Mesh(geometry02, materialMesa);
    mesh04.position.set(-9, 3, 3);

    // Pata Derecha Atrás
    const mesh05 = new THREE.Mesh(geometry02, materialMesa);
    mesh05.position.set(9, 3, 3);

    mesaGrupo.add(mesh01, mesh02, mesh03, mesh04, mesh05);

    // Rotamos la mesa para alinearla a lo largo de la trajinera
    mesaGrupo.rotation.y = Math.PI / 2;

    // 📏 ESCALA AUMENTADA
    mesaGrupo.scale.set(0.45, 0.25, 0.32);

    // Posición final que recibe desde la trajinera
    mesaGrupo.position.set(x, y, z);

    return mesaGrupo;
}