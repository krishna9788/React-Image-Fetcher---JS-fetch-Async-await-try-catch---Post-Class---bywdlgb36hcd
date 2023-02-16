import React from "react";

export const PhotoFrame = (props) => {
  // console.log('url nd title - ', props.url, props.title)
  return (
    <>
      <div className="photoframe">
        <img src={props.url} />
        <div className="caption">{props.title}</div>
      </div>
    </>
  );
};
