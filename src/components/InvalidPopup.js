import React from 'react'
import './InvalidPopup.css';

const InvalidPopup = (props) => {

  const closeHandler = () => {
    props.onClose();
  }
  return (
    <div className="popup-style">
      <div className="invalid-title"> <h2>Invalid input</h2></div>
      <div className="invalid-error"><p>{props.mess}</p></div>
      <div className="invalid-error"><button onClick={closeHandler} >Close</button></div>
    </div>
  )
};
export default InvalidPopup;
