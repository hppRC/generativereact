export default {
	uniforms: {
		uTime: { value: 0 },
		resolution: { value: [0, 0] }
	},

	vertexShader: `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4( position, 1. );
}
    `,

	fragmentShader: `
    varying vec2 vUv;

    void main() {
        vec4 color = vec4( vUv.x, vUv.y, 0.0, 1.0 );// テクスチャ座標を r g に入れる

        gl_FragColor = color;
    }`
};
