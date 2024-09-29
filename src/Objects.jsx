import './index.css'
import { Canvas } from "@react-three/fiber"
import Object from './Object'
import Car from './Car'
export default function Objects() {
    return <>
        <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        >
            <Car/>
            <Object />
        </Canvas>
    </>
}