import React, { useEffect, useState } from 'react'
import Confetti from './components/Confetti'
import Loveloader from './components/Loveloader';
import { motion } from 'framer-motion';
import TypewriterText from './components/TypewriterText';

const images = [
  {
    images: './attachments/IMG-20260131-WA0020.jpg',
  },
  {
    images: './attachments/IMG-20260131-WA0025.jpg',
  },
  {
    images: './attachments/IMG-20260131-WA0028.jpg',
  },
  {
    images: './attachments/IMG-20260203-WA0204.jpg',
  },
  {
    images: './attachments/IMG-20260203-WA0206.jpg'
  },
  {
    images:'./attachments/IMG-20260203-WA0207.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0209.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0211.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0221.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0223.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0225.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0228.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0231.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0232.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0234.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0241.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0244.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0245.jpg'
  },
  {
    images: './attachments/IMG-20260203-WA0248.jpg'
  },
  {
    images: './attachments/IMG-20260301-WA0072.jpg'
  },
  {
    images: './attachments/IMG-20260323-WA0003.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0043.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0046.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0050.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0051.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0052.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0064.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0065.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0066.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0068.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0072.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0074.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0076.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0077.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0079.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0081.jpg'
  },
  {
    images: './attachments/IMG-20260409-WA0083.jpg'
  },
  {
    images: './gallery/IMG-20260214-WA0026.jpg'
  },
  {
    images: './gallery/IMG-20260214-WA0121.jpg'
  },
  {
    images: './gallery/IMG-20260214-WA0124.jpg'
  },
  {
    images: './gallery/IMG-20260409-WA0072.jpg'
  },
]

const video = [
  {
    video: './gallery/Snapchat-605975026.mp4'
  },
  {
    video: './gallery/Snapchat-1016132640.mp4'
  },
  {
    video: './gallery/Snapchat-1359745426.mp4'
  }
]

export default function App() {
  const [celebrate, setCelebrate] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
        setLoading(false)
    }, 10000)
  }, [])

  if (loading) {
    return <Loveloader/>
  }

  return (
    <>
    <div className='flex justify-center hero items-center h-screen relative overflow-hidden'>

  {/* DARK OVERLAY */}
  <div className='absolute inset-0 bg-black/70'></div>
  <Confetti trigger={celebrate} />

  {/* FLOATING MEDIA (NOW INSIDE HERO) */}
  <div className='absolute inset-0 pointer-events-none'>

    {/* ITEM 1 */}
    <div className='absolute w-24 md:w-36 top-10 md:top-16 left-2 md:left-4 
    bg-white p-1 rounded-2xl border-2 border-pink-300 
    animate-[float_5s_ease-in-out_infinite]'>

      <video src='./gallery/Snapchat-1359745426.mp4' muted autoPlay loop
        className='w-full h-full object-cover rounded-2xl brightness-[45%]' />
    </div>

    {/* ITEM 2 */}
    <div className='absolute w-24 md:w-36 right-2 md:right-5 bottom-16 md:bottom-20 
    bg-white p-1 rounded-2xl border-2 border-pink-300 
    animate-[float_6s_ease-in-out_infinite]'>

      <img src='./attachments/IMG-20260131-WA0020.jpg'
        className='w-full h-full object-cover rounded-2xl brightness-[45%]' />
    </div>

    {/* ITEM 3 */}
    <div className='absolute w-24 md:w-36 top-10 md:top-16 right-4 md:right-8 
    bg-white p-1 rounded-2xl border-2 border-pink-300 
    animate-[float_7s_ease-in-out_infinite]'>

      <img src='./attachments/IMG-20260131-WA0028.jpg'
        className='w-full h-full object-cover rounded-2xl brightness-[45%]' />
    </div>

    {/* ITEM 4 */}
    <div className='absolute w-24 md:w-36 bottom-16 md:bottom-20 left-2 md:left-5 
    bg-white p-1 rounded-2xl border-2 border-pink-300 
    animate-[float_8s_ease-in-out_infinite]'>

      <video src='./gallery/Snapchat-1016132640.mp4' muted autoPlay loop
        className='w-full h-full object-cover rounded-2xl brightness-[45%]' />
    </div>

    {/* CENTER FLOATING IMAGES (NOW MOBILE + DESKTOP) */}

<div className='absolute top-6 left-1/2 -translate-x-1/2 
w-24 md:w-36 bg-white p-1 rounded-2xl border-2 border-pink-300 
animate-[float_6s_ease-in-out_infinite]'>

  <img src='/attachments/IMG-20260203-WA0206.jpg'
    className='w-full h-full object-cover rounded-2xl brightness-[45%]' />
</div>

<div className='absolute bottom-6 left-1/2 -translate-x-1/2 
w-24 md:w-36 bg-white p-1 rounded-2xl border-2 border-pink-300 
animate-[float_7s_ease-in-out_infinite]'>
  <img src='./attachments/IMG-20260203-WA0225.jpg' alt='' className='w-full h-full object-cover rounded-2xl brightness-[45%]'/>
</div>

  </div>

  {/* MAIN CONTENT */}
  <div className='flex justify-center items-center flex-col relative gap-4 z-10'>
    
    <h2 className='text-5xl text-center font-bold text-white leading-14 text-shadow-2xs text-shadow-pink-500'>
      Happy Birthday My Love ❤️💕
    </h2>

    <p className='text-sm text-white'>
      <i>Scroll down… I made something special for you</i>
    </p>

    <button
      onClick={() => setCelebrate(prev => !prev)}
      className='mt-4 px-6 py-3 bg-pink-400 text-white rounded-full shadow-lg hover:scale-105 transition'
    >
      Celebrate 🎉
    </button>

  </div>
</div>

    <section className='py-28'>
      <h3 className='text-center text-3xl underline mb-16 text-pink-500 font-medium uppercase'>How it all started</h3>
      <motion.p
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='px-4 text-center font-medium leading-7'>On this day, many years ago, the world was just there oooo.... normal, quiet, a bit boring sef.
        Then God said, 'Hmmmm, let me show off small.' And that was how you were sent to Earth oooo.
        I'm convinced you weren't even born like the rest of us... you were imported directly from heaven
        because no normal human being should be this beautiful and still be stressing me like this😭❤️.
        <br />
        <br />
        <br />
        Then your parents shey kini🙃😂 and gave birth to you and when you came out I'm sure the doctor didn't
        even say 'it's a girl'.... He said <strong>Ah! This one go cause problems for somebody son one day o😭</strong>
        And see me today... the victim❤️🙃. But honestly if loving you is the problem, then I don't want solution.
      </motion.p>
      <p className='text-center italic my-8'>But on a serious note...</p>
      <TypewriterText/>
    </section>


    <div className='space-y-6 pt-28 pb-4'>
      {images.map(items=> (
        <div key={items.images} className='px-4'>
          <img src={items.images} alt='' className='rounded-2xl shadow-2xl' />
        </div>
      ))}
      {video.map(items=>(
        <div key={items.video} className='px-4'>
          <video src={items.video} muted autoPlay loop className='rounded-2xl shadow-2xl'></video>
        </div>
      ))}
    </div>
    </>
  )
}