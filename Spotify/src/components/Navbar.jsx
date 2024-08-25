import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const url = "https://spotify-backend-r71h.onrender.com";

    return (
        <>
            <div className="flex items-center justify-between w-full font-semibold">
                <div className="flex items-center gap-2">
                    <img
                        onClick={() => navigate(-1)}
                        className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
                        src={assets.arrow_left}
                        alt=""
                    />
                    <img
                        onClick={() => navigate(1)}
                        className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
                        src={assets.arrow_right}
                        alt=""
                    />
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-slate-700 bg-opacity-45 text-slate-200 text-[15px] px-4 py-2 rounded-lg hidden md:block cursor-pointer hover:bg-opacity-75 hover:text-white">
                        Explore Premium
                    </p>
                    <p className="bg-black cursor-pointer py-1 px-3 rounded-2xl text-[15px] hover:bg-white hover:text-black">
                        Install App
                    </p>
                    <p className="flex items-center justify-center text-black bg-purple-500 rounded-full w-7 h-7">
                        K
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="px-4 py-1 text-black bg-white cursor-pointer rounded-2xl">
                    All
                </p>
                <p className="px-4 py-1 bg-black cursor-pointer rounded-2xl">
                    Music
                </p>
                <p className="px-4 py-1 bg-black cursor-pointer rounded-2xl">
                    Podcasts
                </p>
            </div>
        </>
    );
};

export default Navbar;
