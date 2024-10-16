import '../styles/conttec.css'

export const Conttec = ()=>{
    return(
        <section className="h-[88%] w-full overflow-y-scroll  text-center  flex flex-col items-center">
            <h3 className="text-white text-center w-auto  text-[1.2rem] [font-weigth:300]  [font-family:var(--Barlow)] uppercase [letter-spacing:.2rem] mt-4 mb-20"> <strong className="text-gray-400 mr-2">03</strong>Space Launch 101</h3>
            <figure className="h-[30%] w-full">
                <img className="h-full w-full" src="/assets/technology/image-launch-vehicle-landscape.jpg" alt="" />
            </figure>
            <section className="min-h-[525px] w-full px-6 flex flex-col items-center justify-evenly ">
                <figure className="flex flex-row items-center justify-center  gap-3">
                   <div className="h-12 w-12 rounded-full border-gray-400 border grid place-items-center text-white">1</div>
                   <div className="h-12 w-12 rounded-full border-gray-400 border grid place-items-center text-white">2</div>
                   <div className="h-12 w-12 rounded-full border-gray-400 border grid place-items-center text-white">3</div> 
                </figure>
                <div className="h-auto w-full text-white ">
                    <h6 className="text-xl  text-gray-400 uppercase mb-5 ">the terminology...</h6>
                    <h3 className="text-3xl text-white  uppercase mb-7">Launch vehicle</h3>
                    <p className="[font-family:var(--Barlow)] w-full h-auto text-[1rem] parrafo" >
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it's quite an awe-inspiring sight on the launch pad!
                    </p>
                </div>

            </section>
        
        
        </section>
    )


}