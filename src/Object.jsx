import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Car from './Car'
export default function Object() {

    const objectRef = useRef();

    useFrame(()=> {
    //    objectRef.current.rotation.y += 0.01;
    })
    const sun  = useLoader(GLTFLoader, '/sun/scene.gltf')
    const tree  = 
    useGLTF("/modelTree.gltf");
    const gltf = useLoader(GLTFLoader, '/car/scene.gltf')

    

    return <>
    <OrbitControls/>
        {/* <mesh position-x = {-2} scale = {1.2}>
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh> */}
        {/* <mesh ref = { objectRef } position-x = {2}>
            <torusKnotGeometry color ='white' />
            <meshNormalMaterial />
        </mesh> */}
<Car></Car>

        <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
       <primitive position = {[9,7,5]} object={tree.scene} />
        <primitive scale = {0.3}  position = {[0,0,0]} object={sun.scene} />
    </>
}