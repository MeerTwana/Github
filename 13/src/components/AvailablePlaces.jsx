import Places from './Places.jsx';
import { useEffect, useState } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching,setIsFetching]= useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]); // Initialize as an empty array

 
  // useEffect(() => {
  //   fetch('http://localhost:3000/places')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Server response was not sent');
  //       }
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       setAvailablePlaces(resData.places);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching places:', error);
  //     });
  // }, []); 
 
  useEffect(() => {
    async function fetchPlaces(){
      setIsFetching(true);
      const response = await  fetch('http://localhost:3000/places');
      const resData =await response.json();
      setAvailablePlaces(resData.places);

      navigator.geolocation.getCurrentPosition((postion) => {

        const SortedPlaces =sortPlacesByDistance(resData.places ,postion.coords.latitude , postion.coords.longitude)
                setAvailablePlaces(SortedPlaces);

      });
      setIsFetching(false);

    }
  fetchPlaces();
  }, []); 

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      loadingText ="Fetching Place data"
      isLoading={isFetching}
      fallBackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
