import React from 'react'

const About = () => {
  return (
    <div className='w-full rounded-tr-3xl text-black  px-20  rounded-tl-3xl  bg-[#CDEA68]  py-20 '  >
    <h1 className='text-[4vw] leading-[4.5vw] tracking-tight font-regular  font-["Neue_Montreal"] capitalize ' >Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell products, ex­plain com­plex ideas, and hire great peo­ple.</h1>  
  
<div className='w-full  pt-20    ' >


<div  className=' border-t-2 pt-8  flex justify-between   border-zinc-900' >

<h1>What you can expect:</h1>

<div className='part2  w-[300px]    ' >
 <h1 className='pb-12' >
We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1>

<h1>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
</div>


<div className='links '    >
<h1 className='pb-10 pt-20  ' >S:</h1>

{["INSTAGRAM" , "TWITTER" , "LINKEDIN" , "META"].map((items, index)=>{

 return  <>  <a  key={index} href="">{items}</a> <br /> </> 
})}



{/* <a href="">BEHANCE</a> */}
{/* <a href="">FACEBOOK</a> */}
{/* <a href="">LINKEDIN</a> */}

</div>


</div>



</div>


  <div className='w-full  flex   border-t-2 border-gray-900  mt-20  pt-10    ' >

<div className='w-1/2  '  > 
<h1 className='text-8xl  font-["Neue_Montreal"]  capitalize  pb-10   ' >Our Approach</h1>
<button className='  flex  justify-around gap-3 items-center   rounded-full  h-[60px] w-[200px]   bg-gray-800  text-white    ' >READ ME 
<div className='h-2 w-2 rounded-full  bg-white    ' ></div>

</button>
  </div>

<div className='w-1/2  h-[500px] overflow-hidden      rounded-xl    ' >

<img  className='object-cover    rounded-xl  ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />

</div>


  </div>


  
  
  
    </div>
  )
}
  
export default About
