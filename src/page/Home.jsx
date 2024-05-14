import { Link } from "react-router-dom";
import bgImage from "/images/homeBg.jpg";
export default function Home() {
  return (
    <div
      id="game-container"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <h1>Play game</h1>
      <Link
        to={"/start"}
        style={{
          backgroundColor: "#fea500",
          padding: "12px 24px",
          borderRadius: "5px",
        }}
      >
        Play!
      </Link>
    </div>
  );
}
