import { OrbitControls, useGLTF ,Html} from '@react-three/drei'
import { useRef } from 'react'
import { useLoader, useFrame, events } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import {Suspense ,React, useState} from 'react'
import FakeGlowMaterial from './FakeGlow'
export const Points = ({positions,name}) => {

// useFrame((state,delta)=>
// {
// reference.

// })

const [hovered,setHoverd] = useState(false)

  return <>
 

 <ambientLight intensity={0.5}/>
  {/* <OrbitControls enableDamping ={true}/> */}
<Suspense  fallback={null}>
  <mesh 
  onPointerOver={()=> setHoverd(true)}
  onPointerOut={()=> setHoverd(false)}
  position = {positions} scale = {2} >
  <sphereGeometry/>
  <meshStandardMaterial color={"white"} />
 {/* <FakeGlowMaterial/> */}

  {
    hovered && <Html position={[0,0,0]}>
 <div style={{color:'white'}}>
{name}
 </div>
    </Html>
   }
</mesh>

</Suspense>




</>


}

export default Points
