import React from 'react'
import './UserData.css';

const UserData = (props) => {

  const userData = `${props.name} (${props.age} years old)`;

  return (
    <div className="user-data">
      <input readOnly={true} value={userData} />
    </div>
  )
};
export default UserData;