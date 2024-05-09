import React from "react";

function Square() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "whith",
          width: "50vw",
          height: "30vh",
          marginBottom: "5vh",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src="https://ลอตเตอรี่พลัส.com/static/media/BannerOrderLottery.44dbd06e.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          alt="Your Image"
        />
      </div>
      <div
        style={{
          backgroundColor: "whith",
          width: "50vw",
          height: "30vh",
          marginBottom: "5vh",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src="https://ลอตเตอรี่พลัส.com/static/media/BannerOrderNokPoints.d3d5ec58.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          alt="Your Image"
        />
      </div>
      <div
        style={{
          backgroundColor: "whith",
          width: "50vw",
          height: "30vh",
          marginBottom: "5vh",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src="https://ลอตเตอรี่พลัส.com/static/media/BannerPreOrder.43d83da5.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          alt="Your Image"
        />
      </div>
    </div>
  );
}

export default Square;
