import React from 'react'
import UserData from './UserData';
import './UserList.css'

const UserList = (props) => {
  return (
    <div className="data-style">
      {props.data.map(userData => (<UserData name={userData.enteredName} age={userData.enteredAge} key={userData.id}></UserData>))}
    </div>
  )
};
export default UserList;