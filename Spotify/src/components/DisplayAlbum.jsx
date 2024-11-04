// import React, { useContext } from "react";
// import Navbar from "./Navbar";
// import { useParams } from "react-router-dom";
// import { assets } from "../assets/frontend-assets/assets";
// import { PlayerContext } from "../context/PlayerContext";
// import { useState } from "react";
// import { useEffect } from "react";

// const DisplayAlbum = ({ album }) => {
//   const { id } = useParams();
//   const [albumData, setAlbumData] = useState({});
//   const { playWithId, albumsData, songsData } = useContext(PlayerContext);

//   useEffect(() => {
//     albumsData.map((item) => {
//       if (item._id === id) {
//         setAlbumData(item);
//       }
//     });
//   }, []);

//   return albumData ? (
//     <>
//       <Navbar />
//       <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">
//         <img className="w-48 rounded" src={albumData.image} alt="" />
//         <div className="flex flex-col">
//           <p>Playlist</p>
//           <h2 className="mb-4 text-5xl font-bold md:text-7xl">
//             {albumData.name}
//           </h2>
//           <h4>{albumData.desc}</h4>
//           <p className="mt-1">
//             <img
//               className="inline-block w-5"
//               src={assets.spotify_logo}
//               alt=""
//             />
//             <b className="mx-1">Spotify</b>. 1,23,564 likes .{" "}
//             <b className="mx-1">50 songs,</b>
//             about 2 hr 30 mins
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
//         <p>
//           <b className="mr-4">#</b>Title
//         </p>
//         <p>Album</p>
//         <p className="hidden sm:block">Date Added</p>
//         <img className="w-4 m-auto" src={assets.clock_icon} alt="" />
//       </div>
//       <hr />
//       {songsData
//         .filter((item) => item.album === album.name)
//         .map((item, index) => (
//           <div
//             onClick={() => playWithId(item._id)}
//             key={index}
//             className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
//           >
//             <p className="text-white">
//               <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
//               <img className="inline w-10 mr-5" src={item.image} alt="" />
//               {item.name}
//             </p>
//             <p className="text-[15px]">{albumData.name}</p>
//             <p className="text-[15px] hidden md:block">5 days ago</p>
//             <p className="text-[15px] text-center">{item.duration}</p>
//           </div>
//         ))}
//     </>
//   ) : null;
// };

// export default DisplayAlbum;

// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import { useParams } from "react-router-dom";
// import { PlayerContext } from "../context/PlayerContext";

// const DisplayAlbum = ({ album }) => {
//   const { id } = useParams();
//   const [albumData, setAlbumData] = useState(null);
//   const { playWithId } = useContext(PlayerContext);

//   useEffect(() => {
//     if (album) {
//       setAlbumData(album);
//       console.log("Album Data Songs:", album.songs);
//     }
//   }, [album]);

//   return albumData ? (
//     <>
//       <Navbar />
//       <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">
//         <img className="w-48 rounded" src={albumData.image} alt="" />
//         <div className="flex flex-col">
//           <p>Playlist</p>
//           <h2 className="mb-4 text-5xl font-bold md:text-7xl">
//             {albumData.name}
//           </h2>
//           <h4>{albumData.desc}</h4>
//           <p className="mt-1">Spotify-like details here...</p>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
//         <p>
//           <b className="mr-4">#</b>Title
//         </p>
//         <p>Album</p>
//         <p className="hidden sm:block">Date Added</p>
//       </div>
//       <hr />
//       {albumData.songs && albumData.songs.length > 0 ? (
//         albumData.songs.map((song, index) => (
//           <div
//             onClick={() => playWithId(song._id)}
//             key={index}
//             className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
//           >
//             <p className="text-white">
//               <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
//               <img className="inline w-10 mr-5" src={song.image} alt="" />
//               {song.name}
//             </p>
//             <p>{albumData.name}</p>
//             <p className="hidden md:block">5 days ago</p>
//           </div>
//         ))
//       ) : (
//         <p className="text-center mt-4 text-[#a7a7a7]">No songs available</p>
//       )}
//     </>
//   ) : (
//     <p>Loading...</p> // Display a loading message or spinner while albumData is null
//   );
// };

// export default DisplayAlbum;

import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = ({ album }) => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState(null);
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  // Populate albumData when album is passed in
  useEffect(() => {
    if (album) {
      setAlbumData(album);
      console.log("Album Data Songs:", album.songs); // Check the songs
    } else {
      // Find the album in albumsData by ID if album is not passed
      const foundAlbum = albumsData.find((item) => item._id === id);
      if (foundAlbum) {
        setAlbumData(foundAlbum);
        console.log("Found Album Songs:", foundAlbum.songs);
      }
    }
  }, [album, albumsData, id]);

  return albumData ? (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="mb-4 text-5xl font-bold md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">Spotify-like details here...</p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
      </div>
      <hr />
      {songsData.length > 0 ? (
        songsData
          .filter((song) => song.album === albumData.name) // Filter songs based on album name
          .map((song, index) => (
            <div
              onClick={() => playWithId(song._id)}
              key={index}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            >
              <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img className="inline w-10 mr-5" src={song.image} alt="" />
                {song.name}
              </p>
              <p>{albumData.name}</p>
              <p className="hidden md:block">5 days ago</p>
            </div>
          ))
      ) : (
        <p className="text-center mt-4 text-[#a7a7a7]">No songs available</p>
      )}
    </>
  ) : (
    <p>Loading...</p> // Display loading message while waiting for albumData
  );
};

export default DisplayAlbum;
