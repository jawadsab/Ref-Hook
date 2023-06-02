import React, { useRef } from 'react';

function FocusTextInput() {
  const inputRef = useRef(null);

  function handleOnBtnClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleOnBtnClick}>Focus the Input</button>
    </div>
  );
}

export default FocusTextInput;
