precision mediump float;
uniform float time;
uniform float randx;
uniform float randy;
uniform float randz;
attribute vec4 color;
varying vec4 vColor;
varying vec3 pos;

void main() {
	vColor = color;
	pos = vec3(
		3. * position.x * ( 1. / time + cos(randx + position.x) * position.x * sin(1. + position.z * time) * cos(1.2 * position.x * sin(cos(position.z + 0.01 * sin(0.5 * time + randx))) + sin(cos(0.5 * time) * position.y))),
		3. * position.y * (1. / time + sin(randy + position.z + 0.5 * time - randy) * position.y * cos(0.001*0.5 * time + position.z + sin(cos(sin(1. - sin(0.5 * time) * cos(0.5 * time)) + sin(0.5 * time)) + sin(cos(0.5 * time)) + 0.5 * time * sin(position.y))) * cos(position.x * cos(sin(0.5 * time)))),
		3. * position.z * (1. / abs(0.5 * time - 100.) + cos(randz + 0.0025*0.5 * time) * position.z + sin(sin(position.y * sin(cos(0.5 * time) + 0.5 * time * sin(position.y)) * cos(position.x * cos(sin(0.5 * time))))))
		);
	gl_PointSize = 1.5;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}