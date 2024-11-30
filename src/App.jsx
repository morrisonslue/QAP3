/* Imports */
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BreedSelector from './components/BreedSelector/BreedSelector';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';

const App = () => {
  // Variables
  const [breed, setBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <div className="content-container">
        <Header title="Dog Image Gallery" />
        <BreedSelector
          breed={breed}
          setBreed={setBreed}
          numImages={numImages}
          setNumImages={setNumImages}
          setImages={setImages}
          setLoading={setLoading}
        />
      </div>
      <ImageGallery images={images} loading={loading} />
      <Footer />
    </div>
  );
};

export default App;





