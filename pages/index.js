import { useState } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isLight, setLightTheme] = useState(true);

  return (
    <>
    <Head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7WMF6C94VC"></script>
    <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
          
                gtag('config', 'G-7WMF6C94VC');
              `
            }}
          />
    </Head>
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
            color: isLight ? "red" : 'white'
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
    </>
  );
}
