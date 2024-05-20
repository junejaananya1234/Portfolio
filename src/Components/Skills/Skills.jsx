import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () =>{
    return(
        
        // <section>
        //     <div className=" ">
        //     <h1 className="text-white tracking-wider text-3xl  font-semibold">Skills</h1>
        // </div>
         
        // </section>
        <>
       <div className="flex justify-center">
            <div className="h-[40%] w-[50%] flex flex-col gap-4 ">
            <section>
                <h1 className="text-white tracking-wider text-3xl  font-semibold mt-48">Skills</h1>
            </section>
            <section>
                <h2 className="text-white text-left">JAVA</h2>
                <ProgressBar completed="90"></ProgressBar>
            </section>
            <section>
                <h2 className="text-white text-left">HTML</h2>
                <ProgressBar completed="100"></ProgressBar>
            </section>
            <section>
                <h2 className="text-white text-left">CSS</h2>
                <ProgressBar completed="85"></ProgressBar>
            </section>
            <section>
                <h2 className="text-white text-left">Tailwind(A CSS Framework)</h2>
                <ProgressBar completed="90"></ProgressBar>
            </section>
            <section>
                <h2 className="text-white text-left">JavaScript</h2>
                <ProgressBar completed="80"></ProgressBar>
            </section>
            <section>
                <h2 className="text-white text-left">REACT</h2>
                <ProgressBar completed="50"></ProgressBar>
            </section>
            <section>
                <h2 className="text-white text-left">Git & Github</h2>
                <ProgressBar completed="85"></ProgressBar>
            </section>
            <section>
                <h2 className="text-white text-left">OOPS</h2>
                <ProgressBar completed="95"></ProgressBar>2w
            </section>
            

        </div>


            </div>
        </>
    )
}
export default Skills;