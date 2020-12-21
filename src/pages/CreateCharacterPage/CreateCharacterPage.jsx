import React, { useState } from 'react';
import './create-character-page.scss';
import createInitialCharacter from '../../helpers.js';

const CreateCharacterPage = () => {
  const [ stats, setStats ] = useState(createInitialCharacter());
  return (
    <div className="create-character-page">
      <span>create character page</span>
      <span>{`intelligence: ${stats.intelligence}`}</span>
      <span>{`speed: ${stats.speed}`}</span>
      <span>{`strength: ${stats.strength}`}</span>
      <span></span>

    </div>
  )
}

export default CreateCharacterPage;
