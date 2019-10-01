import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useResource } from 'react-three-fiber';
import { Effect } from './11/Effect';

const theme = {
	width: '100vw',
	height: '100vh',
	backgroundColor: '#000'
};

const Particle = ({ geometry, material }) => {
	let ref = useRef();
	let t = useMemo(() => Math.random() * 100, []);
	let speed = useMemo(() => 0.01 + Math.random() / 200, []);
	let factor = useMemo(() => 20 + Math.random() * 100, []);
	let xFactor = useMemo(() => -50 + Math.random() * 100, []);
	let yFactor = useMemo(() => -50 + Math.random() * 100, []);
	let zFactor = useMemo(() => -30 + Math.random() * 60, []);

	useFrame(() => {
		t += speed;
		const s = Math.cos(t);
		ref.current.scale.set(s, s, s);
		ref.current.rotation.set(s * 5, s * 5, s * 5);
		ref.current.position.set(
			xFactor + Math.cos((t / 30) * factor),
			yFactor + Math.sin((t / 20) * factor),
			zFactor + Math.sin(t * 2) * factor - 10
		);
	});
	return <mesh ref={ref} material={material} geometry={geometry} />;
};

const Swarm = () => {
	const light = useRef();
	const [geometryRef, geometry] = useResource();
	const [materialRef, material] = useResource();
	useFrame(({ mouse }) => {
		light.current.position.x = 50 * mouse.x;
		light.current.position.y = 50 * mouse.y;
	});
	return (
		<>
			<pointLight
				ref={light}
				distance={50}
				intensity={5.0}
				color='#fff'
			/>
			<mesh>
				<planeGeometry attach='geometry' args={[10000, 10000]} />
				<meshPhongMaterial
					attach='material'
					color='#575757'
					depthTest={false}
				/>
			</mesh>
			<boxBufferGeometry ref={geometryRef} args={[1, 0]} />
			<meshPhongMaterial ref={materialRef} />
			{geometry &&
				new Array(1000)
					.fill()
					.map((_, index) => (
						<Particle
							key={index}
							material={material}
							geometry={geometry}
						/>
					))}
		</>
	);
};

const Work11 = () => {
	return (
		<div>
			<Canvas style={theme} camera={{ fov: 75, position: [0, 0, 50] }}>
				<Swarm />
				<Effect />
			</Canvas>
		</div>
	);
};

export default Work11;
