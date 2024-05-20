import Profile from '../../Images/Profile.jpeg'
function Hero(){
    return(
        <>
        <div>
            <main>
                <section>
                    <div className="container m-auto px-4 py-10 flex gap-32 justify-center  mt-14">
                        <div>
                            <h1 className='text-white font-bold text-4xl mt-1 text-left gradiant-text'>Hello, I'm Ananya,</h1>
                            <h1 className=' font-bold text-4xl mt-1 text-white'>frontend developer</h1>
                            <p className=' text-sm mt-4 text-left text-gray-400'>An aspiring individual eager to dive</p>
                            <p className='text-gray-400 text-sm text-left'> into the vast and thrilling world of technology.</p>
                            <section className='flex mt-4 '>
                                <button className='text-white font-bold py-2 px-5 text-[12px] bg-gradient-to-r from-purple-700 from-10% via-sky-500 via-30% to-indigo-500 to-90% ... rounded-full shadow-inner '>
                                    Download CV
                                </button>
                            </section>
                        </div>
                        <div>
                        <img src={Profile} className='h-40 w-40 rounded-full  border-2 border-indigo-950 shadow-2xl'/>
                        </div>
                       
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}

export default Hero;