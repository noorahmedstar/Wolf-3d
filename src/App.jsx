import { useState } from 'react'
import { useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber";
import './App.scss'
import Dog from './componets/dog'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import MusicPlayer from './componets/Music';


function App() {
  gsap.registerPlugin(ScrollTrigger)
  const audioRef = useRef(null)   // ✅ ADD THIS


  const [isPlaying, setIsPlaying] = useState(false);



  useGSAP(() => {

    gsap.utils.toArray("section").forEach((section) => {

      const texts = section.querySelectorAll(
        "h1, h2, p, span, small"
      )

      gsap.from(texts, {
        y: 120,
        opacity: 0.,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    })

  }, [])
  useEffect(() => {
    const handleScroll = () => {
      setIsPlaying(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <main>
      <MusicPlayer isPlaying={isPlaying} />


 
     
     
      
      <div className="photo">
        <img id='tomm' src="/tommorowland.png" alt="" />
        <img id='navy' src="/navy-pier.png" alt="" />
        <img id='chic' src="/msi-chicago.png" alt="" />
        <img id='phon' src="/phone.png" alt="" />
        <img id='kikk' src="/kikk.png" alt="" />
        <img id='kenn' src="/kennedy.png" alt="" />
        <img id='oper' src="/opera.png" alt="" />
      </div>
      <Canvas id='canvas-elem' style={{
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: -1,


      }}>
        <Dog />
      </Canvas>
      <section id='section-1'>
        <nav>
          <div className="elem1"><span>
            DOGSTUDIO</span>
            <span>/DEFT</span>
          </div>
          <div className="elem2">OurShowres!</div>
           <button className="elem3"  onClick={() => setIsPlaying(false)}>|||</button>
        </nav>
        <div className="topbox1">
          <div className="maintext">
            <span className='bigtext'>We</span>
            <span className='bigtext'>Make</span>
            <span className='bigtext'>Good</span>
            <span className='bigtext'>Shit</span>
          </div>
        </div>
        <div className="downbox1">

          <div className="p-box">
            <p className="p-first">Dogstudio is a multidisciplinary
              creative studio at the intersection
              of art, design and technology.</p>
            <p className="p-second">Our goal is to deliver amazing experiences that make
              people talk, and build strategic value for brands, tech,
              entertainment, arts & culture.</p>
            <p className="p-third">Facebook
              /Instagram
              /Dribbble
              /Twitter
              /Newsletter</p>

          </div>
        </div>
        <div className="first-line"></div>
        <div className="second-line"></div>
      </section>
      <section id='section-2'>
        <div className="titles">
          <div img-title="tomm" className="title" id="tomm" >
            <small>2020-ongoing</small>
            <h1>Tommorrowland</h1>
          </div>
          <div img-title="navy" className="title">
            <small>2018-Today</small>
            <h1>Navy Pier</h1>
          </div>
          <div img-title="chic" className="title">
            <small>2019-today</small>
            <h1>MSi Chicage</h1>
          </div>
          <div img-title="phon" className="title">
            <small>2016</small>
            <h1>This was Louises Phone</h1>
          </div>
          <div img-title="kikk" className="title">
            <small>2012-Today</small>
            <h1>KIKK Festival 2018</h1>
          </div>
          <div img-title="ken" className="title">
            <small>2017</small>
            <h1>THe Kennedy Center</h1>
          </div>
          <div img-title="oper" className="title">
            <small>2016-ongoing</small>
            <h1>Royal Opera Of Wallonia</h1>
          </div>
        </div>
      </section>
      <section id='section-3'> <div className="left">
        <span text-sec3 >THIS IS HOW WE DO IT </span>
        <h2>We're Crafting</h2>
        <h2>Emotional</h2>
        <h2>Experiences aimed</h2>
        <h2>At improving</h2>
        <h2>Results</h2>
      </div>
        <div className="right">
          <p className='p-right'>Dogstudio is a design & technology firm working globally from our offices based in Belgium and Chicago.
            Our strong focus on producing high quality & emotional brandings, digital products and experiences became a signature.</p>
          <p className='p-right'>We’re passionate about moving people and solving problems for the likes of Microsoft, The Museum of Science And Industry Of Chicago, The Kennedy Center of Washington, Dragone, Quanta Magazine, and many more.</p>

        </div>
        <div className='lastbox'>
          <span className='lastword'>Chinago</span>
          <span className='lastword'>Amsterdam</span>
          <span className='lastword'>Paris</span>
          <div className="lastmain">
            <span className='finalword'>WE</span>
            <span className='finalword'>MAKE</span>
            <span className='finalword'>GOOD</span>
            <span className='finalword'>SHIT</span>
            <p className='x'>fb/ins/Dn/TW</p>
          </div>
        </div>
        <div className="endline"></div>
      </section>
    </main >
  )
}

export default App
