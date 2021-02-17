import { useState } from "react";
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isLight, setLightTheme] = useState(true);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: isLight ? "#fff" : "#222",
        backgroundImage: isLight ? "none" : `url('/focus_mode.gif')`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 50,
          right: 50,
        }}
      >
        <button
          role="button"
          onClick={() => setLightTheme(!isLight)}
          className={styles.button}
          style={{
            backgroundColor: isLight ? "#fff" : "red",
            color: isLight ? "blue" : 'white'
          }}
        >
          {isLight ? "Focus Mode" : "Calm Mode"}
        </button>
      </div>
      <div
        style={{
          backgroundImage: isLight
            ? `url('/nunes_ultimo-gas.png')`
            : `url('/nunes_ultimo-gas_whith_evil-eyes.png')`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: 700,
          height: '80vh',
        }}
      />
    </div>
  );
}
