import React, { useRef, forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

function Form() {
  const inputRef = useRef(null);
  function handleFocus() {
    inputRef.current.focus();
  }
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

export default Form;
