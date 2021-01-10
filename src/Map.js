import React, { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { Canvas, extend, useThree } from "react-three-fiber";
import { DoubleSide } from "three";

extend({ OrbitControls });

function Road() {
	return (
		<group position={[0, -0.5, 35]}>
			<mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
				<boxBufferGeometry attach="geometry" args={[110, 10, 1.25]} />
				<meshStandardMaterial
					//wireframe
					attach="material"
					color={0xa0938e}
				/>
			</mesh>
			<mesh
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, 0.35, -5.25]}
				receiveShadow
			>
				<boxBufferGeometry attach="geometry" args={[108, 0.5, 0.5]} />
				<meshStandardMaterial
					//wireframe
					attach="material"
					color={0xcfc6b8}
				/>
			</mesh>
			<mesh
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, 0.35, 5.25]}
				receiveShadow
			>
				<boxBufferGeometry attach="geometry" args={[108, 0.5, 0.5]} />
				<meshStandardMaterial
					//wireframe
					attach="material"
					color={0xcfc6b8}
				/>
			</mesh>
		</group>
	);
}

function Ground() {
	return (
		<group>
			<mesh
				receiveShadow
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, -0.5, 0]}
			>
				<boxBufferGeometry attach="geometry" args={[100, 100, 1]} />
				<meshStandardMaterial
					//wireframe
					attach="material"
					color={0x71aa34}
				/>
			</mesh>
			<mesh
				receiveShadow
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, -8.5, 0]}
			>
				<boxBufferGeometry attach="geometry" args={[100, 100, 15]} />
				<meshStandardMaterial
					//wireframe
					attach="material"
					color={0xcfc6b8}
				/>
			</mesh>
		</group>
	);
}

function Cube(props) {
	return (
		<mesh {...props} castShadow>
			<boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
			<meshStandardMaterial
				//wireframe
				attach="material"
				color={0xa0938e}
				metalness={0.25}
				roughness={1}
				side={DoubleSide}
			/>
		</mesh>
	);
}

function Scene() {
	const {
		camera,
		gl: { domElement }
	} = useThree();

	const orbit = useRef();

	useEffect(() => {
		orbit.current.update();
	}, [orbit]);

	return (
		<>
			<Road />
			<Ground />
			<Cube position={[0, 2.5, 0]} />
			<Cube position={[10, 2.5, 15]} />
			<Cube position={[20, 2.5, 0]} />
			<hemisphereLight
				intensity={0.6}
				color={0xffffff}
				groundColor={0x000000}
				position={[0, 50, 0]}
			/>
			<directionalLight
				castShadow
				shadow-mapSize-height={512}
				shadow-mapSize-width={512}
				shadow-camera-far={100}
				shadow-camera-left={-20}
				shadow-camera-right={20}
				shadow-camera-top={20}
				shadow-camera-bottom={-20}
				position={[-30, 52.5, 30]}
			/>
			<orbitControls
				ref={orbit}
				args={[camera, domElement]}
				enablePan={false}
				enableZoom={true}
				// maxPolarAngle={Math.PI / 4}
				// minPolarAngle={Math.PI / 4}
				target={[0, 0, 0]}
			/>
			<axesHelper args={[100]} />
		</>
	);
}

function Map() {
	return (
		<div className="map-container">
			<Canvas shadowMap camera={{ position: [100, 100, 100] }}>
				<Scene />
			</Canvas>
		</div>
	);
}

export default Map;
