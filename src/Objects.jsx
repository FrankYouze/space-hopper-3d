import './index.css'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import Object from './Object'
import Car from './Car'
import Points from './Mesh'
import Sun from './Sun'
import gaiaData from './data/gaia_data'
import gaiaFake from './data/gaia_fake'
import exoplanetsData from './data/exoplanets'
export default function Objects() {

    console.log(gaiaFake)



    
    return <>
        <Canvas
        camera={{ position: [39, 40, 49], fov: 50 }}
        >
            {/* <Car/> */}
            {/* <Points /> */}
            <OrbitControls/>
            <ambientLight intensity={0.5}/>
         {exoplanetsData.map((item,index)=>{
            console.log(item.x)
                return <Points positions={[item.x*1000,item.y*1000 ,item.z*1000]}  key={index} />
            })}
             {/* {gaiaData.map((item,index)=>{
            console.log(item.x)
                return <Points positions={[parseFloat(item.x)* 100,parseFloat(item.y)* 100,parseFloat(item.z)* 100]} color={item.color} key={index} />
            })} */}
            {/* <Object /> */}
        </Canvas>
    </>
}