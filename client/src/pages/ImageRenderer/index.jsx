import React, { useEffect, useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { fetchData } from "../../services/images";
import Grid from "../../components/Grid";

function ImageRenderer() {
  const [totalImages, setTotalImages] = useState(0);
  const [images, setImages] = useState([]);
  const [skip, setSkip] = useState(0);

  const cb = () => {
    if (images.length < totalImages && images.length > 0) {
      setSkip((prev) => prev + 1);
    }
  };

  const [observerTarget] = useInfiniteScroll(cb, [totalImages, images.length]);

  const asyncFetchImages = async () => {
    const data = await fetchData(skip);
    setImages([...images, ...data?.data]);
    console.log({ data });
  };

  const asyncFetchImagescount = async () => {
    const data = await fetchData(skip, true);

    setTotalImages(data?.data?.count);
  };

  useEffect(() => {
    asyncFetchImagescount();
  }, []);

  useEffect(() => {
    asyncFetchImages();
  }, [skip]);

  return (
    <div>
      {images?.length > 0 && (
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {images.map((image) => {
              return <Grid image={image} key={image?._id} />;
            })}
          </div>

          <div ref={observerTarget} />
        </div>
      )}
    </div>
  );
}

export default ImageRenderer;
