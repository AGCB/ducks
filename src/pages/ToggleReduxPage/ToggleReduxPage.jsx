import React from 'react';
import './toggle-redux-page.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTrue,
  toggleFalse,
  selectToggleValue,
} from '../../features/toggle/toggleSlice.js';

const ToggleReduxPage = () => {
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
    <div className="toggle-redux-page">
      <span>toggle redux </span>
      <button onClick={handleButtonClick}
      >{`redux toggle value is ... ${String(reduxToggleValue)}`}</button>
    </div>
  )
}

export default ToggleReduxPage;
