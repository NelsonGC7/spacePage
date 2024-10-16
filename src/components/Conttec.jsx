import {useState} from 'react'
import '../styles/conttec.css'
const technology = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "/assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "/assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "/assets/technology/image-spaceport-portrait.jpg",
        "landscape": "/assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "/assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "/assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
export const Conttec = ()=>{
  const [filters,setFilter] = useState(technology[0])

  const cambios = (e)=>{
    const fader = e.target.parentElement;
    const childrens  = Array.from(fader.children);
    const index = childrens.indexOf(e.target);

    childrens.forEach(crw =>{
      crw.classList.remove('btonActive')
    })
    technology.filter( crw =>{
      const subIndex =  technology.indexOf(crw)
      if(subIndex === index){
        setFilter(crw)
        e.target.classList.add('btonActive')
      }
    })
  }




    return(
        <section className="h-[88%] w-full overflow-y-scroll  text-center  flex flex-col items-center pb-5">
            <h3 className="text-white text-center w-auto  text-[1.2rem] [font-weigth:300]  [font-family:var(--Barlow)] uppercase [letter-spacing:.2rem] mt-4 mb-20"> <strong className="text-gray-400 mr-2">03</strong>Space Launch 101</h3>
            <figure className="min-h-[37%] w-full">
                <img className="h-full w-full" src={filters.images.landscape} alt="" />
            </figure>
            <section className="min-h-[525px] w-full px-6 flex flex-col items-center justify-evenly ">
                <figure className="flex flex-row items-center justify-center  gap-4 text-white text-xl">
                   <div className="h-12 w-12 rounded-full border-gray-400 border grid place-items-center  hover:border-white transition duration-300 btonActive" onClick={cambios} >1</div>
                   <div className="h-12 w-12 rounded-full border-gray-400 border grid place-items-center hover:border-white transition duration-300 " onClick={cambios}>2</div>
                   <div className="h-12 w-12 rounded-full border-gray-400 border grid place-items-center hover:border-white transition duration-300" onClick={cambios}>3</div> 
                </figure>
                <div className="h-auto w-full text-white ">
                    <h6 className="text-xl  text-gray-400 uppercase mb-5 ">the terminology...</h6>
                    <h3 className="text-3xl text-white  uppercase mb-7">{filters.name}</h3>
                    <p className="[font-family:var(--Barlow)] w-full h-auto text-[1rem] parrafo" >
                      {filters.description}
                    </p>
                </div>

            </section>
        </section>
    )


}