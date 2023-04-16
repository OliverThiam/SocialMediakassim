import React,{useState} from 'react'
import kassim from '../assets/rBackground.png'
import Bild1 from "../assets/landingPage.jpg"
import Logo from "../assets/logor.png"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { FunctionsOutlined } from '@mui/icons-material';
import {motion} from 'framer-motion'

const Hero = () => {

  const [toggleInfo, setToggleInfo] = React.useState(true)

  function toggle(){
    setToggleInfo(prevInfo => !prevInfo)
  }

  return (

    <div className='text-paragraph  h-[100vh] family ' style={{backgroundImage: `url(${Bild1})`}}>
        <div className='flex md:flex-row flex-col justify-between space-x-10'>
              <div className='flex flex-col lg:max-w-4xl md:max-w-8xl  pt-40 px-10 space-y-4'>
                <h1 className='xl:text-8xl lg:text-7xl text-5xl'>Nice to meet ya!</h1>
                <h3 className={"xl:text-3xl text-2xl text-accent"} >"Be an improved Version of yesterday"</h3>
                <div className='flex flex-row items-center text-xl' onClick={toggle}>
                  {toggleInfo ? <ArrowCircleUpIcon className='cursor-pointer' fontSize='large' /> : <ArrowCircleDownIcon className='cursor-pointer' fontSize='large'/>}
                  <p>{toggleInfo ? "Weniger" : "Mehr"}</p>
                </div>
                <p className={toggleInfo ? 'transition-in text-xl' : "transition-out text-xl"}><span className="font-bold">Ich bin die erste deutsche akademische 
                Generation meiner Familienhistorie und werde Freiheit für meine Folgegeneration sicherstellen.</span> Ich komme aus einer Kindheit, 
                in der ich nicht bekam, was ich brauchte, geschweige denn von dem was ich wollte. Ich machte es mir zur Aufgabe die 
                Situation zu ändern und konnte so mit 25 über 100.000 € verdienen, hatte bereits in 6 Ländern gelebt und unglaubliche 
                Persönlichkeiten getroffen. Ich würde an mir zweifeln, wenn ein Jahr verginge ohne mein Einkommen maßgeblich 
                steigern zu können. Auch mein eigener Horizont und die emotionale Reife sind für mich das höchste Ziel. 
                <span className='font-bold'> Komm mit mir auf die Reise und lass mich dir zeigen, was ich bisher gelernt habe und welche Tools mir dabei halfen.</span> 
                </p>
                <motion.a whileTap={{scale: 0.9}} whileHover={{scale: 1.06}} href="/Kontakt" className='max-w-xs flex justify-center py-2 px-4 bg-primary1 rounded-lg'>Kontaktiere mich</motion.a>
            </div>
            <div className='rounded-lg '>
                <img src={kassim} className='hidden lg:flex rounded-lg h-[100vh] pt-20' alt="" />
            </div> 
        </div>
    </div>
  )
}

export default Hero