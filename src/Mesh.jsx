import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useLoader, useFrame, events } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import React from 'react'

export const Points = ({positions,color}) => {

// useFrame((state,delta)=>
// {
// reference.

// })

  return <>
 

 <ambientLight intensity={0.5}/>
  <OrbitControls/>
  <mesh position = {positions} scale = {10}>
  <sphereGeometry/>
  <meshStandardMaterial color={"white"}/>
</mesh>



</>


}

export default Points
