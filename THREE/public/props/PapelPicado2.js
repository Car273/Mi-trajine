import * as THREE from '../js/three.module.js';

export default function crearPapelPi2({ x = 0, y = 0, z = 0 } = {}) {
    const tiraGrupo = new THREE.Group();

    // 1. Cargar las tres texturas diferentes desde la carpeta asstes
    const textureLoader = new THREE.TextureLoader();
    const textura1 = textureLoader.load('./asstes/PapelPicado1.jpeg');
    const textura2 = textureLoader.load('./asstes/PapelPicado2.jpeg');
    const textura3 = textureLoader.load('./asstes/PapelPicado3.jpeg');

    // 2. Crear un material transparente para cada textura
    const mat1 = new THREE.MeshLambertMaterial({ map: textura1, side: THREE.DoubleSide, transparent: true });
    const mat2 = new THREE.MeshLambertMaterial({ map: textura2, side: THREE.DoubleSide, transparent: true });
    const mat3 = new THREE.MeshLambertMaterial({ map: textura3, side: THREE.DoubleSide, transparent: true });

    // 3. Geometría del plano para el papel picado
    const geometryPapel = new THREE.PlaneGeometry(2, 1.5);

    // 4. Colocar las hojas una por una combinando las tres texturas (sin ciclos)
    const hoja1 = new THREE.Mesh(geometryPapel, mat1);
    hoja1.position.set(-5.7, 0, 0);

    const hoja2 = new THREE.Mesh(geometryPapel, mat2);
    hoja2.position.set(-3.8, 0, 0);

    const hoja3 = new THREE.Mesh(geometryPapel, mat3);
    hoja3.position.set(-1.9, 0, 0);

    const hoja4 = new THREE.Mesh(geometryPapel, mat1);
    hoja4.position.set(0, 0, 0);

    const hoja5 = new THREE.Mesh(geometryPapel, mat2);
    hoja5.position.set(1.9, 0, 0);

    const hoja6 = new THREE.Mesh(geometryPapel, mat3);
    hoja6.position.set(3.8, 0, 0);

    const hoja7 = new THREE.Mesh(geometryPapel, mat1);
    hoja7.position.set(5.7, 0, 0);

    tiraGrupo.add(hoja1, hoja2, hoja3, hoja4, hoja5, hoja6, hoja7);

    tiraGrupo.scale.set(0.8, 0.8, 0.8);
    tiraGrupo.position.set(x, y, z);

    return tiraGrupo;
}