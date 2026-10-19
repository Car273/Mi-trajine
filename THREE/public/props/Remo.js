import * as THREE from '../js/three.module.js';

export default function crearRemo({ x = 0, y = 0, z = 0 } = {}) {
    const remoGrupo = new THREE.Group();

    // 1. CARGAR LA TEXTURA
    const textureLoader = new THREE.TextureLoader();
    const texturaRemo = textureLoader.load('./asstes/Trajinera-T4.jpeg'); // Reemplaza con la ruta de tu textura

    // Material con la textura aplicada (MeshLambertMaterial para que reaccione a la luz)
    const materialRemo = new THREE.MeshLambertMaterial({
        map: texturaRemo,
        side: THREE.DoubleSide
    });

    // 1. PALA (PlaneGeometry 6x6)
    const geometry02 = new THREE.PlaneGeometry(6, 6, 4, 3);
    const mesh02 = new THREE.Mesh(geometry02, materialRemo);
    mesh02.position.set(0, 3, 0);

    // 2. PALO (Cilindro de alto 18)
    const geometry01 = new THREE.CylinderGeometry(0.5, 0.5, 18, 30, 30, false);
    const mesh01 = new THREE.Mesh(geometry01, materialRemo);
    mesh01.position.set(0, 12, 0);

    remoGrupo.add(mesh01, mesh02);

    // Escala general para ajustarlo al tamaño de la trajinera
    remoGrupo.scale.set(0.25, 0.25, 0.25);

    // Posición final que recibe por parámetro
    remoGrupo.position.set(x, y, z);

    return remoGrupo;
}