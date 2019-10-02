import * as THREE from 'three';

export default {
	uniforms: {
		uTime: { value: 0 }
	},

	vertexShader: `
    varying vec2 vUv;
    uniform float uTime;

    void main() {
        vUv = uv;
        vec3 pos = position;

        gl_Position = vec4(pos.x, pos.y, pos.z, 1);
}
    `,

	fragmentShader: `
    varying vec2 vUv;

    void main() {
        vec4 color = vec4( vUv.x, vUv.y, 0.0, 1.0 );

        gl_FragColor = color;
    }`
};
