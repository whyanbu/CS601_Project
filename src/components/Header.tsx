import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    const navItemStyle = "block p-2 md:border-none hover:text-c2 bg-c6 md:bg-white text-center";

    return (
        <header className="sticky top-0 z-30 bg-white shadow-md">
            <nav className="flex justify-between items-center p-4 md:p-6 relative">
                
                {/* Name */}
                <div className="text-lg md:text-2xl font-semibold">
                    Raphael Lam | <span className="font-thin">Project Civil Engineer</span>
                </div>

                {/* Hamburger button (mobile only) */}
                <button
                    className="md:hidden p-2 rounded focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    <span className="text-2xl">{open ? "✕" : "☰"}</span>
                </button>

                {/* Navigation (single menu) */}
                <ul
                    className={`flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent
                                overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
                                ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"}
                    `}
                >
                    <li>
                        <Link to="/home" className={navItemStyle} onClick={handleLinkClick}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" className={navItemStyle} onClick={handleLinkClick}>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className={navItemStyle} onClick={handleLinkClick}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/game" className={navItemStyle} onClick={handleLinkClick}>
                            Game
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={navItemStyle} onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
