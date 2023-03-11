
import './index.css';
import Employee from './components/employee';
import {useState} from 'react';

function App() {
  const showEmployee = true;
  // let role = "dev"
  const[role,setRole] = useState('dev')

  return (
    <div className="App">
      
      {showEmployee ? (
        <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value)
        }} />
        <div class = "flex flex-wrap">
        <Employee name = "Ann" role="Intern" img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>
        <Employee name = "Anne" role ={role} img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>
        <Employee name = "Anne" role ={role} img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>
        <Employee name = "Ann" role="Intern" img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>
        <Employee name = "Anne" role ={role} img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>
        <Employee name = "Anne" role ={role} img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>
        <Employee name = "Ann" role="Intern" img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>
        <Employee name = "Anne" role ={role} img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>
        <Employee name = "Anne" role ={role} img = "https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg"/>


        </div>
        
        </>

      ) : (
      <p>You can't see the employees</p>  
    )}
      
    </div>
  );
}

export default App;
