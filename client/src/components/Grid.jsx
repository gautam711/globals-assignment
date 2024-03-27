import React from "react";

function Grid({ image }) {
  return (
    <div className="w-full border border-black rounded-lg">
      <img
        className="w-full h:60 lg:h-72 rounded-t-lg object-cover"
        src={image?.download_url}
        alt="Placeholder"
      />
      <div className="text-xl font-semibold py-4 px-2">{image?.author}</div>
    </div>
  );
}

export default Grid;
