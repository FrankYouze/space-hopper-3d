import './index.css'
import { OrbitControls, useGLTF,PerspectiveCamera, PointerLockControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import Object from './Object'
import Car from './Car'
import Points from './Mesh'
import Sun from './Sun'
import gaiaData from './data/gaia_data'
import gaiaFake from './data/gaia_fake'
import exoplanetsData from './data/exoplanets'
import Planet from './planets'
import closestStarsData from './data/closest_stars_scaled'
export default function Objects() {

    console.log(gaiaFake)



    
    return <>
        <Canvas
        
       // camera={{ position: [587, -2657, 1202], fov: 50 }}
        >
            {/* <Car/> */}
            {/* <Points /> */}
            {/* <PointerLockControls/> */}
            <PerspectiveCamera  position={  [344, -1724,-3598]} fov = {100} near={0.1} far={1000000}/>
            <OrbitControls dampingFactor={0.3}/>
            <ambientLight intensity={5}/>
         {closestStarsData.map((item,index)=>{
            // console.log(item.x*0.01)
                return <Points positions={[item.x*0.1,item.y*0.1,item.z*0.1]} name={item.name}  key={index} />
            })}
             {exoplanetsData.map((item,index)=>{
            console.log(item.x)
                return <Planet positions={[parseFloat(item.x)* 1000,parseFloat(item.y)* 1000,parseFloat(item.z)* 1000]} name={item.name} key={index} />
            })}
            {/* <Object /> */}
        </Canvas>
    </>
}