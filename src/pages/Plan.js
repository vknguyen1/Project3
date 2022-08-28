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
import BodyPart from '../components/BodyParts';

function Plan(props) {
  const [workoutList, setWorkoutList] = useState(workoutArr);
  const [filteredWorkoutList, setFilteredWorkoutList] = useState([]);

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  // };
  // const handleSubmit = () => {};

  const handleClick = (ele) => {
    let filtered = workoutList.filter((w) => {
      return w.bodyPart === ele.target.name;
    });
    console.log(filtered);
    setFilteredWorkoutList(filtered);
  };

  useEffect(() => {
    console.log(filteredWorkoutList);
  }, [filteredWorkoutList]);

  return (
    <>
      <h1>Choose a muscle group</h1>
      <div className="workout-select">
        <img src={Chest} onClick={handleClick} name="Chest"></img>
        <img src={Back} onClick={handleClick} name="Back"></img>
        <img src={Shoulder} onClick={handleClick} name="Shoulders"></img>
        <img src={Legs} onClick={handleClick} name="Legs"></img>
        <img src={Arms} onClick={handleClick} name="Arms"></img>
        <img src={Abs} onClick={handleClick} name="Abs"></img>
      </div>

      {filteredWorkoutList.length > 0 ? (
        filteredWorkoutList.map((e, index) => (
          <article key={index}>
            <div classname="worlout-list">
              <h2>{e.workoutName}</h2>
            </div>
          </article>
        ))
      ) : (
        <p>Select a workout</p>
      )}
    </>
  );
}

export default Plan;
