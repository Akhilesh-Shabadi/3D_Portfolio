import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'>
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
                <p className='bg-linear-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent'>AS</p>
            </NavLink>
            <nav className='hidden sm:flex text-lg gap-7 font-medium'>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
                    Contact
                </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='sm:hidden flex w-10 h-10 object-contain items-center justify-center focus:outline-none z-20'
            >
                {isOpen ? (
                    // Close Icon (X)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger Icon
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu */}
            <nav
                className={`absolute top-0 right-13 mx-4 my-2 min-w-[250px] z-10 rounded-xl bg-white/80 backdrop-blur-md p-4 flex justify-between items-center shadow-xl sm:hidden border border-white/20 transition-all duration-300 ease-in-out origin-right ${isOpen
                    ? 'scale-x-100 opacity-100 pointer-events-auto'
                    : 'scale-x-0 opacity-0 pointer-events-none'
                    }`}
            >
                <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "text-black font-medium"}>
                    About
                </NavLink>
                <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "text-black font-medium"}>
                    Projects
                </NavLink>
                <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "text-black font-medium"}>
                    Contact
                </NavLink>
            </nav>


        </header>
    )
}

export default NavBar
