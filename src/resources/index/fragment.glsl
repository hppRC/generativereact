precision mediump float;
uniform float time;
varying vec4 vColor;
varying vec3 pos;
void main() {
	gl_FragColor = vec4(
		vColor.r * abs(sin(time + pos.z) + cos(pos.x)),
		vColor.g * abs(cos(time - vColor.b) + sin(pos.z)),
		vColor.b * abs(sin(time - pos.x) / abs(sin(time - vColor.b))),
		1.0
		);
}