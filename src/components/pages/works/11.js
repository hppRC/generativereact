import React, { useRef, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useResource, useThree } from 'react-three-fiber';
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
			xFactor +
				Math.cos((t / 30) * factor) +
				(Math.sin(t * 1) * factor) / 10,
			yFactor +
				Math.sin((t / 20) * factor) +
				(Math.cos(t * 2) * factor) / 10,
			zFactor +
				Math.cos((t / 10) * factor) +
				(Math.sin(t * 3) * factor) / 20
		);
	});
	return <mesh ref={ref} material={material} geometry={geometry} />;
};

const Swarm = ({ mouseOld }) => {
	const light = useRef();
	const [geometryRef, geometry] = useResource();
	const [materialRef, material] = useResource();
	useFrame(({ mouse }) => {
		light.current.position.x = mouse.x;
		light.current.position.y = mouse.y;
	});
	return (
		<>
			<pointLight
				ref={light}
				distance={50}
				intensity={1.5}
				color='white'
			/>

			<mesh>
				<planeGeometry attach='geometry' args={[10000, 10000]} />
				<meshPhongMaterial
					attach='material'
					color='#575757'
					depthTest={false}
				/>
			</mesh>
			<sphereBufferGeometry ref={geometryRef} args={[8, 30, 30]} />
			<meshPhysicalMaterial ref={materialRef} />
			{geometry &&
				new Array(200)
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
	const mouse = useRef([0, 0]);
	const onMouseMove = useCallback(
		({ clientX: x, clientY: y }) =>
			(mouse.current = [
				x - window.innerWidth / 2,
				y - window.innerHeight / 2
			]),
		[]
	);
	return (
		<div onMouseMove={onMouseMove}>
			<Canvas style={theme} camera={{ fov: 75, position: [0, 0, 50] }}>
				<Swarm mouse={mouse} />
			</Canvas>
		</div>
	);
};

export default Work11;
