import * as THREE from '../js/three.module.js';

export default function crearCalaca1({ x = 0, y = 0, z = 0 } = {}) {
    const calacaGrupo = new THREE.Group();

    // 1. Cargar la textura de manera independiente para cada instancia
    const textureLoader = new THREE.TextureLoader();
    const texturaCalaca = textureLoader.load(`./asstes/CALAVERITA_azucar.jpg`);

    // Asegurar que la textura envuelva bien las figuras
    texturaCalaca.wrapS = THREE.RepeatWrapping;
    texturaCalaca.wrapT = THREE.RepeatWrapping;

    // 2. Material con la textura aplicado a todo
    const materialTextura = new THREE.MeshLambertMaterial({ 
        map: texturaCalaca, 
        side: THREE.DoubleSide 
    });

    // 3. Geometría 01 (Torus - Parte superior)
    const geometry01 = new THREE.TorusGeometry(1, 3, 20, 20);
    const mesh01 = new THREE.Mesh(geometry01, materialTextura);
    mesh01.position.set(0, 10, 0);
    mesh01.rotation.set(Math.PI / 2, 0, 0);
    calacaGrupo.add(mesh01);

    // 4. Geometría 04 (Box - Mandíbula/Cara)
    const geometry04 = new THREE.BoxGeometry(4, 4, 4, 4, 4);
    const mesh04 = new THREE.Mesh(geometry04, materialTextura);
    mesh04.position.set(0, 7, 1);
    calacaGrupo.add(mesh04);

    // 📏 Escala aumentada un 20% adicional (0.036 * 1.2 = 0.0432)
    calacaGrupo.scale.set(0.0432, 0.0432, 0.0432);

    // Posición final
    calacaGrupo.position.set(x, y, z);

    return calacaGrupo;
}