const ChooseUs = () => {

    return (

        <div className="bg-blue-50 min-h-[70vh] w-full px-5 md:px-10 pb-10">

            <h1 className="border-b-4 font-bold border-blue-900 w-[200px] mx-auto text-black text-center text-2xl pt-5">

                Why Choose Us?

            </h1>


            {/* First three cards */}

            <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">

               
                <div className="border-b-[4px] border-blue-900 bg-white rounded-lg min-h-[180px] w-full md:w-[22vw]">

                    <h1 className="text-blue-900 px-4 pt-10 font-bold text-center">

                        Expert Faculty

                    </h1>

                    <p className="text-black px-4 pt-1 text-center">

                        Our faculty are subject matter experts
                        <br className="hidden md:block"/>

                        with practical experience.

                    </p>

                </div>


                <div className="border-b-[4px] border-blue-900 bg-white rounded-lg min-h-[180px] w-full md:w-[22vw]">

                    <h1 className="text-blue-900 px-4 pt-10 font-bold text-center">

                        Complete Succes Package

                    </h1>

                    <p className="text-black px-4 pt-1 text-center">

                        Video classes,live sessions,doubt
                        <br className="hidden md:block"/>

                        resolution,practice tests and
                        <br className="hidden md:block"/>

                        webinars.

                    </p>

                </div>
                
                
                
                <div className="border-b-[4px] border-blue-900 bg-white rounded-lg min-h-[180px] w-full md:w-[22vw]">

                    <h1 className="text-blue-900 px-4 pt-10 font-bold text-center">

                        Placements

                    </h1>

                    <p className="text-black px-4 pt-1 text-center">

                        Resume workshops,mock interviews
                        <br className="hidden md:block"/>

                        and Placement drives to help you land
                        <br className="hidden md:block"/>

                        the dream job.

                    </p>

                </div>

            </div>


            {/* ===========================second div================================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-center">


                <div className="border-t-[4px] border-blue-900 bg-white rounded-lg h-[100px] w-full">

                    <h1 className="mt-2 font-bold">
                        Levels
                    </h1>

                    <p className="mt-2">
                        three (13 papers)
                    </p>

                </div>


                <div className="border-t-[4px] border-blue-900 bg-white rounded-lg h-[100px] w-full">

                    <h1 className="mt-2 font-bold">
                        Duration
                    </h1>

                    <p className="mt-2">
                        6-30 months
                    </p>

                </div>


                <div className="border-t-[4px] border-blue-900 bg-white rounded-lg h-[100px] w-full">

                    <h1 className="mt-2 font-bold">
                        Exams
                    </h1>

                    <p className="mt-2">
                        Quaterly (Online)
                    </p>

                </div>


                <div className="border-t-[4px] border-blue-900 bg-white rounded-lg h-[100px] w-full">

                    <h1 className="mt-2 font-bold">
                        Exemptions
                    </h1>

                    <p className="mt-2">
                        Upto 9 papers
                    </p>

                </div>

            </div>

        </div>
    )
}

export default ChooseUs;