import React from 'react';
import './create-character.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTrue,
  toggleFalse,
  selectToggleValue,
} from '../../features/toggle/toggleSlice.js';

const CreateCharacter = () => {
  const reduxValue = useSelector(selectToggleValue);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if ( reduxValue === false) {
      dispatch(toggleTrue());
    } else {
      dispatch(toggleFalse())
    }
  }
  return (
    <div className="create-character">
      <button onClick={handleButtonClick}
      >{`current val is ... ${String(reduxValue)}`}</button>
    </div>
  )
}

export default CreateCharacter;
