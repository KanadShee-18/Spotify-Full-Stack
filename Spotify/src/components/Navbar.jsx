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
                        className="w-8 p-2 cursor-pointer bg-slate-700 bg-opacity-55 hover:bg-opacity-85 rounded-2xl"
                        src={assets.arrow_left}
                        alt=""
                    />
                    <img
                        onClick={() => navigate(1)}
                        className="w-8 p-2 cursor-pointer bg-slate-700 bg-opacity-55 hover:bg-opacity-85 rounded-2xl"
                        src={assets.arrow_right}
                        alt=""
                    />
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-slate-700 bg-opacity-45 text-slate-200 text-[15px] px-4 py-2 rounded-lg cursor-pointer hover:bg-opacity-75 hover:text-white">
                        Explore Premium
                    </p>
                    <p className="bg-black text-slate-200 cursor-pointer py-2 px-3 hidden md:block rounded-lg text-[15px] hover:text-white hover:bg-slate-700 hover:bg-opacity-75">
                        Install App
                    </p>
                    <p className="flex items-center justify-center font-bold text-black bg-pink-500 rounded-full w-7 h-7 hover:bg-opacity-15 hover:text-pink-700">
                        K
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="px-4 py-1 font-semibold cursor-pointer text-slate-300 bg-slate-700 bg-opacity-45 rounded-2xl">
                    All
                </p>
                <p className="px-4 py-1 bg-black cursor-pointer hover:text-slate-300 hover:bg-slate-700 hover:bg-opacity-45 rounded-2xl">
                    Music
                </p>
                <p className="px-4 py-1 bg-black cursor-pointer hover:text-slate-300 hover:bg-slate-700 hover:bg-opacity-45 rounded-2xl">
                    Podcasts
                </p>
            </div>
        </>
    );
};

export default Navbar;
