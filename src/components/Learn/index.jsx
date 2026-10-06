const Learn = () => {

    return (

        <div className="min-h-[80vh] w-full bg-blue-100 text-center text-2xl px-5 md:px-10 pb-10">

            <h1 className="text-black pt-8 font-bold">

                What will you Learn in ACCA?

            </h1>


            <hr className="w-[100px] border-blue-900 border-b-2 mx-auto mt-2" />


            {/* Three boxes side by side */}

            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">


                <div className="bg-white w-full max-w-[350px] h-[360px] rounded-lg flex flex-col">

                    <h1 className="bg-[#1c2b4d] font-bold text-white text-lg py-3 text-center">

                        Knowledge Level

                    </h1>

                    <ul className="list-disc text-left px-8 py-4">

                        <li className="text-sm">
                            Business and Technology (BT)
                        </li>

                        <li className="text-sm">
                            Management Accounting(MA)
                        </li>

                        <li className="text-sm">
                            Financial Accounting(FA)
                        </li>

                    </ul>

                    <h1 className="mt-auto border-t border-black bg-[#1c2b4d] text-white text-lg py-3 text-center">

                        6 papers

                    </h1>

                </div>


                <div className="bg-white w-full max-w-[350px] h-[360px] rounded-lg flex flex-col">

                    <h1 className="bg-[#1c2b4d] text-white text-lg py-3 text-center font-bold">

                        Skill Level

                    </h1>

                    <ul className="list-disc text-left px-8 py-4">

                        <li className="text-sm">
                            Corporate and Business Law (LW)
                        </li>

                        <li className="text-sm">
                            Performance Management (PM)
                        </li>

                        <li className="text-sm">
                            Taxation(TX)
                        </li>

                        <li className="text-sm">
                            Financial Reporting(FR)
                        </li>

                        <li className="text-sm">
                            Audit and Assurance (AA)
                        </li>

                        <li className="text-sm">
                            Financial Management(FM)
                        </li>

                    </ul>

                    <h1 className="mt-auto border-t border-black bg-[#1c2b4d] text-white text-lg py-3 text-center">

                        6 papers

                    </h1>

                </div>


                <div className="bg-white w-full max-w-[350px] h-[360px] rounded-lg flex flex-col">

                    <h1 className="bg-[#1c2b4d] text-white py-3 text-center font-bold">

                        Professional Level

                    </h1>

                    <h1 className="text-black font-bold text-left ml-4">

                        Compulsory

                    </h1>

                    <ul className="list-disc text-left px-8 py-4">

                        <li className="text-sm">
                            SBL-Strategic Business Leader
                        </li>

                        <li className="text-sm">
                            SBR-Strategic Business Reporting
                        </li>

                    </ul>


                    <h1 className="text-black text-left font-bold ml-4">

                        Two out of the following

                    </h1>

                    <ul className="list-disc text-left px-8 py-4">

                        <li className="text-sm">
                            Advanced Financial Management (AFM)
                        </li>

                        <li className="text-sm">
                            Advanced Performance Management(APM)
                        </li>

                        <li className="text-sm">
                            Advanced Taxation(ATX)
                        </li>

                        <li className="text-sm">
                            Advanced Audit and Assurance (AAA)
                        </li>

                    </ul>


                    <h1 className="mt-auto border-t border-black bg-[#1c2b4d] text-white text-lg py-3 text-center">

                        6 papers

                    </h1>

                </div>

            </div>

        </div>
    )
}

export default Learn;