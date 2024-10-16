import  {Contenido} from "./Contenido";
import { useState } from "react";

export default function Conteiner ({}){
    const [filtros, setFiltros] = useState([{
      "name": "Moon",
      "images": {
        "png": "/assets/destination/image-moon.png",
        "webp": "/assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    }]);  


    const  destinations  = [
    {
      "name": "Moon",
      "images": {
        "png": "/assets/destination/image-moon.png",
        "webp": "/assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "/assets/destination/image-mars.png",
        "webp": "/assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "/assets/destination/image-europa.png",
        "webp": "/assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "/assets/destination/image-titan.png",
        "webp": "/assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
    ]
    function cambios (e){
        let selector = e.target.innerText
        const filtro  = destinations.filter((destino)=> destino.name.toLowerCase() ===  selector.toLowerCase());
        setFiltros(filtro)
    }
    return(
        
    <section className="h-[88%] w-full text-white overflow-y-scroll px-6 pb-5 ">
        <div className="h-1/2 flex flex-col items-center justify-around">
            <h1 className="text-white text-center w-auto  text-xl [font-weigth:300]  [font-family:var(--Barlow)] uppercase [letter-spacing:.2rem]"> <strong className="text-gray-400">01</strong> Pick your destination</h1>
            <figure className="w-48">
                <img src={filtros[0].images.png} alt=""/>
            </figure>
        </div>
        <Contenido
          planet={filtros[0].name}
          description={filtros[0].description}
          distance={filtros[0].distance}
          time={filtros[0].travel}
          cambio={cambios}
        >



        </Contenido>

    </section>

    );
}