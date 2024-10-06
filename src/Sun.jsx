import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



import {Suspens,React }from 'react'

const Sun = ({positions}) => {
    const gltf = useLoader(GLTFLoader, '/SpaceApp.gltf')
   console.log(positions)
  return (
    
 <primitive 
 
 position = {positions}
 object={ gltf.scene}/>
  )
}

export default Sun