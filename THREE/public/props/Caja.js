import * as THREE from '../js/three.module.js';

export default function crearCaja({x = 0, y = 0, z = 0 } = {}) {
    const cajaGrupo = new THREE.Group();

    // 1. CARGAR LA TEXTURA
    const textureLoader = new THREE.TextureLoader();
    const texturaMadera = textureLoader.load('./asstes/Trajinera-T3.jpeg');

    // Material con la textura aplicada
    const materialCaja = new THREE.MeshLambertMaterial({
        map: texturaMadera,  // Aplicamos la textura aquí
        side: THREE.DoubleSide
    });

    // 1. BASE DE LA CAJA (mesh01)
    const geometry01 = new THREE.BoxGeometry(14, 0.5, 10);
    const mesh01 = new THREE.Mesh(geometry01, materialCaja);
    mesh01.position.set(0, 0.25, 0);

    // 2. ESQUINEROS VERTICALES (mesh02 a mesh05)
    const geometry02 = new THREE.BoxGeometry(0.8, 8, 0.8);

    const mesh02 = new THREE.Mesh(geometry02, materialCaja);
    mesh02.position.set(-6.6, 4, -4.6);

    const mesh03 = new THREE.Mesh(geometry02, materialCaja);
    mesh03.position.set(6.6, 4, -4.6);

    const mesh04 = new THREE.Mesh(geometry02, materialCaja);
    mesh04.position.set(-6.6, 4, 4.6);

    const mesh05 = new THREE.Mesh(geometry02, materialCaja);
    mesh05.position.set(6.6, 4, 4.6);

    // 3. TABLAS FRONTALES Y TRASERAS (mesh06 a mesh09)
    const geometry03 = new THREE.BoxGeometry(12.4, 2, 0.5);

    const mesh06 = new THREE.Mesh(geometry03, materialCaja);
    mesh06.position.set(0, 2, 4.75);

    const mesh07 = new THREE.Mesh(geometry03, materialCaja);
    mesh07.position.set(0, 6, 4.75);

    const mesh08 = new THREE.Mesh(geometry03, materialCaja);
    mesh08.position.set(0, 2, -4.75);

    const mesh09 = new THREE.Mesh(geometry03, materialCaja);
    mesh09.position.set(0, 6, -4.75);

    // 4. TABLAS LATERALES (mesh10 a mesh13)
    const geometry04 = new THREE.BoxGeometry(0.5, 2, 8.4);

    const mesh10 = new THREE.Mesh(geometry04, materialCaja);
    mesh10.position.set(-6.75, 2, 0);

    const mesh11 = new THREE.Mesh(geometry04, materialCaja);
    mesh11.position.set(-6.75, 6, 0);

    const mesh12 = new THREE.Mesh(geometry04, materialCaja);
    mesh12.position.set(6.75, 2, 0);

    const mesh13 = new THREE.Mesh(geometry04, materialCaja);
    mesh13.position.set(6.75, 6, 0);

    cajaGrupo.add(
        mesh01, mesh02, mesh03, mesh04, mesh05, 
        mesh06, mesh07, mesh08, mesh09, 
        mesh10, mesh11, mesh12, mesh13
    );

    // Escala reducida un 20% más (0.2 * 0.8 = 0.16)
    cajaGrupo.scale.set(0.16, 0.16, 0.16);

    // Posición final
    cajaGrupo.position.set(x, y, z);

    return cajaGrupo;
}