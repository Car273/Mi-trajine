import * as THREE from '../js/three.module.js';

export default function crearMazapan({ x = 0, y = 0, z = 0 } = {}) {
    const mazapanGrupo = new THREE.Group();

    // Color del cuerpo del mazapán
    var material01 = new THREE.MeshBasicMaterial({
        color: 0xeedcb9,
        side: THREE.DoubleSide
    });

    // Cilindro principal
    var geometry01 = new THREE.CylinderGeometry(6, 6, 1.8, 40);
    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(0, 1, 0);
    mazapanGrupo.add(mesh01);

    // LOGO (Usando la imagen Mazapán.jpeg[cite: 10] y la carpeta asstes)
    var textureLoader = new THREE.TextureLoader();
    var texturaMazapan = textureLoader.load('./asstes/Mazapán.jpeg');

    var material02 = new THREE.MeshBasicMaterial({
        map: texturaMazapan,
        side: THREE.DoubleSide,
        transparent: true
    });

    // Tapa superior con el logo
    var geometry02 = new THREE.CircleGeometry(5.2, 40);
    var mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.rotation.x = -Math.PI / 2;
    mesh02.position.set(0, 1.91, 0);
    mazapanGrupo.add(mesh02);

    // Escala reducida un 25% adicional (0.09 * 0.75 = 0.0675)
    mazapanGrupo.scale.set(0.0675, 0.0675, 0.0675);

    // Posición final
    mazapanGrupo.position.set(x, y, z);

    return mazapanGrupo;
}