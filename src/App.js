
import './index.css';
import Employee from './components/employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const showEmployee = true;
  // let role = "dev"
  const[role,setRole] = useState('dev')

  const[employees, setEmployees] = useState([
    {
      id:1, name:'Anne', role:'Recruiter', img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:2, name:'Kim', role:'IT', img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:3, name:'John', role:'HR', img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:4, name:'Flora', role:'Developer', img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:5, name:'Keith', role:'Associate', img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:6, name:'Rose', role:'Manager', img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },
  ]);

  return (
    <div className="App">
      
      {showEmployee ? (
        <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value)
        }} />
        <div className= "flex flex-wrap justify cebter">
          {employees.map((employee) => {
            console.log(employee);
            return (
              <Employee 
                key={uuidv4()}
                name={employee.name} 
                role={employee.role} 
                img={employee.img} 
              />
            );

          })}
        </div>
        
        </>

      ) : (
      <p>You can't see the employees</p>  
    )}
      
    </div>
  );
}

export default App;
