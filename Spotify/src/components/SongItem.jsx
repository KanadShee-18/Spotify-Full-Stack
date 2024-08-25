import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
    const { playWithId } = useContext(PlayerContext);

    return (
        <div
            onClick={() => playWithId(id)}
            className="min-w-[180px] lg:w-[220px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] ease-in-out hover:scale-95 duration-200"
        >
            <img
                className="object-cover w-full h-auto rounded"
                src={image}
                alt=""
            />
            <p className="mt-2 mb-1 overflow-hidden font-bold text-nowrap text-ellipsis">
                {name}
            </p>
            <p className="text-sm font-medium text-slate-400">{desc}</p>
        </div>
    );
};

export default SongItem;
