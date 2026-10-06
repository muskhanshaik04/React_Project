import { useState } from "react";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#102552] text-white">

           
            <nav className="flex justify-between items-center px-4 md:px-10 py-4">

               
                <h1 className="text-2xl md:text-3xl font-bold">
                    IndigoLearn
                </h1>


                
                <ul className="hidden md:flex gap-8 list-none">
                    <li>BUY COURSES</li>
                    <li>BUY BOOKS</li>
                    <li>PROGRAMS</li>
                    <li>FREE RESOURCES</li>
                </ul>


                <button className="hidden md:block bg-white px-7 py-2 rounded text-black">
                    Login / Sign Up
                </button>


                <button
                    className="md:hidden text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>

            </nav>


          
            {isMenuOpen && (
                <div className="md:hidden px-5 pb-5">

                    <ul className="list-none flex flex-col gap-4">

                        <li>BUY COURSES</li>

                        <li>BUY BOOKS</li>

                        <li>PROGRAMS</li>

                        <li>FREE RESOURCES</li>

                    </ul>


                    <button className="bg-white px-7 py-2 rounded text-black mt-4">
                        Login / Sign Up
                    </button>

                </div>
            )}

        </header>
    );
};

export default Header;