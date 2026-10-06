import './index.css'

const Header = () => {
    return (
        <div className="container  bg-[#071636]">
            <nav className="flex justify-between items-center py-2 mr-2 ">
                
                <h2 className="text-white text-lg ml-4">
                   IndigoLearn
                </h2>

                <ul className="list-none flex gap-5 text-white">
                    <li>BUY COURSES </li>
                    <li>BUY BOOKS</li>
                    <li>PROGRAMS</li>
                    <li>FREE RESOURCES</li>
                </ul>

                <button className="bg-white px-7 py-2 rounded ">
                    Login / Sign Up
                </button>

            </nav>
        </div>
    )
}

export default Header