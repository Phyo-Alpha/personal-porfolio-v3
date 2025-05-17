import { Link } from "react-router";
import { Socials, topBarRoutes } from "~/constants/layout/top-bar";

const TopBar = () => {

    const firstSection = topBarRoutes[0];

    return (
        <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-yellow-500/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
                <Link
                    to={firstSection.url}
                    className="flex items-center"
                >

                    <div className="hidden md:flex md:font-bold ml-[10px] text-gray-300">Edward</div>
                </Link>
                <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between ">
                    <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        {topBarRoutes.map((route) => (
                            <Link to={route.url}
                                className="hover:text-yellow-500 transition"
                                key={route.label}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex flex-row gap-5">
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
        </nav>
    )
}

export default TopBar;