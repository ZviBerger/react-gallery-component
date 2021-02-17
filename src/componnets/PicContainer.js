import { useEffect, useState } from "react";
import Picture from "./Picture";

const PicContainer = (props) => {
  return (
    <div className="imgs-container">
      {props.images &&
        props.images.map((img) => (
          <Picture key={img.download_url} url={img.download_url} />
        ))}
    </div>
  );
};

export default PicContainer;
