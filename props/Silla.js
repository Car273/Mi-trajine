import * as THREE from '../js/three.module.js';

export default function crearSilla({ x = 0, y = 0, z = 0 } = {}) {
    const sillaGrupo = new THREE.Group();

    // 1. CARGAR LA TEXTURA
    const textureLoader = new THREE.TextureLoader();
    const texturaSilla = textureLoader.load('./asstes/Trajinera-T3.jpeg');

    // Material con la textura aplicada
    const materialSilla = new THREE.MeshLambertMaterial({
        map: texturaSilla,
        side: THREE.DoubleSide
    });

    // PATA IZQUIERDA DE ATRAS (mesh01)
    const geometry01 = new THREE.BoxGeometry(1, 12, 1, 4, 4, 4);
    const mesh01 = new THREE.Mesh(geometry01, materialSilla);
    mesh01.position.set(0, 6, 1);

    // PATA DERECHA DE ATRAS (mesh02)
    const geometry02 = new THREE.BoxGeometry(1, 12, 1, 4, 4, 4);
    const mesh02 = new THREE.Mesh(geometry02, materialSilla);
    mesh02.position.set(-4, 6, 1);

    // PATA IZQUIERDA DE ADELANTE (mesh03)
    const geometry03 = new THREE.BoxGeometry(1, 6, 1, 4, 4, 4);
    const mesh03 = new THREE.Mesh(geometry03, materialSilla);
    mesh03.position.set(-4, 3, 5);

    // PATA DERECHA DE ADELANTE (mesh04)
    const geometry04 = new THREE.BoxGeometry(1, 6, 1, 4, 4, 4);
    const mesh04 = new THREE.Mesh(geometry04, materialSilla);
    mesh04.position.set(0, 3, 5);

    // CUADRO PARA SENTARSE (mesh05)
    const geometry05 = new THREE.BoxGeometry(5, 1, 5, 4, 4, 4);
    const mesh05 = new THREE.Mesh(geometry05, materialSilla);
    mesh05.position.set(-2, 6, 3);

    // PARA LA ESPALDA SUPERIOR (mesh06)
    const geometry06 = new THREE.BoxGeometry(5, 1, 1, 4, 4, 4);
    const mesh06 = new THREE.Mesh(geometry06, materialSilla);
    mesh06.position.set(-2, 10, 1);

    // PARA LA ESPALDA INFERIOR (mesh07)
    const geometry07 = new THREE.BoxGeometry(5, 1, 1, 4, 4, 4);
    const mesh07 = new THREE.Mesh(geometry07, materialSilla);
    mesh07.position.set(-2, 8, 1);

    // Agregamos todas las piezas al grupo de la silla
    sillaGrupo.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07);

    // Centramos el eje de la silla
    mesh01.position.x += 2;
    mesh02.position.x += 2;
    mesh03.position.x += 2;
    mesh04.position.x += 2;
    mesh05.position.x += 2;
    mesh06.position.x += 2;
    mesh07.position.x += 2;

    mesh01.position.z -= 3;
    mesh02.position.z -= 3;
    mesh03.position.z -= 3;
    mesh04.position.z -= 3;
    mesh05.position.z -= 3;
    mesh06.position.z -= 3;
    mesh07.position.z -= 3;

   // Escala reducida un 5% adicional
    sillaGrupo.scale.set(0.2375, 0.2375, 0.2375);

    // Posición final que recibe desde la trajinera
    sillaGrupo.position.set(x, y, z);

    return sillaGrupo;
}