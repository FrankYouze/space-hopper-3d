import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



import React from 'react'

const Car = () => {
    const gltf = useLoader(GLTFLoader, '/car/scene.gltf')
  return (
 <primitive 
 position = {[8,9,2]}
 object={ gltf.scene}/>
  )
}

export default Car