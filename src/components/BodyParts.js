import { useState } from 'react';
import { Link } from 'react-router-dom';

function BodyPart(props) {
  const [bodyMap, setBodyMap] = useState(null);

  return (
    <>
      <h1>What are you working out today?</h1>
      <h2>Chest</h2>
      <h2>Back</h2>
      <h2>Legs</h2>
      <h2>Shoudler</h2>
      <h2>Arms</h2>
    </>
  );
}

export default BodyPart;
