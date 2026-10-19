import * as THREE from '../js/three.module.js';
import Silla from './Silla.js';
import Mesa from './Mesa.js';

export default function crearTrajinera({ x = 0, y = 0, z = 0 } = {}) {
    const trajinera = new THREE.Group();

    // 🎨 MATERIALES BASE
    const matArco = new THREE.MeshLambertMaterial({ color: 0xcd6155 });

    // 🖼️ CARGAR TEXTURAS
    const textureLoader = new THREE.TextureLoader();
    
    // Textura para los bordes
    const texturaBordes = textureLoader.load('./asstes/Trajinera-T1.jpeg'); 
    texturaBordes.wrapS = THREE.RepeatWrapping;
    texturaBordes.wrapT = THREE.RepeatWrapping;
    texturaBordes.repeat.set(4, 1);

    const matBordesConTextura = new THREE.MeshLambertMaterial({ 
        map: texturaBordes,
        side: THREE.DoubleSide 
    });

    // Textura para la proa
    const texturaProa = textureLoader.load('./asstes/Trajinera-T2.jpeg'); 
    texturaProa.wrapS = THREE.RepeatWrapping;
    texturaProa.wrapT = THREE.RepeatWrapping;

    const matProaConTextura = new THREE.MeshLambertMaterial({ 
        map: texturaProa,
        side: THREE.DoubleSide 
    });

    // Textura para los pilares
    const texturaPilares = textureLoader.load('./asstes/Trajinera-T4.jpeg'); 
    const matPilaresConTextura = new THREE.MeshLambertMaterial({ 
        map: texturaPilares,
        side: THREE.DoubleSide 
    });

    // Textura para el domo (puedes usar fondo.jpeg u otra textura que prefieras)
    const texturaDomo = textureLoader.load('./asstes/Trajinera-T5.jpeg'); 
    texturaDomo.wrapS = THREE.RepeatWrapping;
    texturaDomo.wrapT = THREE.RepeatWrapping;
    texturaDomo.repeat.set(2, 2); // Opcional: ajusta la repetición si quieres que se vea más fina o ancha

    const matDomoConTextura = new THREE.MeshLambertMaterial({ 
        map: texturaDomo,
        side: THREE.DoubleSide 
    });

    // 1. CASCO AMPLIADO DE LA EMBARCACIÓN
    const baseGeo = new THREE.BoxGeometry(10.5, 0.72, 18);
    const base = new THREE.Mesh(baseGeo, matProaConTextura);
    base.position.set(0, 0.36, 0);
    trajinera.add(base);
    
    // Bordes laterales con textura
    const bordeGeo = new THREE.BoxGeometry(0.4, 1.44, 18);
    const bordeIzq = new THREE.Mesh(bordeGeo, matBordesConTextura);
    bordeIzq.position.set(-5.2, 0.74, 0); 
    
    const bordeDer = new THREE.Mesh(bordeGeo, matBordesConTextura);
    bordeDer.position.set(5.2, 0.74, 0);  
    
    trajinera.add(bordeIzq, bordeDer);

    // Proa levantada con textura aplicada
    const proaGeo = new THREE.BoxGeometry(10.5, 0.72, 4);
    const proa = new THREE.Mesh(proaGeo, matProaConTextura);
    proa.position.set(0, 0.98, 10);
    proa.rotation.x = -Math.PI / 12;
    trajinera.add(proa);

    // 2. PILARES TEXTURIZADOS
    const posteGeo = new THREE.CylinderGeometry(0.15, 0.15, 5.5);

    const posteIzq1 = new THREE.Mesh(posteGeo, matPilaresConTextura);
    posteIzq1.position.set(-4.6, 3.2, -5);
    trajinera.add(posteIzq1);

    const posteIzq2 = new THREE.Mesh(posteGeo, matPilaresConTextura);
    posteIzq2.position.set(-4.6, 3.2, 0);
    trajinera.add(posteIzq2);

    const posteIzq3 = new THREE.Mesh(posteGeo, matPilaresConTextura);
    posteIzq3.position.set(-4.6, 3.2, 5);
    trajinera.add(posteIzq3);

    const posteDer1 = new THREE.Mesh(posteGeo, matPilaresConTextura);
    posteDer1.position.set(4.6, 3.2, -5);
    trajinera.add(posteDer1);

    const posteDer2 = new THREE.Mesh(posteGeo, matPilaresConTextura);
    posteDer2.position.set(4.6, 3.2, 0);
    trajinera.add(posteDer2);

    const posteDer3 = new THREE.Mesh(posteGeo, matPilaresConTextura);
    posteDer3.position.set(4.6, 3.2, 5);
    trajinera.add(posteDer3);

    // 🌟 DOMO CON TEXTURA APLICADA
    const domoGeo = new THREE.CylinderGeometry(5.2, 5.2, 14, 16, 1, false, 0, Math.PI);
    const domo = new THREE.Mesh(domoGeo, matDomoConTextura);
    domo.rotation.z = Math.PI / 2;             
    domo.rotation.y = -Math.PI / 2;         
    domo.position.set(0, 5.8, 0);  
    trajinera.add(domo);

    // 3. ARCO TRADICIONAL DE BIENVENIDA
    const arcoGeo = new THREE.BoxGeometry(10.7, 3.2, 0.3);
    const arco = new THREE.Mesh(arcoGeo, matArco);
    arco.position.set(0, 7.5, 7);
    trajinera.add(arco);

    const marcoGeo = new THREE.BoxGeometry(7, 1.8, 0.4);
    const marcoMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const marco = new THREE.Mesh(marcoGeo, marcoMat);
    marco.position.set(0, 7.5, 7);
    trajinera.add(marco);

    // 4. MESA INTERIOR
    trajinera.add(Mesa({ x: 0, y: 1.22, z: 0 }));

    // 5. SILLAS
    let giroIzquierda = Math.PI / 2;   
    let giroDerecha = -Math.PI / 2;    

    // Lado izquierdo
    const sillaIzq1 = Silla({ x: -3.2, y: 1.22, z: -4 });
    sillaIzq1.rotation.y = giroIzquierda;
    trajinera.add(sillaIzq1);

    const sillaIzq2 = Silla({ x: -3.2, y: 1.22, z: -2 });
    sillaIzq2.rotation.y = giroIzquierda;
    trajinera.add(sillaIzq2);

    const sillaIzq3 = Silla({ x: -3.2, y: 1.22, z: 0 });
    sillaIzq3.rotation.y = giroIzquierda;
    trajinera.add(sillaIzq3);

    const sillaIzq4 = Silla({ x: -3.2, y: 1.22, z: 2 });
    sillaIzq4.rotation.y = giroIzquierda;
    trajinera.add(sillaIzq4);

    const sillaIzq5 = Silla({ x: -3.2, y: 1.22, z: 4 });
    sillaIzq5.rotation.y = giroIzquierda;
    trajinera.add(sillaIzq5);

    // Lado derecho
    const sillaDer1 = Silla({ x: 3.2, y: 1.22, z: -4 });
    sillaDer1.rotation.y = giroDerecha;
    trajinera.add(sillaDer1);

    const sillaDer2 = Silla({ x: 3.2, y: 1.22, z: -2 });
    sillaDer2.rotation.y = giroDerecha;
    trajinera.add(sillaDer2);

    const sillaDer3 = Silla({ x: 3.2, y: 1.22, z: 0 });
    sillaDer3.rotation.y = giroDerecha;
    trajinera.add(sillaDer3);

    const sillaDer4 = Silla({ x: 3.2, y: 1.22, z: 2 });
    sillaDer4.rotation.y = giroDerecha;
    trajinera.add(sillaDer4);

    const sillaDer5 = Silla({ x: 3.2, y: 1.22, z: 4 });
    sillaDer5.rotation.y = giroDerecha;
    trajinera.add(sillaDer5);

    // Posición global de la trajinera
    trajinera.position.set(x, y, z);

    return trajinera;
}