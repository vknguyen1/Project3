import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Home from '../pages/Home';
import Plan from '../pages/Plan';
import { useEffect, useState } from 'react';

function Main() {
  const [workout, setWorkout] = useState(null);

  const API_URL = 'http://localhost:4000/api/workout';

  const getWorkout = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
      });

      const data = await response.json();
      console.log(data);
      setWorkout(data);
    } catch (error) {
      //TODO:
    }
  };

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workout-log" element={<Index workout={workout} />} />
      <Route path="/workout-plans" element={<Plan />} />
    </Routes>
  );
}

export default Main;
