import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-gradient-to-br from-black to-slate-900 h-[15%] rounded flex flex-col justify-around">
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 pl-8 cursor-pointer"
                >
                    <img className="w-6" src={assets.home_icon} alt="" />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.search_icon} alt="" />
                    <p className="font-bold">Search</p>
                </div>
            </div>
            <div className="bg-gradient-to-bl from-slate-900 to-black h-[85%] rounded">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <img className="w-8" src={assets.stack_icon} alt="" />
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-5" src={assets.arrow_icon} alt="" />
                        <img className="w-5" src={assets.plus_icon} alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 p-4 pl-4 m-2 font-semibold rounded bg-gradient-to-b from-zinc-900 to-slate-800">
                    <h1>Create Your first playlist</h1>
                    <p className="font-light text-slate-300">
                        it's easy we'll help you
                    </p>
                    <button className="px-4 py-2 bg-slate-500 bg-opacity-60 text-[15px] text-white rounded-lg mt-4 hover:bg-opacity-70">
                        <a
                            href="https://spotify-admin-52ud.onrender.com/"
                            target="_blank"
                        >
                            Create Playlist
                        </a>
                    </button>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 p-4 pl-4 m-2 mt-4 font-semibold rounded bg-gradient-to-b from-zinc-900 to-slate-800">
                    <h1>Let's find some podcast to follow</h1>
                    <p className="font-light text-slate-300">
                        we'll keep you update on new episodes
                    </p>
                    <button className="px-4 py-2 bg-slate-500 bg-opacity-60 text-[15px] text-white rounded-lg mt-4 hover:bg-opacity-80">
                        Browse Podcast
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
