import './index.css'
import { OrbitControls, useGLTF,PerspectiveCamera, PointerLockControls,Html } from '@react-three/drei'
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
import { useState } from'react'
import './Objects.css'
export default function Objects() {

 
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0, z: 0 });


    
        const [inputValue, setInputValue] = useState('');
    
        const handleInputChange = (event) => {
          setInputValue(event.target.value);
        };
      
        const handleSearch = () => {
          // Function to perform search in a JS file
          
        searchInJsFile(inputValue);
        };




        const searchInJsFile = (query) => {
            const result = exoplanetsData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
            
            if (result.length > 0) {
              console.log('Search Results:', result[0]);
             // const { x, y, z } = results[0]; 

              setCoordinates({ x:result[0].x, y: result[0].y, z:result[0].z });

            } else {
              console.log('No results found');
            //  setCoordinates({ x: 334, y: -1724, z: -3598 });
            }
          };





 
    
    return <>


<div className="juu">
    SPACE HOPPERS
    <input 
className="search"
value={inputValue}
onChange={handleInputChange}
type="text" placeholder="search for planet...."/>
<button type='submit' onClick={handleSearch}>SEARCH</button>
  </div>

        <Canvas
        
    //    camera={{ position:  [coordinates.x*1000, coordinates.y*1000,coordinates.z*1000], fov: 50 }}
        >
            {/* <Car/> */}
            {/* <Points /> */}
            {/* <PointerLockControls/> */}
            <PerspectiveCamera  position={  [coordinates.x*1000, coordinates.y*1000,coordinates.z*1000]} fov = {100} near={0.1} far={1000000}/>
            <OrbitControls dampingFactor={0.3}/>
            <ambientLight intensity={5}/>
         {closestStarsData.map((item,index)=>{
            // console.log(item.x*0.01)
                return <>
  
   <Points
   

   positions={[item.x*0.1,item.y*0.1,item.z*0.1]} name={item.name}  key={index} />
                </>
            })}
             {exoplanetsData.map((item,index)=>{
            // console.log(item.x)
                return <Planet positions={[parseFloat(item.x)* 1000,parseFloat(item.y)* 1000,parseFloat(item.z)* 1000]} name={item.name} key={index} />
            })}
            {/* <Object /> */}
        </Canvas>
    </>
}