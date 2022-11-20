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
          <directionalLight position={[4,0,5]} intensity={3} />
          <boxGeometry args={[0, 0, 1]} />
          <meshStandardMaterial attach="material" color={0x4D354E}/>
        </mesh>
      </Canvas>
    </> 
  );
}

export default App;