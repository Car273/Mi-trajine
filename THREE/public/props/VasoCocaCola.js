import * as THREE from '../js/three.module.js';

export default function crearPepsi({ x = 0, y = 0, z = 0 } = {}) {
    const pepsiGrupo = new THREE.Group();

    // 1. Carga de la textura de la etiqueta de Pepsi desde la carpeta asstes
    const textureLoader = new THREE.TextureLoader();
    const etiquetaTextura = textureLoader.load('./asstes/Pepsi.jpg'); // Cambia por el nombre real de tu imagen de Pepsi

    // 2. Cilindro principal (la lata/botella) con la etiqueta de Pepsi
    const cuerpoGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.8, 32);
    const cuerpoMat = new THREE.MeshBasicMaterial({ 
        map: etiquetaTextura 
    });
    const cuerpo = new THREE.Mesh(cuerpoGeo, cuerpoMat);
    cuerpo.position.set(0, 0.9, 0);
    
    // 🔄 Giramos el cuerpo 180 grados para que la etiqueta dé al frente
    cuerpo.rotation.y = Math.PI;

    // 3. Tapa de la lata o botella (color azul clásico de Pepsi)
    const tapaGeo = new THREE.CylinderGeometry(0.35, 0.4, 0.2, 32);
    const tapaMat = new THREE.MeshBasicMaterial({ color: 0x0047AB }); // Azul Pepsi
    const tapa = new THREE.Mesh(tapaGeo, tapaMat);
    tapa.position.set(0, 1.9, 0);

    pepsiGrupo.add(cuerpo, tapa);

    // Escala para ajustarla al tamaño de la mesa
    pepsiGrupo.scale.set(0.6, 0.6, 0.6);

    // Posición final
    pepsiGrupo.position.set(x, y, z);

    return pepsiGrupo;
}