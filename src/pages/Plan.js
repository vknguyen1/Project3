import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Abs from '../Images/Abs.png';
import Arms from '../Images/Arms.png';
import Back from '../Images/Back.png';
import Chest from '../Images/Chest.png';
import Legs from '../Images/Legs.png';
import Shoulder from '../Images/Shoulder.png';
import workoutArr from '../workoutList';

function Plan({ excercise }) {
  const [workoutList, setWorkoutList] = useState(workoutArr);
  const [filteredWorkoutList, setFilteredWorkoutList] = useState([]);
  const [exerciseList, setExcerciseList] = useState(null);
  const [newForm, setNewForm] = useState({
    name: '',
  });

  const getExercise = async () => {
    try {
      const response = await fetch(
        'https://exercisedb.p.rapidapi.com/exercises',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '96c6804c09msh75ddb823a8a9febp1af3cejsn70ca447764db',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          },
        },
      );
      const exerciseData = await response.json();

      setExcerciseList(exerciseData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (ele) => {
    let filtered = exerciseList.filter((w) => {
      return w.bodyPart === ele.target.name;
    });
    setFilteredWorkoutList(filtered);
    console.log(filtered);
  };

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    getExercise();
  }, [filteredWorkoutList]);

  return (
    <div className="plan">
      <h1>Choose a muscle group</h1>

      <div className="workout-row-1">
        <img
          className="muscle-img"
          alt="chest"
          src={Chest}
          onClick={handleClick}
          name="chest"
        ></img>
        <img
          className="muscle-img"
          alt="back"
          src={Back}
          onClick={handleClick}
          name="back"
        ></img>
        <img
          className="muscle-img"
          alt="shoulder"
          src={Shoulder}
          onClick={handleClick}
          name="shoulders"
        ></img>
      </div>
      <div className="workout-row-2">
        <img
          className="muscle-img"
          alt="legs"
          src={Legs}
          onClick={handleClick}
          name="segs"
        ></img>
        <img
          className="muscle-img"
          alt="arms"
          src={Arms}
          onClick={handleClick}
          name="arms"
        ></img>
        <img
          className="muscle-img"
          alt="abs"
          src={Abs}
          onClick={handleClick}
          name="abs"
        ></img>
      </div>

      <div className="select-workout">
        <form onSubmit={handleSubmit} className="workout-select">
          <label>Pick Equipment</label>
          <select>
            <option>pick type of equipment</option>
            <option>pick type of equipment</option>
            <option>pick type of equipment</option>
            <option>pick type of equipment</option>
            <option>pick type of equipment</option>
          </select>
          <input type="submit" value="submit" />
        </form>
      </div>

      {/* 
       {filteredWorkoutList.length > 0 ? (
        filteredWorkoutList.map((e, index) => ( 
            <article key={index}>
             <select 
               onChange={handleChange}
               name="name"
               defaultValue={filteredWorkoutList.name}
             >
               {workoutArr.map((e, index) => (
                 <option key={index}>{e.name}</option>
               ))}
             </select>
             <div className="workout-list">
              <Link to={`/workout-create?workoutName=${e.name}`}>
                <h2>{e.name}</h2>
              </Link>
            </div> 
           </article>
         ))
       ) : (
         <p></p>
       )} */}
    </div>
  );
}

export default Plan;
