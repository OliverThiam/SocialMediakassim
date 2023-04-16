import React,{useState, useRef, useEffect} from 'react'
import YouTube from 'react-youtube';
import bild from '../assets/landingPage.jpg'
import {motion} from 'framer-motion'
import post from "./post"



const SocialMedia = () => {

  const obj1 = {
    height:'500px',
    width:'1200px'
  }

  const obj2 = {
    heigth:'500px',
    width:'750px'
  }

  const obj3 = {
    heigth:'400px',
    width: '400px'
  }

  const obj4 = {
    heigth:'400px',
    width: '270px'
  }

  const [width, setWidth] = useState(0)
  const carusel = useRef()

  useEffect(() =>{
      setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
  }, [])

  return (
    <section ref={carusel} style={{backgroundImage:`url(${bild})`}} className='pt-[82px] px-10'>
    <div className='  '>
      <div className='p-4 pb-2  '>
          {/* <hr className='mt-4 ml-[665px] w-80 flex justify-center'/> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, height: "3px" }} />
 
          <h1 className='text-2xl mx-4 font-bold flex  justify-center'>Instagram</h1>
 
            <div style={{ flex: 1, height: "3px" }} />
          </div>
      </div>

        <div className=' flex flex-col  '>
        <div className='border-t border-black  border-t-2'>
          <motion.div drag="x" dragConstraints={{right: -40, left: -width}} whileTap={{cursor: "grabbing"}} className='inner-carusel space-x-4'>
                {post.map(post =>{
                    return(
                        <motion.div whileTap={{scale: 0.975}} whileHover={{scale: 1.05}} className='item margin ' key={post.url}>
                          <blockquote
      
                            className="instagram-media border border-red-500 h-[420px] w-[320px] "
      
                            data-instgrm-version="14"
      
                            >
      
                            <a  href={post.url}></a>
      
                          </blockquote> 
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
          {/* <blockquote
    
            className="instagram-media border border-red-500 h-[320px] w-[250px] "
    
            data-instgrm-version="14"
    
          >
    
            <a  href="https://www.instagram.com/p/Cq9bwrDMgRd/?utm"></a>
    
          </blockquote> */}
          <div>
            <h2 className='text-2xl font-bold  flex justify-center '>Youtube</h2>
            <hr className='my-2 border-t-black border-t-2' />
          </div>
          <div className='m-[auto] hidden lg:visible lg:flex pt-10'>
            <YouTube opts={obj1} videoId="UY6bhcaNSPw" />
          </div>
          <div className='m-[auto] hidden  sm:flex lg:hidden pt-10'>
            <YouTube opts={obj2} videoId="UY6bhcaNSPw" />
          </div>
          <div className='m-[auto] hidden sm:hidden xs:flex pt-10'>
            <YouTube opts={obj3} videoId="UY6bhcaNSPw" />
          </div>
          <div className='m-[auto]  xs:hidden  pt-10'>
            <YouTube opts={obj4} videoId="UY6bhcaNSPw" />
          </div>
        </div>

      </div>
    </section>
   
  )
}

export default SocialMedia