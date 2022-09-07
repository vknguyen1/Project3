import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Abs from '../Images/Abs.png';
import Arms from '../Images/Arms.png';
import Back from '../Images/Back.png';
import Chest from '../Images/Chest.png';
import Legs from '../Images/Legs.png';
import Shoulder from '../Images/Shoulder.png';
import workoutArr from '../workoutList';

function Plan(props) {
  // const [workoutList, setWorkoutList] = useState(workoutArr);
  const [filteredWorkoutList, setFilteredWorkoutList] = useState([]);
  const [exerciseList, setExerciseList] = useState(null);
  const [muscleGroup, setMuscleGroup] = useState('chest');
  const [equipment, setEquipment] = useState('barbell');
  const [gif, setGIF] = useState(null);
  const [newForm, setNewForm] = useState({
    bodyPart: '',
    equipment: '',
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

      setExerciseList(exerciseData);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleClick = (ele) => {
  //   let filtered = exerciseList.filter((w) => {
  //     return w.bodyPart === ele.target.name;
  //   });
  //   setNewForm(filtered);
  //   console.log(filtered);
  // };

  const handleClick = (ele) => {
    setMuscleGroup(ele.target.name);
    console.log(exerciseList);
  };

  const handleChange = (event) => {
    setEquipment(event.target.value);
    console.log(equipment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let filteredExerciseList = exerciseList.filter((w) => {
      return w.bodyPart === muscleGroup && w.equipment === equipment;
    });
    setFilteredWorkoutList(filteredExerciseList);
    console.log(filteredExerciseList);
  };

  const handleGif = (exercise) => {
    setGIF(exercise);
  };
  // const handleChange = (event) => {
  //   setNewForm((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }));
  // console.log(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   let newFilter = [newForm].filter((w) => {
  //     console.log(w);
  //     return w.equipment === newForm.equipment;
  //   });
  //   setNewForm(newFilter);
  //   // console.log(newForm);
  // };

  useEffect(() => {
    getExercise();
  }, [filteredWorkoutList]);

  return (
    <>
      <div className="plan">
        <h1>Choose a muscle group</h1>
        <div className="img-container">
          <div className="workout-row-1">
            <img
              className="muscle-img"
              alt="chest"
              src={Chest}
              onClick={handleClick}
              name="chest"
            ></img>
            <div className="overlay">
              <div className="overlay-text">chest</div>
            </div>
            <img
              className="muscle-img"
              alt="back"
              src={Back}
              onClick={handleClick}
              name="back"
            ></img>
            <div className="overlay">
              <div className="overlay-text">Back</div>
            </div>
            <img
              className="muscle-img"
              alt="shoulder"
              src={Shoulder}
              onClick={handleClick}
              name="shoulders"
            ></img>
            <div className="overlay">
              <div className="overlay-text">Shoulder</div>
            </div>
          </div>
          <div className="workout-row-2">
            <img
              className="muscle-img"
              alt="legs"
              src={Legs}
              onClick={handleClick}
              name="upper legs"
            ></img>
            <div className="overlay">
              <div className="overlay-text">Legs</div>
            </div>
            <img
              className="muscle-img"
              alt="arms"
              src={Arms}
              onClick={handleClick}
              name="biceps"
            ></img>
            <div className="overlay">
              <div className="overlay-text">Arms</div>
            </div>
            <img
              className="muscle-img"
              alt="abs"
              src={Abs}
              onClick={handleClick}
              name="abs"
            ></img>
            <div className="overlay">
              <div className="overlay-text">Abs</div>
            </div>
          </div>
        </div>
        <div className="select-workout">
          <form
            onSubmit={handleSubmit}
            className="workout-select"
            onChange={handleChange}
          >
            <label>Pick Equipment</label>
            <select defaultValue="barbell" name="equipment">
              <option>barbell</option>
              <option>cable</option>
              <option>dumbbell</option>
            </select>
            <input type="submit" value="submit" />
          </form>
        </div>

        <div className="workout-list-container">
          <div>
            {filteredWorkoutList.length > 0 ? (
              filteredWorkoutList.map((e, index) => (
                <article key={index}>
                  <div className="workout-list">
                    <h2
                      className="listItem"
                      name={e.name}
                      onClick={() => {
                        handleGif(e.gifUrl);
                      }}
                    >
                      {e.name}
                    </h2>
                    <Link to={`/workout-create?workoutName=${e.name}`}>
                      <button className="button">Log</button>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
      {setGIF ? (
        <div className="gif">
          {' '}
          <img src={gif} />
        </div>
      ) : null}
    </>
  );
}

export default Plan;
