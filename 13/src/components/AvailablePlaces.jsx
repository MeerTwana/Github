import Places from './Places.jsx';

import { useEffect, useState } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Server response was not sent');
        }
        return response.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places);
      })
      .catch((error) => {
        console.error('Error fetching places:', error);
      });
  }, []); 

  return (
    <Places
      title="Available Places"
      places={availablePlaces}


export default function AvailablePlaces({ onSelectPlace }) {
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
};
}
