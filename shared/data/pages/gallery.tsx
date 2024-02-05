import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";


export default function Gallery2() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "../../../assets/images/media/media-4.jpg",
"../../../assets/images/media/media-5.jpg",
"../../../assets/images/media/media-8.jpg",
"../../../assets/images/media/media-9.jpg",
"../../../assets/images/media/media-12.jpg",
"../../../assets/images/media/media-15.jpg",
"../../../assets/images/media/media-17.jpg",
"../../../assets/images/media/media-5.jpg"
  ];
  const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div id="" className="row">
        {images.map((image,index) =>  (
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12"
              key={Math.random()}
            >
              <img onClick={() =>openImageViewer(index)} src={`${image}`} data-gallery="gallery1" className="glightbox card"  alt=""/>
            </div>
          )
        )}
        {isViewerOpen && (
                    <ImageViewer key={Math.random()}
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                    />
                )}
    </div>
  );
}
