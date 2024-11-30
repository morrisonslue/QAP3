import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './BreedSelector.css';

// component for user to choose breed
const BreedSelector = ({
  breed,
  setBreed,
  numImages,
  setNumImages,
  setImages,
  setLoading,
}) => {
  const [breeds, setBreeds] = useState([]);
  const [error, setError] = useState('');

  // Get the list of dog breeds
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        setBreeds(Object.keys(data.message));
      })
      .catch((error) => {
        console.error('Error - could not get breed list', error);
      });
  }, []);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (numImages < 1) {
      setError('Number has to be more than 0');
      return;
    }
    if (!breed) {
      setError('Choose a breed');
      return;
    }

    setError('');
    setImages([]);
    setLoading(true);

    // Fetch images from Dog CEO API
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => response.json())
      .then((data) => {
        const availableImages = data.message;
        const imagesToDisplay = availableImages.slice(0, numImages);

        if (numImages > availableImages.length) {
          alert('You requested more images than available - here is the maximum amount');
        }

        setImages(imagesToDisplay);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error getting images', error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="breed-selector-form">
      <label>
        Choose a Breed:
        <select value={breed} onChange={(e) => setBreed(e.target.value)} required>
          <option value="" disabled>
            --Choose a breed--
          </option>
          {breeds.map((breedName) => (
            <option key={breedName} value={breedName}>
              {breedName}
            </option>
          ))}
        </select>
      </label>

      <label>
        How Many Images would you like to see:
        <input
          type="number"
          value={numImages}
          onChange={(e) => setNumImages(e.target.value)}
          min="1"
          required
        />
      </label>

      {error && <p className="error-message">{error}</p>}

      <Button text="Fetch Images" type="submit" />
    </form>
  );
};

export default BreedSelector;





