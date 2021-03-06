import React from 'react';
import './create-character.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTrue,
  toggleFalse,
  selectToggleValue,
} from '../../features/toggle/toggleSlice.js';

const CreateCharacter = () => {
  const reduxToggleValue = useSelector(selectToggleValue);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if ( reduxToggleValue === false) {
      dispatch(toggleTrue());
    } else {
      dispatch(toggleFalse())
    }
  }

  return (
    <div className="create-character">
      <button onClick={handleButtonClick}
      >{`redux toggle is ... ${String(reduxToggleValue)}`}</button>
    </div>
  )
}

export default CreateCharacter;
