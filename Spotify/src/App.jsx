// import React, { useContext, useEffect, useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Player from "./components/Player";
// import Display from "./components/Display";
// import { PlayerContext } from "./context/PlayerContext";
// import Shimmer from "./Shimmer/Shimmer";

// const App = () => {
//   const { audioRef, track, songsData } = useContext(PlayerContext);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (songsData.length > 0) {
//       setLoading(false);
//     }
//   }, [songsData]);

//   return (
//     <div className="h-screen bg-black">
//       {loading ? (
//         <Shimmer />
//       ) : (
//         <>
//           <div className="h-[90%] flex">
//             <Sidebar />
//             <Display />
//           </div>
//           <Player />
//         </>
//       )}
//       <audio
//         ref={audioRef}
//         src={track ? track.file : ""}
//         preload="auto"
//       ></audio>
//     </div>
//   );
// };

// export default App;

import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} preload="auto" />
    </div>
  );
};

export default App;
