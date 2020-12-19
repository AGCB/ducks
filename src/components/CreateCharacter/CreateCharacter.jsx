import React from 'react';
import './create-character.scss';

const CreateCharacter = () => {
  const [ value, setValue ] = React.useState(false)

  const handleButtonClick = () => {
    console.log('!!! 42');
    setValue(!value);
  }
  return (
    <div className="create-character">
      <button onClick={handleButtonClick}
      >{`current val is ... ${String(value)}`}</button>
    </div>
  )
}

export default CreateCharacter;
