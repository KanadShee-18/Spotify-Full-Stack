// import { createContext, useEffect, useRef, useState } from "react";
// import axios from "axios";

// export const PlayerContext = createContext();

// const PlayerContextProvider = (props) => {
//   const audioRef = useRef();
//   const seekBg = useRef();
//   const seekBar = useRef();

//   const url = "https://spotify-backend-r71h.onrender.com";

//   const [songsData, setSongsData] = useState([]);
//   const [albumsData, setAlbumsData] = useState([]);
//   const [track, setTrack] = useState(songsData[0]);
//   const [playStatus, setplayStatus] = useState(false);
//   const [time, setTime] = useState({
//     currentTime: {
//       second: 0,
//       minute: 0,
//     },
//     totalTime: {
//       second: 0,
//       minute: 0,
//     },
//   });

//   const play = () => {
//     audioRef.current.play();
//     setplayStatus(true);
//   };

//   const pause = () => {
//     audioRef.current.pause();
//     setplayStatus(false);
//   };

//   const playWithId = async (id) => {
//     await songsData.map((item) => {
//       if (id === item._id) {
//         setTrack(item);
//       }
//     });
//     await audioRef.current.play();
//     setplayStatus(true);
//   };

//   const previous = async () => {
//     songsData.map(async (item, index) => {
//       if (track._id === item._id && index > 0) {
//         await setTrack(songsData[index - 1]);
//         await audioRef.current.play();
//         setplayStatus(true);
//       }
//     });
//   };

//   const next = async () => {
//     songsData.map(async (item, index) => {
//       if (track._id === item._id && index < songsData.length) {
//         await setTrack(songsData[index + 1]);
//         await audioRef.current.play();
//         setplayStatus(true);
//       }
//     });
//   };

//   const seekSong = async (e) => {
//     audioRef.current.currentTime =
//       (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
//       audioRef.current.duration;
//   };

//   const getSongsData = async () => {
//     try {
//       const response = await axios.get(`${url}/api/song/list`);
//       setSongsData(response.data.songs);
//       setTrack(response.data.songs[0]);
//     } catch (error) {}
//   };

//   const getAlbumsData = async () => {
//     try {
//       const response = await axios.get(`${url}/api/album/list`);
//       setAlbumsData(response.data.albums);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       audioRef.current.ontimeupdate = () => {
//         if (seekBar.current) {
//           seekBar.current.style.width =
//             Math.floor(
//               (audioRef.current.currentTime / audioRef.current.duration) * 100
//             ) + "%";
//           setTime({
//             currentTime: {
//               second: Math.floor(audioRef.current.currentTime % 60),
//               minute: Math.floor(audioRef.current.currentTime / 60),
//             },
//             totalTime: {
//               second: Math.floor(audioRef.current.duration % 60),
//               minute: Math.floor(audioRef.current.duration / 60),
//             },
//           });
//         }
//       };
//     });
//   }, [audioRef]);

//   useEffect(() => {
//     getSongsData();
//     getAlbumsData();
//   }, []);

//   const contextValue = {
//     audioRef,
//     seekBar,
//     seekBg,
//     track,
//     setTrack,
//     playStatus,
//     setplayStatus,
//     time,
//     setTime,
//     play,
//     pause,
//     playWithId,
//     previous,
//     next,
//     seekSong,
//     songsData,
//     albumsData,
//   };

//   return (
//     <PlayerContext.Provider value={contextValue}>
//       {props.children}
//     </PlayerContext.Provider>
//   );
// };

// export default PlayerContextProvider;

import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const url = "https://spotify-backend-r71h.onrender.com";

  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [track, setTrack] = useState(null); // Initially set to null
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    console.log("Song coming in play with id is: ", id);

    const selectedTrack = songsData.find((item) => item._id === id);
    console.log("Selected track: ", selectedTrack);

    if (selectedTrack) {
      setTrack(selectedTrack);
      audioRef.current.src = selectedTrack.file; // Set the audio source to the selected track file
      console.log("Audio source set to:", audioRef.current.src);

      await audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error); // Catch any errors while playing
      });

      console.log("Audio after playing.");
      setPlayStatus(true);
    }
  };

  // const previous = async () => {
  //   const currentIndex = songsData.findIndex((item) => item._id === track?._id);
  //   if (currentIndex > 0) {
  //     setTrack(songsData[currentIndex - 1]);
  //     await audioRef.current.play();
  //     setPlayStatus(true);
  //   }
  // };

  // const next = async () => {
  //   const currentIndex = songsData.findIndex((item) => item._id === track?._id);
  //   if (currentIndex < songsData.length - 1) {
  //     setTrack(songsData[currentIndex + 1]);
  //     await audioRef.current.play();
  //     setPlayStatus(true);
  //   }
  // };

  const previous = async () => {
    const currentIndex = songsData.findIndex((item) => item._id === track?._id);
    if (currentIndex > 0) {
      const newTrack = songsData[currentIndex - 1];
      setTrack(newTrack);
      audioRef.current.src = newTrack.file; // Set the audio source to the new track file

      try {
        await audioRef.current.play();
        setPlayStatus(true);
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  const next = async () => {
    const currentIndex = songsData.findIndex((item) => item._id === track?._id);
    if (currentIndex < songsData.length - 1) {
      const newTrack = songsData[currentIndex + 1];
      setTrack(newTrack);
      audioRef.current.src = newTrack.file; // Set the audio source to the new track file

      try {
        await audioRef.current.play();
        setPlayStatus(true);
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      console.log("Songsdata response: ", response);

      setSongsData(response.data.songs);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  const getAlbumsData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      console.log("Albumsdata response: ", response);

      setAlbumsData(response.data.albums);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        if (seekBar.current) {
          seekBar.current.style.width =
            Math.floor(
              (audioRef.current.currentTime / audioRef.current.duration) * 100
            ) + "%";
          setTime({
            currentTime: {
              second: Math.floor(audioRef.current.currentTime % 60),
              minute: Math.floor(audioRef.current.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(audioRef.current.duration % 60),
              minute: Math.floor(audioRef.current.duration / 60),
            },
          });
        }
      };
    }
  }, [audioRef]);

  useEffect(() => {
    getSongsData();
    getAlbumsData();
  }, []);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    songsData,
    albumsData,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
