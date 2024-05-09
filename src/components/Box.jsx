import React from "react";

const Box = () => {
  return (
    <div className="container-fluid">
      <div
        className="row d-flex flex-column align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div
          className="bg-danger w-100 d-flex justify-content-center align-items-center"
          style={{
            height: "30vh",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <h3 className="text-white">คำสั่งซื้อ</h3>
        </div>
        <div
          className="bg-white p-3 col-md-8 col-lg-6 position-relative"
          style={{
            top: "-32px",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h4 className="m-0">Name</h4>
          <h4 className="m-0">PassID:xxxxxx</h4>
        </div>
      </div>
    </div>
  );
};

export default Box;
