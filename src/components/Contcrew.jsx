import '../styles/contcrew.css'
import { useState } from 'react';
  const  crew =[
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "/assets/crew/image-douglas-hurley.png",
        "webp": "/assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "/assets/crew/image-mark-shuttleworth.png",
        "webp": "/assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "/assets/crew/image-victor-glover.png",
        "webp": "/assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "/assets/crew/image-anousheh-ansari.png",
        "webp": "/assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]

  
export function Contcrew () {
  const [filters,setFilter] = useState(crew[0])

  const change = (e)=>{
    const fader = e.target.parentElement;
    const children  = Array.from(fader.children);
    const index = children.indexOf(e.target);

    children.forEach(crw =>{
      crw.classList.remove('btonActive')
    })
    crew.filter( crw =>{
      const subIndex =  crew.indexOf(crw)
      if(subIndex === index){
        setFilter(crw)
        e.target.classList.add('btonActive')
      }
    })
  }

  return (
   <section className="h-[88%] w-full  overflow-y-scroll px-6 text-center  flex flex-col items-center z-0  gap-12">
        <div className='min-h-[55%] w-full flex flex-col items-center justify-between'>
            <h3 className="text-white text-center w-auto  text-xl [font-weigth:300]  [font-family:var(--Barlow)] uppercase [letter-spacing:.2rem]"> <strong className="text-gray-400 mr-2">02</strong>Meet your crew</h3>
            <h4 className='text-2xl text-gray-400 uppercase'>{filters.role}</h4>
            <h2 className='text-3xl text-white uppercase font-ligth'>{filters.name}</h2>
            <p className='[font-family:var(--Barlow)] text-[1.2rem]'>{filters.bio}</p>
            <figure className="figuritas">
                <div onClick={change} className='btonActive' ></div>
                <div onClick={change}></div>
                <div onClick={change}></div>
                <div onClick={change}></div>
            </figure>
        </div>
        <div  className='h-[600px] w-full  figurota '>
            <img src={filters.images.webp} className='' alt="" />
        </div>
   </section>
  );
}