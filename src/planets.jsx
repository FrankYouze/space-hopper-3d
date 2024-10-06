import { OrbitControls, useGLTF ,} from '@react-three/drei'
import { useRef } from 'react'
import { useLoader, useFrame, events } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import {Suspense ,React} from 'react'

export const Planet = ({positions,color}) => {

// useFrame((state,delta)=>
// {
// reference.

// })

  return <>
 

 <ambientLight intensity={0.5}/>
  {/* <OrbitControls enableDamping ={true}/> */}
<Suspense  fallback={null}>
  <mesh position = {positions} scale = {1} >
  <sphereGeometry/>
  <meshStandardMaterial color={"green"} />
</mesh>
</Suspense>




</>


}

export default Planet
