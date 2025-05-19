import { Link } from "react-router";
import { Socials, topBarRoutes } from "~/constants/layout/top-bar";
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { cn } from "~/lib/utils";

const MobileNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <div className={cn(
            "fixed inset-0 bg-[#030014] z-50 transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
        )}>
            <div className="flex flex-col h-screen bg-black">
                <div className="flex justify-end p-4">
                    <button
                        onClick={onClose}
                        className="text-white p-2 hover:text-yellow-500 transition-colors"
                    >
                        <RxCross2 size={24} />
                    </button>
                </div>
                <div className="flex flex-col items-center gap-8 py-8">
                    {topBarRoutes.map((route) => (
                        <Link
                            to={route.url}
                            key={route.label}
                            className="text-2xl text-white hover:text-yellow-500 transition-colors"
                            onClick={onClose}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center gap-6 mt-auto pb-8">
                    {Socials.map(({ url, label, icon: Icon }) => (
                        <Link
                            to={url}
                            target="_blank"
                            rel="noreferrer noopener"
                            key={label}
                            className="text-white hover:text-yellow-500 transition-colors"
                        >
                            <Icon className="h-6 w-6" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const DesktopNav = () => {
    const firstSection = topBarRoutes[0];

    return (
        <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
            <Link
                to={firstSection.url}
                className="flex items-center"
            >
                <div className="font-bold ml-[10px] text-gray-300">Edward</div>
            </Link>
            <div className="w-[500px] h-full flex-row items-center justify-between">
                <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                    {topBarRoutes.map((route) => (
                        <Link
                            to={route.url}
                            className="hover:text-yellow-500 transition"
                            key={route.label}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-row gap-5">
                {Socials.map(({ url, label, icon: Icon }) => (
                    <Link
                        to={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        key={label}
                    >
                        <Icon className="h-6 w-6 text-white" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

const TopBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-yellow-500/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
            <div className="w-full h-full flex items-center justify-between">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:hidden text-white p-2 hover:text-yellow-500 transition-colors"
                >
                    <RxHamburgerMenu size={24} />
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:block w-full">
                    <DesktopNav />
                </div>
            </div>

            {/* Mobile Navigation Sheet */}
            <MobileNav
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </nav>
    );
};

export default TopBar;