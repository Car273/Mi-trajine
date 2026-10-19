import * as THREE from '../js/three.module.js';

export default function crearAltar({x = 0, y = 0, z = 0} = {}) {
    // 🎨 Materiales
    const matMorado = new THREE.MeshLambertMaterial({ color: 0x6c3483 });
    const matNaranja = new THREE.MeshLambertMaterial({ color: 0xe67e22 });
    const matBlanco = new THREE.MeshLambertMaterial({ color: 0xf2f3f4 });

    // NIVEL 1
    var geometry1 = new THREE.BoxGeometry(14, 1.5, 8);
    var mesh1 = new THREE.Mesh(geometry1, matMorado);
    mesh1.position.set(0, 0.75, 0);

    // NIVEL 2
    var geometry2 = new THREE.BoxGeometry(10, 1.5, 6);
    var mesh2 = new THREE.Mesh(geometry2, matNaranja);
    mesh2.position.set(0, 2.25, -0.5);

    // NIVEL 3
    var geometry3 = new THREE.BoxGeometry(6, 1.5, 4);
    var mesh3 = new THREE.Mesh(geometry3, matBlanco);
    mesh3.position.set(0, 3.75, -1);

    const ESCALTAR = new THREE.Group();
    ESCALTAR.add(mesh1, mesh2, mesh3);

    ESCALTAR.scale.set(0.250, 0.250, 0.250);

    ESCALTAR.position.set(x, y, z);
    
    return ESCALTAR;
}