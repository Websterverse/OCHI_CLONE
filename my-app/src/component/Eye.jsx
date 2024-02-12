import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Eye = () => {

const [rotate , setRotate] = useState(0);

useEffect(()=>{
window.addEventListener('mousemove' ,  (e)=>{
console.log(e.clientX , e.clientY) ; 
let mousex = e.clientX ;
let mousey = e.clientY ;

let deltaX = mousex - window.innerWidth/2;
let deltaY = mousey - window.innerHeight/2;

let angle =   Math.atan2(deltaY , deltaX) * (180/Math.PI) ; 

setRotate(angle - 180  );

})

})






    return (
        <div className=' eye w-full h-screen  overflow-hidden    '  >
            <div  data-scroll data-scroll-speed='-.7'   className=' w-full  relative h-full bg-cover bg-center     bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]  ' >


                <div className='absolute  flex h-[250px]   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-5    ' >

                    <div className='w-[15vw] h-[15vw] flex items-center justify-center  rounded-full  bg-zinc-200  ' >

                        <div className='w-2/3 h-2/3  relative   rounded-full  bg-black' >

                            <div style={{transform : `translate(-50% , -50%) rotate(${rotate}deg)  ` }}  className='   w-full  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]    h-10  line' >

                                <div className='w-10 h-10  rounded-full  bg-white' ></div>

                            </div>



                        </div>

                    </div>




                    <div className='w-[15vw] h-[15vw]  rounded-full flex items-center justify-center bg-zinc-200  ' >

                        <div className='w-2/3 h-2/3  relative   rounded-full  bg-black' >

                            <div style={{transform : `translate(-50% , -50%) rotate(${rotate}deg)  ` }}   className='w-full    h-10   absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line' >

                                <div className='w-10 h-10  rounded-full  bg-white' ></div>

                            </div>


                        </div>

                    </div>


                </div>


            </div>



        </div>
    )
}

export default Eye
