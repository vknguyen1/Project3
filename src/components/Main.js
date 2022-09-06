import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Home from '../pages/Home';
import Plan from '../pages/Plan';
import Create from '../pages/Create';
import Show from '../pages/Show';
import { useEffect, useState } from 'react';

function Main() {
  const [workout, setWorkout] = useState(null);
  const [exercise, setExercise] = useState(null);
  const API_URL = 'http://localhost:4000/api/workout';

  const getWorkout = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
      });
      const data = await response.json();
      setWorkout(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getExercise = async () => {
    try {
      const response = await fetch(
        'https://exercisedb.p.rapidapi.com/exercises',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '6f3d0cfb70msh30a70a95b51b3eep1d7a15jsn4bbb89ecd219',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          },
        },
      );
      const exerciseData = await response.json();

      setExercise(exerciseData);
    } catch (error) {
      console.log(error);
    }
  };

  const createLog = async (formData) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(formData),
      });
      getWorkout();
    } catch (error) {}
  };

  useEffect(() => {
    getWorkout();
    getExercise();
    console.log(exercise);
  }, []);

  const updateLog = async (id, updatedLog) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(updatedLog),
      });
      getWorkout();
    } catch (error) {}
  };

  const deleteLog = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'Application/json',
        },
      });
      getWorkout();
    } catch (error) {}
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/workout-log"
        element={<Index workout={workout} deleteLog={deleteLog} />}
      />
      <Route path="/workout-plans" element={<Plan exercise={exercise} />} />
      <Route
        path="/workout-create"
        element={<Create createLog={createLog} />}
      />
      <Route
        path="/workout-log/:id"
        element={
          <Show workout={workout} deleteLog={deleteLog} updateLog={updateLog} />
        }
      />
    </Routes>
  );
}

export default Main;
