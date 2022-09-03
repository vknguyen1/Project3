import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';
import { useState, useEffect } from 'react';
import Abs from '../Images/Abs.png';
import Arms from '../Images/Arms.png';
import Back from '../Images/Back.png';
import Chest from '../Images/Chest.png';
import Legs from '../Images/Legs.png';
import Shoulder from '../Images/Shoulder.png';
import workoutArr from '../workoutList';
import Index from './Index';

function Plan(props) {
  const [workoutList, setWorkoutList] = useState(workoutArr);
  const [filteredWorkoutList, setFilteredWorkoutList] = useState([]);

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  // };
  // const handleSubmit = () => {};

  const handleClick = (ele) => {
    let filtered = workoutList.filter((w) => {
      return w.muscleGroup === ele.target.name;
    });
    setFilteredWorkoutList(filtered);
  };

  useEffect(() => {}, [filteredWorkoutList]);

  return (
    <div className="plan">
      <h1>Choose a muscle group</h1>

      <div className="workout-row-1">
        <img
          className="muscle-img"
          alt="chest"
          src={Chest}
          onClick={handleClick}
          name="Chest"
        ></img>
        <img
          className="muscle-img"
          alt="back"
          src={Back}
          onClick={handleClick}
          name="Back"
        ></img>
        <img
          className="muscle-img"
          alt="shoulder"
          src={Shoulder}
          onClick={handleClick}
          name="Shoulders"
        ></img>
      </div>
      <div className="workout-row-2">
        <img
          className="muscle-img"
          alt="legs"
          src={Legs}
          onClick={handleClick}
          name="Legs"
        ></img>
        <img
          className="muscle-img"
          alt="arms"
          src={Arms}
          onClick={handleClick}
          name="Arms"
        ></img>
        <img
          className="muscle-img"
          alt="abs"
          src={Abs}
          onClick={handleClick}
          name="Abs"
        ></img>
      </div>

      {filteredWorkoutList.length > 0 ? (
        filteredWorkoutList.map((e, index) => (
          <article key={index}>
            <div className="workout-list">
              <Link to={`/workout-create?workoutName=${e.workoutName}`}>
                <h2>{e.workoutName}</h2>
              </Link>
            </div>
          </article>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Plan;
