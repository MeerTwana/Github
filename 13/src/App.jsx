import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';

function App() {
  const selectedPlace = useRef(); // Reference to store the currently selected place for removal

  const [userPlaces, setUserPlaces] = useState([]); // State to store the list of places selected by the user

  const [modalIsOpen, setModalIsOpen] = useState(false); // State to control the visibility of the modal

  // Function to open the modal and set the place to be removed
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  // Function to close the modal without removing the place
  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  // Async function to update the userPlaces in the backend
  async function updateUserPlaces(places) {
    try {
      // Make a PUT request to update the user's places on the server
      const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT', // Use PUT method to update the data on the server
        body: JSON.stringify(places), // Convert the places array to a JSON string for the request body
        headers: {
          'Content-Type': 'application/json' // Set the content type to JSON
        }
      });

      const resData = await response.json(); // Parse the response data as JSON
      return resData.message; // Return the message from the server response
    } catch (error) {
      console.error('Failed to update user places:', error); // Log any errors that occur during the fetch
    }
  }

  // Function to handle selecting a place
  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      // Check if the place is already in the list to avoid duplicates
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces; // Return the previous list if the place is already selected
      }
      return [selectedPlace, ...prevPickedPlaces]; // Add the new place to the beginning of the list
    });

    // Update the backend with the new list of places
    await updateUserPlaces([...userPlaces, selectedPlace]);
  }

  // Function to handle removing a place
  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id) // Remove the place from the list
    );

    setModalIsOpen(false); // Close the modal after removing the place
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
