import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DisplayHome = () => {
    const { songsData, albumsData } = useContext(PlayerContext);

    const slideLeft = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft -= 250;
    };
    const slideRight = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft += 250;
    };

    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 text-2xl font-bold">Featured Charts</h1>
                <div className="relative">
                    <div className="absolute flex items-center gap-2 justify-end -top-14 right-0 z-[5]">
                        <button
                            onClick={slideLeft}
                            className="p-2 rounded-full bg-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-600"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={slideRight}
                            className="p-2 rounded-full bg-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-600"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                    <div
                        id="slider"
                        className="flex w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide"
                    >
                        {albumsData.map((item, index) => (
                            <AlbumItem
                                key={index}
                                name={item.name}
                                desc={item.desc}
                                id={item._id}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 text-2xl font-bold">
                    Today's Biggest Hits
                </h1>
                <div className="relative">
                    <div className="absolute flex items-center gap-2 justify-end -top-14 right-0 z-[5]">
                        <button
                            onClick={slideLeft}
                            className="p-2 rounded-full bg-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-600"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={slideRight}
                            className="p-2 rounded-full bg-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-600"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                    <div
                        id="slider"
                        className="flex w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide"
                    >
                        {songsData.map((item, index) => (
                            <SongItem
                                key={index}
                                name={item.name}
                                desc={item.desc}
                                id={item._id}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DisplayHome;
