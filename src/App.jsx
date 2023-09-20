import React from "react";
import QRCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <img src={QRCode} alt="QR Code image" className="QRCode" />
        <div className="allTextArea">
          <h2 className="Title">
            Improve your front-end skills by building projects.
          </h2>
          <p className="desc">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
