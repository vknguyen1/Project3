import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import workoutArr from '../workoutList';

function Show({ deleteLog, updateLog, workout }) {
  const [updateForm, setUpdateForm] = useState({
    workoutName: '',
    weight: '',
    reps: '',
    type: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    deleteLog(id);
    navigate('/workout-log');
  };

  const handleChange = (event) => {
    setUpdateForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    updateLog(id, updateForm);
    navigate('/workout-log');
  };

  useEffect(() => {
    const workoutLog = workout.find((w) => w._id === id);
    setUpdateForm(workoutLog);
    console.log(workoutLog);
  }, [workout]);

  return (
    <div className="show-container">
      <form onSubmit={handleUpdate}>
        <select
          onChange={handleChange}
          name="workoutName"
          defaultValue={updateForm.workoutName}
        >
          {workoutArr.map((e, index) => (
            <option key={index}>{e.workoutName}</option>
          ))}
        </select>

        <input
          type="text"
          value={updateForm.weight}
          name="weight"
          onChange={handleChange}
          placeholder="weight in lbs"
        />
        <input
          type="number"
          value={updateForm.reps}
          name="reps"
          onChange={handleChange}
          placeholder="how many reps"
        />
        <input
          type="number"
          value={updateForm.type}
          name="type"
          onChange={handleChange}
          placeholder="barbell, dumbells, cables"
        />
        <input type="submit" value="Log workout" />
      </form>
    </div>
  );
}

export default Show;
