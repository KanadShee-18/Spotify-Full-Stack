import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/album/${id}`)}
            className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
        >
            <img className="rounded" src={image} alt="" />
            <p className="mt-2 mb-1 overflow-hidden font-semibold text-blue-200 text-nowrap text-ellipsis">
                {name}
            </p>
            <p className="mb-3 text-sm font-medium text-slate-400">{desc}</p>
        </div>
    );
};

export default AlbumItem;
