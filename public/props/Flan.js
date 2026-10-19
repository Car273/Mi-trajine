import * as THREE from '../js/three.module.js';

export default function crearFlan({ x = 0, y = 0, z = 0 } = {}) {
    const flanGrupo = new THREE.Group();

    // 1. CARGAR TEXTURA PARA LAS ORILLAS (CUERPO)
    const textureLoader = new THREE.TextureLoader();
    const texturaFlan = textureLoader.load('./asstes/Flan.jpeg');

    const materialCuerpo = new THREE.MeshBasicMaterial({ 
        map: texturaFlan, 
        side: THREE.DoubleSide 
    });

    // Cilindro (orillas) con la textura
    var geometryCuerpo = new THREE.CylinderGeometry(3, 4, 3.5, 20, 20);
    var meshCuerpo = new THREE.Mesh(geometryCuerpo, materialCuerpo);
    meshCuerpo.position.set(0, 2.75, 0);
    flanGrupo.add(meshCuerpo);

    // 2. TAPA SUPERIOR DE COLOR CAFÉ SÓLIDO (Caramelo)
    var geometryTapa = new THREE.CircleGeometry(3.05, 20);
    var materialTapa = new THREE.MeshBasicMaterial({ 
        color: 0x4a2511, // Color café caramelo sólido
        side: THREE.DoubleSide 
    });
    var meshTapa = new THREE.Mesh(geometryTapa, materialTapa);
    meshTapa.rotation.x = -Math.PI / 2;
    meshTapa.position.set(0, 4.51, 0);
    flanGrupo.add(meshTapa);

    // 3. LA BASE O PLATO (Plato color marrón oscuro)
    var geometryPlato = new THREE.PlaneGeometry(10, 10);
    var materialPlato = new THREE.MeshBasicMaterial({ color: 0x6B1503, side: THREE.DoubleSide });
    var meshPlato = new THREE.Mesh(geometryPlato, materialPlato);
    meshPlato.position.set(0, 1, 0);
    meshPlato.rotation.set(Math.PI / 2, 0, 0);
    flanGrupo.add(meshPlato);

    // Escala general al 50%
    flanGrupo.scale.set(0.075, 0.075, 0.075);

    // Posición final en la escena
    flanGrupo.position.set(x, y, z);

    return flanGrupo;
}