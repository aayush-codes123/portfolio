import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = (props) => {
  const ref = useRef();

  // Generate particles in a wide field instead of a sphere
  const particles = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        // Spread x widely (-15 to 15) to cover screen
        positions[i * 3] = (Math.random() - 0.5) * 30;
        // Spread y (-10 to 10)
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        // Spread z depth (-5 to 5) for parallax
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    // Gentle rotation
    const time = state.clock.getElapsedTime();

    // Mouse interaction via state.mouse (normalized -1 to 1)
    // We dampen the movement for smoothness
    const x = state.mouse.x * 0.5; // Sensitivity
    const y = state.mouse.y * 0.5;

    // Rotate the entire field based on mouse
    if(ref.current) {
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y, 0.1);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x, 0.1);

      // Add a slow wave/breathing effect
      ref.current.position.z = Math.sin(time / 4) * 0.5;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

const InteractiveCanvas = (props) => {
    return (
        <group>
             <Particles {...props} />
        </group>
    )
}

export default InteractiveCanvas;
