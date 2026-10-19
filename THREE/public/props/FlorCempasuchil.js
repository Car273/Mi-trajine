import * as THREE from '../js/three.module.js';

// 🌼 FLOR CHICA (Sin ciclos, luz con un 5% más)
export function crearFlorChica({ x = 0, y = 0, z = 0 } = {}) {
    const florGrupo = new THREE.Group();
    const matCempasuchil = new THREE.MeshLambertMaterial({ color: 0xff7700 });
    const matCentroFlor = new THREE.MeshLambertMaterial({ color: 0xd45500 });

    const centroGeo = new THREE.SphereGeometry(0.2375, 8, 8);
    const centro = new THREE.Mesh(centroGeo, matCentroFlor);
    florGrupo.add(centro);

    const petaloGeo = new THREE.SphereGeometry(0.19, 6, 6);

    const p1 = new THREE.Mesh(petaloGeo, matCempasuchil);
    p1.position.set(0.19, 0, 0);
    const p2 = new THREE.Mesh(petaloGeo, matCempasuchil);
    p2.position.set(0.134, 0, 0.134);
    const p3 = new THREE.Mesh(petaloGeo, matCempasuchil);
    p3.position.set(0, 0, 0.19);
    const p4 = new THREE.Mesh(petaloGeo, matCempasuchil);
    p4.position.set(-0.134, 0, 0.134);
    const p5 = new THREE.Mesh(petaloGeo, matCempasuchil);
    p5.position.set(-0.19, 0, 0);
    const p6 = new THREE.Mesh(petaloGeo, matCempasuchil);
    p6.position.set(-0.134, 0, -0.134);
    const p7 = new THREE.Mesh(petaloGeo, matCempasuchil);
    p7.position.set(0, 0, -0.19);
    const p8 = new THREE.Mesh(petaloGeo, matCempasuchil);
    p8.position.set(0.134, 0, -0.134);

    florGrupo.add(p1, p2, p3, p4, p5, p6, p7, p8);

    // Luz integrada con el nuevo incremento (0.441)
    const luzFlor = new THREE.PointLight(0xff7700, 0.441, 2);
    luzFlor.position.set(0, 0.1, 0);
    florGrupo.add(luzFlor);

    florGrupo.position.set(x, y, z);
    return florGrupo;
}

// 🌼 FLOR MEDIANA (Sin ciclos, luz con un 5% más)
export function crearFlorMediana({ x = 0, y = 0, z = 0 } = {}) {
    const florGrupo = new THREE.Group();
    const matCempasuchil = new THREE.MeshLambertMaterial({ color: 0xff7700 });
    const matCentroFlor = new THREE.MeshLambertMaterial({ color: 0xd45500 });

    const centroGeo = new THREE.SphereGeometry(0.35, 8, 8);
    const centro = new THREE.Mesh(centroGeo, matCentroFlor);
    florGrupo.add(centro);

    const petaloGeo = new THREE.SphereGeometry(0.3, 6, 6);
    
    const ex1 = new THREE.Mesh(petaloGeo, matCempasuchil);
    ex1.position.set(0.32, 0, 0);
    const ex2 = new THREE.Mesh(petaloGeo, matCempasuchil);
    ex2.position.set(0.226, 0, 0.226);
    const ex3 = new THREE.Mesh(petaloGeo, matCempasuchil);
    ex3.position.set(0, 0, 0.32);
    const ex4 = new THREE.Mesh(petaloGeo, matCempasuchil);
    ex4.position.set(-0.226, 0, 0.226);
    const ex5 = new THREE.Mesh(petaloGeo, matCempasuchil);
    ex5.position.set(-0.32, 0, 0);
    const ex6 = new THREE.Mesh(petaloGeo, matCempasuchil);
    ex6.position.set(-0.226, 0, -0.226);
    const ex7 = new THREE.Mesh(petaloGeo, matCempasuchil);
    ex7.position.set(0, 0, -0.32);
    const ex8 = new THREE.Mesh(petaloGeo, matCempasuchil);
    ex8.position.set(0.226, 0, -0.226);

    florGrupo.add(ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8);

    const in1 = new THREE.Mesh(petaloGeo, matCempasuchil);
    in1.scale.set(0.75, 0.75, 0.75);
    in1.position.set(0.2, 0.15, 0);
    const in2 = new THREE.Mesh(petaloGeo, matCempasuchil);
    in2.scale.set(0.75, 0.75, 0.75);
    in2.position.set(0, 0.15, 0.2);
    const in3 = new THREE.Mesh(petaloGeo, matCempasuchil);
    in3.scale.set(0.75, 0.75, 0.75);
    in3.position.set(-0.2, 0.15, 0);
    const in4 = new THREE.Mesh(petaloGeo, matCempasuchil);
    in4.scale.set(0.75, 0.75, 0.75);
    in4.position.set(0, 0.15, -0.2);

    florGrupo.add(in1, in2, in3, in4);

    // Luz integrada con el nuevo incremento (0.6615)
    const luzFlor = new THREE.PointLight(0xff7700, 0.6615, 2.5);
    luzFlor.position.set(0, 0.15, 0);
    florGrupo.add(luzFlor);

    florGrupo.position.set(x, y, z);
    return florGrupo;
}

// 🌼 FLOR GRANDE (Sin ciclos, luz con un 5% más)
export function crearFlorGrande({ x = 0, y = 0, z = 0 } = {}) {
    const florGrupo = new THREE.Group();
    const matCempasuchil = new THREE.MeshLambertMaterial({ color: 0xff7700 });
    const matCentroFlor = new THREE.MeshLambertMaterial({ color: 0xd45500 });

    const centroGeo = new THREE.SphereGeometry(0.5, 8, 8);
    const centro = new THREE.Mesh(centroGeo, matCentroFlor);
    florGrupo.add(centro);

    const petaloGeo = new THREE.SphereGeometry(0.4, 6, 6);

    const g1 = new THREE.Mesh(petaloGeo, matCempasuchil);
    g1.position.set(0.45, 0, 0);
    const g2 = new THREE.Mesh(petaloGeo, matCempasuchil);
    g2.position.set(0.318, 0, 0.318);
    const g3 = new THREE.Mesh(petaloGeo, matCempasuchil);
    g3.position.set(0, 0, 0.45);
    const g4 = new THREE.Mesh(petaloGeo, matCempasuchil);
    g4.position.set(-0.318, 0, 0.318);
    const g5 = new THREE.Mesh(petaloGeo, matCempasuchil);
    g5.position.set(-0.45, 0, 0);
    const g6 = new THREE.Mesh(petaloGeo, matCempasuchil);
    g6.position.set(-0.318, 0, -0.318);
    const g7 = new THREE.Mesh(petaloGeo, matCempasuchil);
    g7.position.set(0, 0, -0.45);
    const g8 = new THREE.Mesh(petaloGeo, matCempasuchil);
    g8.position.set(0.318, 0, -0.318);

    florGrupo.add(g1, g2, g3, g4, g5, g6, g7, g8);

    // Luz integrada con el nuevo incremento (0.882)
    const luzFlor = new THREE.PointLight(0xff7700, 0.882, 3);
    luzFlor.position.set(0, 0.2, 0);
    florGrupo.add(luzFlor);

    florGrupo.position.set(x, y, z);
    return florGrupo;
}