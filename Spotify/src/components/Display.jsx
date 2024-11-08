// import React, { useEffect, useRef } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import DisplayHome from "./DisplayHome";
// import DisplayAlbum from "./DisplayAlbum";
// import { useContext } from "react";
// import { PlayerContext } from "../context/PlayerContext";

// const Display = () => {
//     const { albumsData } = useContext(PlayerContext);

//     const displayRef = useRef();
//     const location = useLocation();
//     const isAlbum = location.pathname.includes("album");
//     const albumId = isAlbum ? location.pathname.split("/").pop() : "";
//     const album = isAlbum
//         ? albumsData.find((album) => album._id == albumId)
//         : null;
//     const bgColor = album ? album.bgColour : "#121212";

//     useEffect(() => {
//         if (isAlbum && album) {
//             displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
//         } else {
//             displayRef.current.style.background = `radial-gradient(circle, rgba(2,16,34,1) 0%, rgba(0,0,0,1) 100%)`;
//         }
//     }, [isAlbum, bgColor, album]);

//     return (
//         <div
//             ref={displayRef}
//             className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
//         >
//             {albumsData.length > 0 ? (
//                 <Routes>
//                     <Route path="/" element={<DisplayHome />} />
//                     <Route
//                         path="/album/:id"
//                         element={<DisplayAlbum album={album} />}
//                     />
//                 </Routes>
//             ) : null}
//         </div>
//     );
// };

// export default Display;

import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Display = () => {
  const { albumsData } = useContext(PlayerContext);

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  const album = isAlbum
    ? albumsData.find((album) => album._id === albumId) // Use === for strict comparison
    : null;

  // Set a default background color if no album is found
  const bgColor = album ? album.bgColour : "#121212";

  useEffect(() => {
    if (isAlbum && album) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `radial-gradient(circle, rgba(2,16,34,1) 0%, rgba(0,0,0,1) 100%)`;
    }
  }, [isAlbum, bgColor, album, albumsData]); // Added albumsData to dependencies

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      {albumsData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route
            path="/album/:id"
            element={<DisplayAlbum album={album} />} // Ensure DisplayAlbum handles null
          />
        </Routes>
      ) : (
        <div>Loading albums...</div> // Optional loading state
      )}
    </div>
  );
};

export default Display;
