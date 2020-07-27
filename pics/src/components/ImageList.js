import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.small} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
