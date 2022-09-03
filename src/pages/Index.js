import { Link } from 'react-router-dom';

function Index({ workout, deleteLog }) {
  const loaded = () => {
    return workout.map(
      ({ createdAt, workoutName, weight, reps, image, url, _id }) => {
        let newDate = createdAt.split('T');
        return (
          <tr key={_id}>
            <Link to={`/workout-log/${_id}`}>
              <td>{newDate[0]}</td>
            </Link>
            <td>{workoutName}</td>
            <td>{weight}</td>
            <td>{reps}</td>
            <td onClick={handleDelete(_id)}>delete</td>
          </tr>
        );
      },
    );
  };

  const handleDelete = (id) => (event) => {
    deleteLog(id);
  };
  const loading = () => {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  };

  return (
    <div className="table-container">
      <h3>Logged excercises</h3>

      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Date</th>
            <th>Excercise</th>
            <th>Weight</th>
            <th>Reps</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{workout ? loaded() : loading()}</tbody>
      </table>
    </div>
  );
}

// TODO:: add workout components

export default Index;
