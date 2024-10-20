import '../styles/contenido.css'

export function Contenido ({ planet,description,distance,time,cambio  }){


    return(
        <div className="reactComponent h-auto w-full  flex flex-col items-center pt-6  pb-5 ">
            <nav className="w-full h-[2.5rem]  text-[1rem] uppercase flex  justify-around [letter-spacing:.1rem] 
            [font-family:var(--Barlow)]  md:justify-center md:gap-2">
                <a  onClick={cambio} className="h-full " >moon</a>
                <a  onClick={cambio} className="h-full ">mars</a>
                <a  onClick={cambio} className="h-full ">europa</a>
                <a  onClick={cambio} className="h-full ">titan</a>
            </nav>
            <div className='w-full h-[17.9rem] border-gray-500 border-b-[2.5px] flex flex-col  items-center 
            justify-around md:w-[62%]'>
                <h3 className='text-6xl uppercase md:text-7xl'>{planet}</h3>
                <p className='text-center text-xl [font-family:var(--Barlow)] font-light'>{description}</p>
            </div>
            <div className='text-center flex flex-col gap-4 py-4 md:w-[62%] md:flex-row '>
                <div className='flex-1'>
                    <h6 className='[font-family:var(--Barlow)] [word-spacing:.3rem] mb-3 uppercase'>AVG. Distance</h6>
                    <p className='text-4xl font-bold uppercase'>{distance}</p>
                </div>
                <div className='flex-1'>
                    <h6 className='[font-family:var(--Barlow)] [word-spacing:.3rem] mb-3 uppercase'>EST. Travel Time</h6>
                    <p className='text-4xl font-bold uppercase'>{time}</p>
                </div>

            </div>


        </div>
    )

}