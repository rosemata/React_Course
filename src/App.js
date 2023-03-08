
import './index.css';
import Employee from './components/employee';
import {useState} from 'react';

function App() {
  const showEmployee = true;
  // let role = "dev"
  const[role,setRole] = useState('dev')

  return (
    <div className="App bg-red-300">
      
      {showEmployee ? (
        <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value)
        }} />
        <Employee name = "Ann" role="Intern"/>
        <Employee name = "Anne" role ={role}/>
        
        </>

      ) : (
      <p>You can't see the employees</p>  
    )}
      
    </div>
  );
}

export default App;
