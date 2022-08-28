import { useState } from 'react';

function Index({ workout }) {
  const [newForm, setNewForm] = useState({
    name: '',
    weight: '',
    reps: '',
    image: '',
    url: '',
  });

  const loaded = () => {
    console.log(workout);
    return workout.map(({ name, weight, reps, image, url, _id }) => {
      return (
        <div className="workout" key={_id}>
          <h2>{name}</h2>
          <h2>{weight}</h2>
          <h2>{reps}</h2>
          <h2>{image}</h2>
          <h2>{url}</h2>
        </div>
      );
    });
  };

  const loading = () => {
    console.log(workout);
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form>
        <label>
          Select Workout
          <input></input>
        </label>
      </form>
      {workout ? loaded() : loading()}
    </section>
  );
}

// TODO:: add workout components

export default Index;
