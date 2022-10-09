import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls autoRotate={true}/>
        <mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[-1,0,1]} intensity={3} />
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial attach="material" color={0xEBA3EE}/>
        </mesh>
      </Canvas>
    </> 
  );
}

export default App;