import * as THREE from '../js/three.module.js';
import  crearCaja  from './Caja.js';
import { crearFlorMediana } from './FlorCempasuchil.js';

export default function crearCajaConFlores({ x = 0, y = 0, z = 0 } = {}) {
    const contenedor = new THREE.Group();

    // 1. Agregar la caja base
    const caja = crearCaja();
    contenedor.add(caja);

    // 2. Rellenar el interior de la caja con flores
    const posicionesFlores = [
        { x: -0.8, y: 0.8, z: -0.5 },
        { x: 0,    y: 0.8, z: -0.5 },
        { x: 0.8,  y: 0.8, z: -0.5 },
        { x: -0.8, y: 0.8, z: 0.5 },
        { x: 0,    y: 0.9, z: 0.5 },  // Un poco más alta al centro
        { x: 0.8,  y: 0.8, z: 0.5 },
        { x: -0.4, y: 1.1, z: 0 },    // Apiladas encima
        { x: 0.4,  y: 1.1, z: 0 }
    ];

    posicionesFlores.forEach(pos => {
        const flor = crearFlorMediana();
        flor.scale.set(0.6, 0.6, 0.6);
        flor.position.set(pos.x, pos.y, pos.z);
        flor.rotation.y = Math.random() * Math.PI;
        contenedor.add(flor);
    });

    // Posición general de todo el contenedor de la caja con flores
    contenedor.position.set(x, y, z);

    return contenedor;
}