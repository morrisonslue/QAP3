import './ImageGallery.css';

// Image Gallery component (to show fetched images)
const ImageGallery = ({ images, loading }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="image-gallery">
      {images.map((imageUrl, index) => (
        <div className="image-container" key={index}>
          <img src={imageUrl} alt="Picture of a dog" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;




