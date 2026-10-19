import * as THREE from '../js/three.module.js';

export default function crearVela({ x = 0, y = 0, z = 0 } = {}) {
    const velaGrupo = new THREE.Group();

    // 1. CERA DE LA VELA (Cilindro)
    var geometry01 = new THREE.CylinderGeometry(2, 2, 8, 30, 30, false);
    var material01 = new THREE.MeshBasicMaterial({
        color: 0xcccccc,
        side: THREE.DoubleSide,
    });
    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(0, 4, 0);

    // 2. FLAMA / FUEGO (Cono)
    var geometry02 = new THREE.ConeGeometry(0.5, 2, 20, 20, false);
    var material02 = new THREE.MeshBasicMaterial({
        color: 0xffaa00,
        side: THREE.DoubleSide,
    });
    var mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.position.set(0, 9, 0);

    // 3. LUZ DE LA VELA (Colocada exactamente en la punta de la flama)
    var luzVela = new THREE.PointLight(0xffaa00, 1.2, 15);
    luzVela.position.set(0, 10, 0);
    velaGrupo.add(luzVela);

    // Agregamos las partes al grupo
    velaGrupo.add(mesh01, mesh02);

    // Escala reducida un 4% adicional (0.1425 * 0.96 = 0.1368)
    velaGrupo.scale.set(0.1368, 0.1368, 0.1368);

    // Posición general enviada por parámetro
    velaGrupo.position.set(x, y, z);

    return velaGrupo;
}