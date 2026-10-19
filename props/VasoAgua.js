
import * as THREE from '../js/three.module.js';
 
// Vaso de agua: más ancho arriba que abajo, abierto arriba, con el agua adentro.
// Acepta { x, y, z } (opcional). Si no se los das, queda en 0, 0, 0.
export function crearVasoAgua({ x = 0, y = 0, z = 0 } = {}) {
    const vasoGrupo = new THREE.Group();
 
    // CylinderGeometry(radioArriba, radioAbajo, altura, segmentos, segmentosAltura, abierto)
    // Si radioArriba es MAYOR que radioAbajo, queda más ancho arriba (forma de vaso).
 
    // 1. AGUA (más angosta que el vaso y sin llegar hasta el borde)
    const geometry01 = new THREE.CylinderGeometry(3.79, 3.0, 7.5, 40, 1);
    const material01 = new THREE.MeshBasicMaterial({ color: 0x9AEDE9 });
    const mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(0, 4.25, 0);
 
    // 2. PAREDES DEL VASO (abiertas arriba y abajo: el último "true" es el orificio)
    const geometry02 = new THREE.CylinderGeometry(4.2, 3.2, 9.5, 40, 1, true);
    const material02 = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    const mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.position.set(0, 4.75, 0);
 
    // 3. FONDO DEL VASO (disco transparente abajo)
    const geometry03 = new THREE.CylinderGeometry(3.2, 3.2, 0.5, 40);
    const material03 = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.5,
        depthWrite: false
    });
    const mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.position.set(0, 0.25, 0);
 
    vasoGrupo.add(mesh01, mesh02, mesh03);
 
    // Escala para que quede proporcional a la mesa y la caja (igual que Caja.js).
    vasoGrupo.scale.set(0.05, 0.05, 0.05);
 
    vasoGrupo.position.set(x, y, z);
 
    return vasoGrupo;
}
 
export default crearVasoAgua;