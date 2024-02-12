import React from 'react'

const Cards = () => {
  return (
    <div   className='cards flex px-20  w-full h-screen      '>
      

<div className='w-1/2 h-[50vh] rounded-xl      bg-[#004D43]  '>

<div className='flex justify-center  w-full h-full   items-center ' >
<img  className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
</div>
<div className=' w-full h-full flex items-start justify-start ' >
<button  className='  hover:bg-white hover:text-black ease-in-out transition  hover:scale-110   border-2 border-zinc-100   w-[110px] h-[40px] rounded-full  '    >&copy; 2019-2024</button>
</div>
</div>



<div className='w-1/2 h-[50vh] flex  px-10  gap-4   ' >

<div  className='w-1/2 h-full rounded-xl   bg-[#212121] '   >

<div className='flex justify-center  w-full h-full   items-center ' >

<img  className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />



</div>

<div className=' w-full h-full flex items-start justify-start ' >
<button  className='  hover:bg-white hover:text-black ease-in-out transition  hover:scale-110   border-2 border-zinc-100   w-[220px] h-[40px] rounded-full  '    >    RATING5.0 ON CLUTCH</button>
</div>

</div>
<div  className='w-1/2 h-full  rounded-xl  bg-[#212121] ' >
<div className='flex justify-center  w-full h-full   items-center ' >

<img  className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />

</div>

<div className=' w-full h-full flex items-start justify-start ' >
<button  className='    hover:bg-white hover:text-black ease-in-out transition  hover:scale-110 border-2 border-zinc-100   w-[250px] h-[50px] rounded-full  '    > BUSINESS BOOTCAMP ALUMNI</button>
</div>
</div>


</div>





    </div>
  )
}
  
export default Cards
