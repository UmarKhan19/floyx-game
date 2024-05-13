import "./App.css";

function App() {
  const playGame = () => {
    //Create an iframe element
    const iframe = document.createElement("iframe");
    //Set the source and dimensions
    iframe.src = "https://i.simmer.io/@Lumox/lumox-multiplayer";
    iframe.style.width = "960px";
    iframe.style.height = "600px";
    iframe.style.marginTop = "32px";
    //Append the iframe to the container
    document.getElementById("game-container").appendChild(iframe);
  };

  return (
    <>
      <div
        id="game-container"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Play game</h1>
        <button onClick={playGame}>Play!</button>
      </div>
    </>
  );
}

export default App;
