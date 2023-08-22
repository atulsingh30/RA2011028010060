import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await axios.get(
          'http://20.244.56.144/train/schedule',
          {
            headers: {
              Authorization: `Bearer yourAuthTokenHere`, // Replace with your actual token
            },
          }
        );
        setTrains(response.data);
      } catch (error) {
        console.error('Fetch train data error:', error);
      }
    };

    fetchTrainData();
  }, []);

  return (
    <div>
      <h2>Train Schedule</h2>
      {/* Display train schedule */}
    </div>
  );
};

export default TrainSchedule;