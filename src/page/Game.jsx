import { useEffect } from "react";

const Game = () => {
  useEffect(() => {
    // Create an iframe element
    const iframe = document.createElement("iframe");
    // Set the source and dimensions
    iframe.src = "https://i.simmer.io/@Lumox/lumox-multiplayer";
    iframe.style.width = "960px";
    iframe.style.height = "600px";
    iframe.style.marginTop = "32px";
    // Append the iframe to the container
    document.getElementById("game-container").appendChild(iframe);

    // Cleanup function to remove iframe when component unmounts
    return () => {
      document.getElementById("game-container").removeChild(iframe);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="game-container"
    ></div>
  );
};

export default Game;
