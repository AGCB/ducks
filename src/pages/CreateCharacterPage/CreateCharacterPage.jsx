import React, { useState } from 'react';
import './create-character-page.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateIntelligence,
  character,
} from '../../features/createCharacter/createCharacterSlice.js';
import createInitialCharacter from '../../helpers.js';

const CreateCharacterPage = () => {
  const [ stats, setStats ] = useState(createInitialCharacter());
  const dispatch = useDispatch();
  const charStats = useSelector(character);
  console.log('!! charStats', charStats);
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
