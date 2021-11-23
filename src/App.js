import { useState } from 'react/cjs/react.development';
import './App.css';
import UserInput from './components/UserInput';
import UserList from './components/UserList';


const App = () => {


  const INITIAL_DATA = [{ enteredName: '', enteredAge: 0, id: 7 }];
  const [allUserData, setAllUserData] = useState(INITIAL_DATA);

  const submitInputData = (data) => {
    console.log(data);
    setAllUserData(previousData => { return [...previousData, data] });
    console.log(allUserData);
  }


  return (
    <div>
      <UserInput inputData={submitInputData} />
      <UserList data={allUserData} />

    </div>
  );
}

export default App;
