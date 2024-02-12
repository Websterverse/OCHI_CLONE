import { motion } from 'framer-motion'
import React from 'react'

const Featurd = () => {
 
 
    return (

    
    <div className='w-full py-20' >

<div className='w-full px-20 border-b-[1px]  border-zinc-700    pb-20  ' >
    <h1 className='text-7xl  tracking-tighter font-["Neue_Montreal"]' >Featured projects</h1>
</div>

<div className='px-20' >

<div className='cards w-full flex gap-10 mt-10 ' >

<div   className='relative   container w-1/2 h-[75vh]  ' >
    <h1 className='absolute  left-full    text-7xl tracking-tighter  font-bold   font-["Neue_Montreal"]  -translate-y-1/2  top-1/2  -translate-x-1/2     ' >

{"FIYBE".split("").map((item , index)=>(
<motion.span   key={index}     >{item}</motion.span>

))}


    </h1>
<div className=' card w-full h-full  overflow-hidden rounded-xl bg-green-400 ' > 
<img  className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />

</div>


<div className='butn flex gap-3 ' >
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[140px] border-2  rounded-full mt-2  h-[40px]   '  >BRANDIDENTITY</button>
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[140px] rounded-full mt-2  h-[40px]   border-2  '  >DESIGNRESEARCH </button>
<button  className='hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[140px] rounded-full mt-2  h-[40px] border-2   '  >INVESTORDECK </button>

</div>

</div>


<div className='container   relative  w-1/2 h-[75vh]  ' >
<h1 className='absolute  right-full    text-7xl tracking-tighter  font-bold   font-["Neue_Montreal"]  -translate-y-1/2  top-1/2  translate-x-1/2     ' >

{"VISE".split("").map((item , index)=>(

<span  key={index} >{item}</span>
))}

</h1>
<div className=' card w-full h-full overflow-hidden rounded-xl bg-green-400 ' >

<img className='h-full w-full object-over '  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />

</div>


<div className='butn flex gap-3 ' >
<button  className= ' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[150px] rounded-full mt-2  h-[40px] border-2   '  >AGENCY</button>
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[190px] rounded-full mt-2  h-[40px] border-2   '  >COMPANYPRESENTATION  </button>
{/* <button  className='border-zinc-100 w-[140px] rounded-full mt-2  h-[40px] bg-red-300   '  >INVESTORDECK </button> */}

</div>


</div>

</div>



</div>
















{/* // another card  */}


<div className='px-20 mt-20 ' >

<div className='cards w-full flex gap-10 mt-10 ' >

<div className='relative container w-1/2 h-[75vh]  ' >
    <h1 className='absolute     left-full    text-7xl tracking-tighter  font-bold   font-["Neue_Montreal"]  -translate-y-1/2  top-1/2  -translate-x-1/2     ' >

{"PREMIUM-BLEND".split("").map((item , index)=>(
<span   key={index} >{item}</span>

))}


    </h1>
<div className=' card w-full h-full  overflow-hidden rounded-xl bg-green-400 ' > 
<img  className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />

</div>

<div className='butn flex gap-3 ' >
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[110px] rounded-full mt-2  h-[40px] border-2  '  >AUDIT</button>
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[110px] rounded-full mt-2  h-[40px] border-2   '  >COPYWRITING</button>
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[110px] rounded-full mt-2  h-[40px] border-2   '  >SALES DECK </button>
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[110px] rounded-full mt-2  h-[40px] border-2   '  >SLIDESDESIGN</button>

</div>



</div>


<div className='container relative  w-1/2 h-[75vh]  ' >
<h1 className='absolute  right-full    text-7xl tracking-tighter  font-bold   font-["Neue_Montreal"]  -translate-y-1/2  top-1/2  translate-x-1/2     ' >

{"TRAWA".split("").map((item , index)=>(

<span key={index} >{item}</span>
))}

</h1>
<div className=' card w-full h-full overflow-hidden rounded-xl bg-green-400 ' >

<img className='h-full w-full object-over '  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />

</div>

<div className='butn flex gap-3 ' >
<button  className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 w-[150px] rounded-full mt-2  h-[40px]   border-2   '  >BRANDEDTEMPLATE</button>
{/* <button  className='border-zinc-100 w-[150px] rounded-full mt-2  h-[50px] bg-red-300   '  >DESIGN RESEARCH </button> */}
{/* <button  className='border-zinc-100 w-[150px] rounded-full mt-2  h-[50px] bg-red-300   '  >INVESTOR DECK </button> */}

</div>


</div>

</div>



</div>




<div className='w-full  border-t-2  border-zinc-700       py-20  mt-20 ' >

<div  className='flex justify-center ' >
<button    className=' hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-zinc-100 flex justify-center gap-10 items-center    w-[250px] rounded-full mt-2  h-[50px] border-2   ' >VIEW CASE STUDIES 

<div className='dot h-[10px] w-[10px] bg-white rounded-full    ' ></div>
</button>
</div>




</div>





    </div>
  )
}

export default Featurd
