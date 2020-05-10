varying vec2 vUv;

uniform float uAspect;
uniform float uTime;
uniform vec2  uMouse;

void main() {
	vec2 uv = vec2( vUv.x * uAspect, vUv.y );
	vec2 center = vec2( uMouse.x * uAspect, uMouse.y );
	float radius = 0.1 + sin( uTime ) * 0.05 ;
	float lightness = radius / length ( uv - vec2(0.5 * uAspect, 0.5) - center * 0.5 );
	//lightness = clamp( lightness, 0.0, 1.0 );
	vec4 color = vec4( vec3( lightness ), 1.0 );
	color *= vec4( uv, 0.9, 1.0 );

	gl_FragColor = color;
}
