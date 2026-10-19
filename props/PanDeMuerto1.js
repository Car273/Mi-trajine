import * as THREE from '../js/three.module.js';

export default function crearPanDeMuerto1({ x = 0, y = 0, z = 0 } = {}) {
    const panGrupo = new THREE.Group();

    // 1. CARGA DE LA TEXTURA (Apuntando a tu carpeta asstes)
    const textureLoader = new THREE.TextureLoader();
    // Asegúrate de tener tu imagen guardada en la carpeta 'asstes'
    const panTextura = textureLoader.load('./asstes/pan_de muertoC.jpeg');

    // Material con la textura aplicada y un color base para que ajuste bien el tono
    const panMat = new THREE.MeshLambertMaterial({ 
        map: panTextura,
        color: 0xffffff 
    });

    // Base del pan (esfera aplastada)
    const baseGeo = new THREE.SphereGeometry(0.6, 16, 16);
    baseGeo.scale(1, 0.6, 1);
    const base = new THREE.Mesh(baseGeo, panMat);
    panGrupo.add(base);

    // Huesitos cruzados encima
    const huesoGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.2, 8);
    huesoGeo.rotateX(Math.PI / 2);
    const hueso1 = new THREE.Mesh(huesoGeo, panMat);
    hueso1.position.y = 0.2;
    const hueso2 = hueso1.clone();
    hueso2.rotateY(Math.PI / 2);

    // Esferita superior (el cráneo/ajonjolí)
    const bolitaGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const bolita = new THREE.Mesh(bolitaGeo, panMat);
    bolita.position.y = 0.4;

    panGrupo.add(hueso1, hueso2, bolita);
    
    // Posición y escala
    panGrupo.position.set(x, y, z);
    panGrupo.scale.set(0.8, 0.8, 0.8);

    return panGrupo;
}