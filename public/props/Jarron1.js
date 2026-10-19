import * as THREE from '../js/three.module.js';

export default function crearJarron1({ x = 0, y = 0, z = 0 } = {}) {
    const jarronGrupo = new THREE.Group();

    // 1. Cargar la textura para el cuerpo del jarrón
    const textureLoader = new THREE.TextureLoader();
    const texturaJarron = textureLoader.load('./asstes/jarito.jpeg');

    // 2. Material con textura para el jarrón
    const materialJarron = new THREE.MeshLambertMaterial({
        map: texturaJarron,
        side: THREE.DoubleSide
    });

    // 3. Parte esférica inferior del jarrón
    const geometry01 = new THREE.SphereGeometry(5, 30, 30);
    const mesh01 = new THREE.Mesh(geometry01, materialJarron);
    mesh01.scale.set(1, 0.85, 1);
    mesh01.position.set(0, 4, 0);
    jarronGrupo.add(mesh01);

    // 4. Cuello del jarrón (cilindro superior)
    const geometry02 = new THREE.CylinderGeometry(3.2, 2.2, 2.5, 30);
    const mesh02 = new THREE.Mesh(geometry02, materialJarron);
    mesh02.position.set(0, 7.8, 0);
    jarronGrupo.add(mesh02);

    // 5. Tapa del jarrón de color café
    const materialTapa = new THREE.MeshLambertMaterial({
        color: 0x5c4033,
        side: THREE.DoubleSide
    });
    
    const geometryTapa = new THREE.CylinderGeometry(2.4, 2.4, 0.4, 30);
    const meshTapa = new THREE.Mesh(geometryTapa, materialTapa);
    meshTapa.position.set(0, 9.2, 0);
    jarronGrupo.add(meshTapa);

    // Configuración general del grupo (Escala exacta al 50%: 0.192 * 0.5 = 0.096)
    jarronGrupo.scale.set(0.096, 0.096, 0.096);
    jarronGrupo.position.set(x, y, z);

    return jarronGrupo;
}