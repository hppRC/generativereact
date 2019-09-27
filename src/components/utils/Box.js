export const StandardBox = ({
	position,
	args,
	key = 0,
	mass = 1,
	color = '#272727'
}) => {
	const ref = useCannon({ mass: mass }, body => {
		body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
		body.position.set(...position);
	});
	return (
		<mesh ref={ref} castShadow receiveShadow key={key}>
			<boxGeometry attach='geometry' args={args} />
			<meshNormalMaterial attach='material' color={color} />
		</mesh>
	);
};
