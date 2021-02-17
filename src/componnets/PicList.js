import { useState, useEffect } from "react";
import PicContainer from "./PicContainer";

const PicList = (props) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
  }, []);

  return <div>{!loading && <PicContainer images={images} />}</div>;
};

export default PicList;
