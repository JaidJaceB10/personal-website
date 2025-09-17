import React from "react";

export default function PDFViewer({file, height = "600px"}) {

    return(

    <div style={{ width: "100%", height, marginTop: "2rem" }}>

        <iframe
          src={process.env.PUBLIC_URL + file}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="PDF Viewer"
        ></iframe>
        
      </div>
    );
}