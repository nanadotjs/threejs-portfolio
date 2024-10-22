/*
    Auto-generated by: https://github.com/pmndrs/gltfjsx
    Command: npx gltfjsx@6.5.0 react.glb -T
    Author: xenadus (https://sketchfab.com/xenadus)
    License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
    Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
*/

import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb');

  return (
    <Float floatIntensity={1}>
      <group scale={0.7} {...props} position={[18, 6, 0]}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[-6, -5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
     </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;