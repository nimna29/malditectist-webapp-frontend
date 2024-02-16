import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';
import FileUpload from './components/FileUpload/FileUpload';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [backendActive, setBackendActive] = useState(false);

  useEffect(() => {
    // Replace the current entry on the history stack.
    window.history.replaceState({ ...window.history.state, scrollToTop: true }, '');

    // Function to check backend status
    const checkBackendStatus = async () => {
      try {
        // Make a request to the backend root route
        const response = await fetch(getApiUrl(''));

        // Check if the response is successful (status code 200)
        if (response.ok) {
          setBackendActive(true);
        } else {
          console.error('Backend is not active');
        }
      } catch (error) {
        console.error('Error checking backend status:', error);
      } finally {
        // Set loading to false once the check is complete and the backend is active
        if (backendActive) {
          setTimeout(() => {
            setLoading(false);
          }, 2000); // Adjust the delay time as needed
        }
      }
    };

    // Call the function to check backend status
    checkBackendStatus();
  }, [backendActive]);

  const getApiUrl = (path: string) => {
    const isProduction = process.env.NODE_ENV === 'production';
    const apiUrl = isProduction
      ? `https://malditectist-backend.onrender.com/${path}`
      : `http://localhost:8000/${path}`;
    return apiUrl;
  };

  return (
    <div>
      {loading ? (
        <Preloader message={backendActive ? 'Backend is active. Loading...' : 'Awaiting Backend Activation. Activating...'} />
      ) : (
        backendActive && <FileUpload />
      )}
    </div>
  );
};

export default App;
