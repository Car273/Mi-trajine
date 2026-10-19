import * as THREE from '../js/three.module.js';
import { FontLoader } from '../js/FontLoader.js';
import { TextGeometry } from '../js/TextGeometry.js';

export default function crearTexto({ x, y, z, texto = 'Vanessa', size = 1.5, color = 0xffa500 }) { // no colocar valor a x,y,z

    // La fuente viene del <script src> como variable global (fontJSON1)
    const loader = new FontLoader();
    const font = loader.parse(window.fontJSON1);

    const textGeo = new TextGeometry(texto, {
        font: font,
        size: size,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelSegments: 5
    });

    // Centrar el texto
    textGeo.computeBoundingBox();
    const centerOffset = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

    const textMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.3,
        metalness: 0.2
    });

    const mesh1 = new THREE.Mesh(textGeo, textMat);
    mesh1.position.x = centerOffset; // solo centra el texto dentro del grupo
    mesh1.castShadow = true;         // para que proyecte sombra

    const TEXTO = new THREE.Group();
    TEXTO.add(mesh1);
    TEXTO.position.set(x, y, z); // posición real, la manda el HTML

    return TEXTO;
}