
const ChooseUs = () => {

    return (
        /*Main Div*/
        <div className="bg-blue-50 h-[70vh] w-full">

            <h1 className="border-b-4  font-bold  border-blue-900 w-[200px] mx-auto text-black text-center text-2xl pt-5">
                Why Choose Us? 
            </h1>

       {/*============================================================================*/}
            <div className="flex gap-5 justify-center mt-10">

               
                <div className="border-b-[4px] border-blue-900 bg-white rounded-lg h-[30vh] w-[22vw]">
                    <h1 className="text-blue-900 px-4 pt-10 font-bold text-center">
                        Expert Faculty
                    </h1>
                    <p className="text-black px-4 pt-1 ">
                        Our faculty are subject matter experts <br/>
                        with practical experience.
                    </p>
                </div>


                <div className="border-b-[4px] border-blue-900 bg-white rounded-lg h-[30vh] w-[22vw]">
                    <h1 className="text-blue-900 px-4 pt-10 font-bold text-center">
                       Complete Succes Package 
                    </h1>
                    <p className="text-black px-4 pt-1">
                        Video classes,live sessions,doubt<br/>
                           resolution,practice tests and <br/>
                                    webinars.
                    </p>
                </div>
                
                
                
                 <div className=" border-b-[4px] border-blue-900 bg-white rounded-lg h-[30vh]w-[22vw]">
                    <h1 className="text-blue-900 px-4 pt-10 font-bold text-center">
                        Placements
                    </h1>
                    <p className="text-black px-4 pt-1">
                       Resume workshops,mock interviews <br/>
                       and Placement drives to help you land <br/>
                       the dream job.
                    </p>
                </div>
            </div>


           { /* ===========================second div==================================  */}
            <div className="flex gap-5  mt-10 text-center">


                <div className=" border-t-[4px] border-blue-900 bg-white rounded-lg ml-15 h-[100px] w-[320px]">
                    <h1 className="mt-2 font-bold">Levels</h1>
                    <p className="mt-2 "> three (13 papers)</p>
                </div>


                <div className="border-t-[4px] border-blue-900 bg-white rounded-lg ml-15  h-[100px] w-[320px]">
                    <h1 className="mt-2 font-bold">Duration</h1>
                    <p className="mt-2"> 6-30 months</p>
                </div>



                <div className=" border-t-[4px] border-blue-900 bg-white rounded-lg ml-15 h-[100px] w-[320px]">
                    <h1 className="mt-2 font-bold">Exams</h1>
                    <p className="mt-2">  Quaterly (Online)</p>
                </div>


                <div className="border-t-[4px] border-blue-900 bg-white rounded-lg ml-15 h-[100px] w-[320px] mr-8">
                   <h1 className="mt-2 font-bold">Exemptions</h1>
                    <p>Upto 9 papers</p>
                </div>

            </div>

        </div>
    )
}

export default ChooseUs