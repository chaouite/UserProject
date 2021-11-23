import React from 'react'
import { useState, useRef, useEffect } from 'react';
import './UserInput.css';
import InvalidPopup from './InvalidPopup';

const UserInput = (props) => {

  const ref = useRef();

  const [isValid, setIsValid] = useState(true);

  const [enteredName, setEnteredName] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const entredNameHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const [enteredAge, setEnteredAge] = useState('');

  const entredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  const onCloseHandler = () => {
    setIsValid(true);

  }


  useEffect(() => {
    const clickOutsideHandler = event => {

      if (!isValid && ref.current && !ref.current.contains(event.target)) {
        setIsValid(true)
      }
    }
    document.addEventListener('click', clickOutsideHandler)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('click', clickOutsideHandler)
    }
  }, [isValid])

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      setErrorMessage(' you should enter valid name and age');

      setEnteredName('');
      setEnteredAge('');
      return;
    }
    if (+enteredAge < 0 || +enteredAge > 99) {
      setIsValid(false);
      setErrorMessage(enteredAge + ' is an invalid age');

      setEnteredName('');
      setEnteredAge('');
      return;
    }
    const userData = {
      enteredName,
      enteredAge,
      id: Math.random().toString()
    }
    props.inputData(userData);
    setEnteredName('');
    setEnteredAge('');

  }

  return (
    <div className="form-control">
      <form onSubmit={submitHandler} className="inputStyling">
        <div >
          <label> Username</label>
          <input value={enteredName} type='text' onChange={entredNameHandler} />
        </div>
        <div >
          <label>Age</label>
          <input value={enteredAge} type='number' onChange={entredAgeHandler} step='1' />
        </div>
        <button type="submit" >Add user</button>
      </form>
      <div ref={ref}>{!isValid && <InvalidPopup mess={errorMessage} onClose={onCloseHandler} />}</div>

    </div >
  )
};
export default UserInput;
