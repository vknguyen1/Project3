import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function useQuery() {
  //search is a string of workoutName=blah and URLSearch
  //params converts to an object to use helper methods to get value of query
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function Create({ createLog }) {
  const query = useQuery();
  let navigate = useNavigate();
  const [newForm, setNewForm] = useState({
    workoutName: query.get('workoutName') ?? '',
    weight: '',
    reps: '',
    type: '',
  });

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createLog(newForm);
    navigate('/workout-log');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="workout-form">
        <h1>Log your excercise</h1>
        <div className="workout-row-1">
          <label className="workout-select">Workout Name</label>
          <input
            type="string"
            value={newForm.workoutName}
            name="weight"
            onChange={handleChange}
            placeholder="in lbs"
          />

          {/* <select
            value={newForm.workoutName}
            onChange={handleChange}
            name="workoutName"
          >
            {workoutArr.map((e, index) => (
              <option key={index}>{e.workoutName}</option>
            ))}
          </select> */}
          <label className="workout-select">Weight</label>
          <input
            type="number"
            value={newForm.weight}
            name="weight"
            onChange={handleChange}
            placeholder="in lbs"
          />
          <label className="workout-select">Reps</label>
          <input
            type="number"
            value={newForm.reps}
            name="reps"
            onChange={handleChange}
            placeholder="how many reps"
          />
        </div>
        <div className="workout-row-2">
          {/* <label className="workout-select">type</label> */}
          {/* <input
            type="text"
            value={newForm.type}
            name="type"
            onChange={handleChange}
            placeholder="barbell, dumbells, cables"
          /> */}

          <input type="submit" value="Log workout" />
        </div>
      </form>
    </div>
  );
}

export default Create;
